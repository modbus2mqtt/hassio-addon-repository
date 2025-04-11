const { defineConfig } = require('cypress')
const EventEmitter = require('node:events')

const MqttHelper = require('./cypress/functions/mqtt')
const waitOn = require('wait-on')
const spawn = require('child_process').spawn
const execFileSync = require('child_process').execFileSync
const path = require('path')
const fs = require('fs')
const { exec } = require('child_process')
const { clearTimeout } = require('node:timers')

const stopServiceTimeout = 20000
var initControllers = []
var resetControllers = []
var logStartupFlag = false
var logServersFlag = false
function pidIsRunning(pid) {
  try {
    process.kill(pid, 'SIGINT')
    return true
  } catch (e) {
    let rc = e.code != 'ESRCH'
    return rc
  }
}
function logStartup(msg) {
  if (logStartupFlag) console.log(msg)
}
function logServer(msg) {
  if (logStartupFlag) console.log(msg)
}
function stopChildProcess(c) {
  logStartup('stopChildProcess ' + c.command + ' ' + c.child_process.pid)
  if (c.killpid > 0) {
    logStartup(execFileSync('kill', ['-SIGINT', c.killpid.toString()]))
  } else
    c.child_process.kill('SIGINT', (err) => {
      logStartup('Aborted: ' + JSON.stringify(err))
    })
}
let stoppedTimer = {}
let tmpdirs = []
let onAllProcessesStopped = new EventEmitter()
function startProcesses(command, args, ports, controllerArray) {
  return new Promise((resolve, reject) => {
    if (controllerArray.length == 0) {
      let pathes = process.env.PATH.split(path.delimiter)
      pathes.unshift('')
      let execFile = pathes.find((dir) => fs.existsSync(path.join(dir, command)))
      if (execFile) {
        args.forEach((arg) => {
          let cmd = command + ' ' + arg
          logStartup('starting ' + cmd)
          let child_process = spawn(path.join(execFile, command), arg.split(' '))
          const cmdObj = {
            command: cmd,
            prefix: arg,
            child_process: child_process,
            onData: function (data) {
              logServer(this.prefix + ':' + data)

              data
                .toString()
                .split('\n')
                .forEach((line) => {
                  if (line.startsWith('TMPDIR=')) {
                    let t = tmpdirs.find((tc) => tc.command == this.command)
                    let tmp = line.substring('TMPDIR='.length).trim()
                    if (t) t.tmpdir = tmp
                    else tmpdirs.push({ command: this.command, tmpdir: tmp })
                  }
                  if (line.startsWith('KILLPID=')) {
                    this.killpid = Number.parseInt(line.substring('KILLPID='.length))
                  }
                })
            },
            onClose: function (controllerArray, code) {
              logStartup(`${cmd} exited with code ${code}`)
              const findCommand = (c) => c.command == cmd
              let l = controllerArray.length
              if (controllerArray && controllerArray.length) {
                let idx = controllerArray.findIndex(findCommand)
                if (idx >= 0) {
                  controllerArray.splice(idx, 1)
                  if (controllerArray.length == 0) {
                    logStartup('All Processes stopped ' + stoppedTimer.timer)
                    onAllProcessesStopped.emit('stopped')
                  } else {
                    controllerArray.forEach((c) => logStartup('Living ' + c.command))
                  }
                } else logStartup('Command not found ' + cmd)
              }
              logStartup('onClose Living processes ' + controllerArray.length)
            },
          }
          controllerArray.push(cmdObj)
          child_process.stdout.on('data', cmdObj.onData.bind(cmdObj))
          child_process.stderr.on('data', cmdObj.onData.bind(cmdObj))
          child_process.on('close', cmdObj.onClose.bind(cmdObj, controllerArray))
        })
        if (args.length == controllerArray.length) {
          waitForPorts(args, controllerArray, ports)
            .then(() => {
              logStartup('Processes started')
              resolve('OK')
            })
            .catch(reject)
        }
      }
    } else {
      reject(new Error('There are running processes'))
    }
  })
}
function waitForPorts(args, controllerArray, ports) {
  return new Promise((resolve, reject) => {
    if (!args || !controllerArray || args.length != controllerArray.length) {
      logStartup('Not all Processes started')
      reject('Processes not started correctly')
      return
    }
    logStartup('opts')

    let opts = {
      resources: [],
      timeout: 20000,
    }
    if (ports && ports.length) {
      ports.forEach((port) => {
        opts.resources.push('tcp:localhost:' + port)
      })
    }

    waitOn(opts)
      .then(() => {
        logStartup('WaitThen')
        let rc = []
        logStartup('waitSuccess ' + args[0])
        resolve('Process started')
      })
      .catch(reject)
  })
}
function stopServices(controllerArray) {
  return new Promise((resolve, reject) => {
    if (controllerArray.length == 0) resolve('OK')
    else {
      let interv = setInterval(() => {
        controllerArray.forEach((c, idx) => {
          // Sometimes the processes are dead,
          // but there is no close event in this case
          // delete the controllerArray entry
          let killpid = c.killpid
          if (!c.killpid) killpid = c.child_process.pid
          logStartup('pid ' + killpid)
          if (killpid && !pidIsRunning(killpid)) {
            controllerArray.splice(idx, 1)
          }
        })
        if (controllerArray.length == 0) {
          logStartup('All processes stopped by process kill')
          clearInterval(interv)
          interv = 0
          onAllProcessesStopped.emit('stopped')
        } else logStartup('process kill has still ' + controllerArray.length)
      }, 500)
      stoppedTimer.timer = setTimeout(() => {
        logStartup('Stopping Services timeout')
        reject('Stopping processes timed out')
        if (interv) clearInterval(interv)
      }, stopServiceTimeout)
      onAllProcessesStopped.on('stopped', () => {
        if (stoppedTimer.timer != undefined) clearTimeout(stoppedTimer.timer)
        stoppedTimer.timer = undefined
        if (interv) clearInterval(interv)
        interv = 0
        resolve('OK')
      })
      controllerArray.forEach(stopChildProcess)
    }
  })
}

function restartServers(command, args, ports, controllerArray) {
  return new Promise((resolve, reject) => {
    logStartup('RestartServers')
    let pathes = process.env.PATH.split(path.delimiter)
    pathes.unshift('')
    let execFile = pathes.find((dir) => fs.existsSync(path.join(dir, command)))
    if (execFile) {
      if (controllerArray.length) {
        stoppedTimer.timer = setTimeout(() => {
          logStartup('Stopping timeout ' + args[0] + ' ' + stoppedTimer.timer)
          reject('Stopping processes timed out ')
        }, stopServiceTimeout)
        controllerArray.forEach(stopChildProcess)
      }
      logStartup('Restart:StartProcess ' + stoppedTimer.timer)
      startProcesses(execFile, command, args, controllerArray, stoppedTimer, ports, () => {
        logStartup('RestartServer resolvedXX')
        resolve('OK')
      })
        .then(() => {
          logStartup('RestartServers resolved')
          resolve('OK')
        })
        .catch(reject)
    } else reject('exec file for ' + command + ' not found')
  })
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      logStartupFlag = config.env.logstartup
      console.log('Startup Logging is ' + (logStartupFlag ? 'enabled' : 'disabled'))
      logServersFlag = config.env.logservers
      console.log('Server Logging is ' + (logServersFlag ? 'enabled' : 'disabled'))
     
      // implement node event listeners here
      on('task', {
        mqttConnect(connectionData) {
          return new Promise((resolve, reject) => {
            // mqtt connect with onConnected = resolve
            let mqttHelper = MqttHelper.getInstance()
            mqttHelper.connect(connectionData)
            resolve('connected')
          })
        },
        mqttClose() {
          return new Promise((resolve, reject) => {
            // mqtt connect with onConnected = resolve
            let mqttHelper = MqttHelper.getInstance()
            mqttHelper.close()
            resolve('closed')
          })
        },
        mqttSubscribe(topic) {
          let mqttHelper = MqttHelper.getInstance()
          mqttHelper.subscribe(topic)
          return null
        },
        mqttPublish(topic, payload) {
          let mqttHelper = MqttHelper.getInstance()
          mqttHelper.publish(topic, payload)
          return null
        },
        mqttGetTopicAndPayloads() {
          return new Promise((resolve) => {
            let mqttHelper = MqttHelper.getInstance()
            resolve(mqttHelper.getTopicAndPayloads())
          })
        },
        mqttResetTopicAndPayloads() {
          let mqttHelper = MqttHelper.getInstance()
          mqttHelper.resetTopicAndPayloads()
          return null
        },
        e2eServicesStart() {
          logStartup('e2eServicesStart')
          return startProcesses(
            'sh',
            [
              'cypress/servers/mosquitto',
              'cypress/servers/modbus2mqtt ' + config.env.modbus2mqttE2eHttpPort,
              'cypress/servers/modbus2mqtt ' + config.env.modbus2mqttAddonHttpPort + ' localhost:' + config.env.nginxAddonHttpPort,
            ],
            [
              config.env.mosquittoAuthMqttPort,
              config.env.mosquittoNoAuthMqttPort,
              config.env.modbus2mqttAddonHttpPort,
              config.env.modbus2mqttE2eHttpPort,
            ],
            resetControllers
          )
        },
        e2eServicesStop() {
          logStartup('e2eStop')
          return stopServices(resetControllers)
        },
        e2eServicesStart() {
          logStartup('e2eServicesStart')
          return startProcesses(
            'sh',
            [
              'cypress/servers/mosquitto',
              'cypress/servers/modbus2mqtt ' + config.env.modbus2mqttE2eHttpPort,
              'cypress/servers/modbus2mqtt ' + config.env.modbus2mqttAddonHttpPort + ' localhost:' + config.env.nginxAddonHttpPort,
            ],
            [
              config.env.mosquittoAuthMqttPort,
              config.env.mosquittoNoAuthMqttPort,
              config.env.modbus2mqttAddonHttpPort,
              config.env.modbus2mqttE2eHttpPort,
            ],
            resetControllers
          )
        },
        testWait() {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('OK')
            }, 30000)
          })
        },
        getTempDir(command) {
          return new Promise((resolve, reject) => {
            let parts = command.split(':')

            let tmp = tmpdirs.find((t) => t.command.indexOf(command) >= 0)
            if (!tmp) reject(new Error('getTempDir: command not found  ' + command + ' ' + tmpdirs.length))
            else if (tmp.tmpdir) resolve(tmp.tmpdir)
            else reject(new Error('getTempDir: tmpdir not defined  ' + command))
          })
        },
        e2eStop() {
          return new Promise((resolve) => {
            logStartup('e2eStop')
            // initControllers.forEach(stopChildProcess)
            resetControllers.forEach(stopChildProcess)
            resolve('Stopped')
          })
        },
        log(msg) {
          console.log(msg)
          return 'OK'
        },
      })
    },
    env: {
      logstartup: false, // Set to true to log startup services messages
      logservers: false,
      nginxAddonHttpPort: 3006, //nginx
      modbus2mqttAddonHttpPort: 3004, //ingress port
      modbusTcpHttpPort: 3002,
      modbus2mqttE2eHttpPort: 3005,
      mosquittoAuthMqttPort: 3001,
      mosquittoNoAuthMqttPort: 3003,
      mqttconnect: {
        mqttserverurl: 'mqtt://localhost:3001',
        username: 'homeassistant',
        password: 'homeassistant',
      },
    },
  },
})
