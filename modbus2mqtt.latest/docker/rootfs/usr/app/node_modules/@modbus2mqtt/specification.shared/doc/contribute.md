# Contribution
What can you contribute to Modbus <=>MQTT?
* Specifications
* Fixes and new Features
* Translations for Specifications
* Translation for the UI (not implemented yet)

## Contribute Specifications


This is the easiest contribution.
All you need is a github access token Details at https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-toke

### Configure Github token
You can configure this token in the modbus2mqtt Config UI in the configure Github section

### Contribute a local specification
You can contribute either changed specifications or new ones.
* Open "Contribute/Import/Export" from the Menu at left top of the UI
* Search for the contribution
* Make sure, the specification has no errors
* Press the "contribute" Button
* Wait a while.
* Your changes are contributed.

# Fixes and Features

This is a bit more complex. 

## Prerequisites:

As of now, the following operating systems are supported for development:
1. Ubuntu or Debian
2. Mac OS

---
**NOTE**

Windows is not supported yet. 

---

You need a Development Environment. Strong recommendation: Visual Code

You need the following tools
* Github Command line client (https://cli.github.com/)
  Install it from https://github.com/cli/cli/blob/trunk/docs/install_linux.md
* Git
* Python3 (is available in most distributions
* nodejs (https://nodejs.org/en/download)
* Some vscode extensions
  
```
sudo install vscode git
```
## configure github ssh
The python scripts rely on ssh connection to github.
So create a personal ssh certificate and upload the public part to your github account
More details at: https://docs.github.com/de/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

## Download the git repositories
Open a terminal and do the following steps:
```
git clone git@github.com:modbus2mqtt/modbus2mqtt.dev.git
cd modbus2mqtt.dev
bin/pulls.py init -b <your feature branch>
```
The pulls.py init command will clone the required repositories. If you enter the ``-b <branch>`` a new fewture branch will be created in all repositories.

## How to work with git and github
Modbus2mqtt has the following github repositories for developping typescript
* server: The backend imlementation
* angular: The User Interface
* specification: Management (persistence) of Specifications
* specification.shared: Contains mainly data structures for exchange from specification to angular and back
* server.shared: Contains mainly data structures for exchange from specification to angular and back

## Typical Development workflow

* Call ``bin/pulls.py init -b <your feature>`` to initialize the development environment for first time use
* If the development environment is already initialized, you can use ``bin/pulls.py branch -b <your feature>`` to switch to a new branch
* Call ``bin/pulls.py sync`` to download latest changes from the original repository **github.com:modbus2mqtt/*** to your local repositories
* Testing: you can execute ``npm run test`` in the **server**, **specification** and **angular** component. This will execute unit tests
  for the component
* End-2-End test: Use ``cypress run`` in the **server** component
* Check in your changes. If the first line of the commit message contains either **[bug]** or **[feature]** . The first line will be used as topic for
  a pull request. The rest will be the body text of the pull request
* Create pull requests with ``bin/pulls.py createpull `` This will create pull requests in all changed repositories.

## NPM dependencies

The pulls.py script manages the dependencies of all development components.
You can call ``bin/pulls.py dependencies [local','pull' or'remote]`` to change the dependency in your environment.
* **local** will ``npm install`` dependencies to the modbus2mqtt components via file system (../<component>)
* **remote** will ``npm install`` dependencies to the modbus2mqtt modbus2mqtt main branch versions of the dependant components
* **pull** will ``npm install`` dependencies to a given pullrequest id

---
**NOTE**

bin/pulls.py createpull will reset the dependencies to **remote** before checkin

---
## Repository usage and Branch structures
* modbus2mqtt Repositories: They contain a **main** and a **release** branch-
  The release branch is used by maintainers only when creating a new release
  The main branch contains the latest pulled changes.
* The hassio-addon-repository contains a **dev** and a **main** branch
  The **dev** branch contains the homeassistant addon with all pulled changes
  The **main** branch contains only releases

If you want to use the latest changes within home assistant, add the following url https://github.com/modbus2mqtt/hassio-addon-repository#dev
It will take a little longer to install the addon, because the docker file needs to be built before installation

  
