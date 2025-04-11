let prefix = ''

function runRegister(authentication, port) {
  if( prefix.length )
    cy.visit('http://localhost:' + Cypress.env('nginxAddonHttpPort') +'/' + prefix)
  else
    cy.visit('http://localhost:' + Cypress.env('modbus2mqttE2eHttpPort'))
  if (authentication) {
    cy.get('[formcontrolname="username"]').type('test')
    cy.get('[formcontrolname="password"]').type('test')
    cy.get('button[value="authentication"]').click()
  } else cy.get('button[value="noAuthentication"]').click()
  cy.url().should('contain', prefix + '/configure')
}
function runConfig(authentication) {
  let port = authentication ? Cypress.env('mosquittoAuthMqttPort') : Cypress.env('mosquittoNoAuthMqttPort')
  cy.get('[formcontrolname="mqttserverurl"]').type('mqtt://localhost:' + port, { force: true })
  cy.get('[formcontrolname="mqttserverurl"]').trigger('change')
  if (authentication) {
    cy.get('[formcontrolname="mqttuser"]').type('homeassistant', { force: true })
    cy.get('[formcontrolname="mqttpassword"]').type('homeassistant', { force: true })
    cy.get('[formcontrolname="mqttpassword"]').trigger('change')
  }
  cy.get('div.saveCancel button:first').click()
  cy.url().should('contain', prefix + '/busses')
}

function runBusses() {
  cy.url().should('contain', prefix + '/busses')
  cy.get('[role="tab"] ').eq(1).click()
  cy.get('[formcontrolname="host"]').type('localhost', { force: true })
  cy.get('[formcontrolname="port"]').type('{backspace}{backspace}{backspace}3002', { force: true })
  cy.get('[formcontrolname="timeout"]').eq(0).type('{backspace}{backspace}{backspace}500', { force: true })
  cy.get('[formcontrolname="host"]').trigger('change')
  cy.get('div.card-header-buttons button:first').click()
  // List slaves second header button on first card
  cy.get('div.card-header-buttons:first button').eq(1).click()
}

function runSlaves(willLog) {
  let logSetting = { log: willLog }
  cy.url().should('contain', prefix + '/slaves')
  cy.get('[formcontrolname="slaveId"]').type('3{enter}', { force: true })
  // Show specification third header button on first card
  cy.get('div.card-header-buttons:first button:contains("add_box")', logSetting).eq(0, logSetting).click(logSetting)
  cy.url().should('contain', prefix + '/specification')
}
function e2eReset(willLog){
  let logSetting = { log: willLog }
  cy.task("e2eServicesStop", logSetting)
  cy.task("e2eServicesStart", logSetting)

}
describe('End to End Tests', () => {
  before(() => {
    let logSetting = { log: false }
  })
  after(() => {
    let logSetting = { log: false }
    // wait for all tests then 
    cy.task('e2eServicesStop', logSetting)
  })

  it(
    'register->mqtt->busses->slaves->specification with authentication',
    {
      retries: {
        runMode: 3,
        openMode: 1,
      },
    },
    () => {

      e2eReset(true)
      runRegister(true)
      runConfig(true)
      runBusses()
      runSlaves(true)
    }
  )
  it(
    'register->mqtt with no authentication',
    {
      retries: {
        runMode: 3,
        openMode: 1,
      },
    },
    () => {
      e2eReset(false)
      runRegister(false, Cypress.env('modbus2mqttE2eHttpPort'))
      runConfig(false)
    }
  )
  it(
    'mqtt hassio addon',
    {
      retries: {
        runMode: 3,
        openMode: 1,
      },
    },
    () => {
      e2eReset(false)
      prefix = 'ingress'
      cy.visit('http://localhost:' + Cypress.env('nginxAddonHttpPort') +'/' + prefix)
      runBusses()
    }
  )
})
