# Vdotok JS One-to-One Audio/Video Call
This is a demo project to demonstrate “One-to-One Audio/Video Call” using Angular 9+.

## Live Demo
 Click <a href="https://one2one.vdotok.com" target="_blank" title="Chat Demo">here</a> to visit the live demo of VdoTok JS One-to-One Audio/Video Call.
  
 
## Prerequisites:
- Node.js v4.x.x or later 
- npm v3.x.x or later 

To verify the version of Node.js and npm, open **Terminal/Console** window and run `node -v` and `npm –v`. Older versions produce errors.

Click <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">here</a> to download and install the latest versions of Node.js and npm.  

We recommend <a href="https://github.com/nvm-sh/nvm" target="_blank">nvm </a> for managing multiple versions of node and npm.
    

## Project Signup and Project ID

Register at <a href="https://userpanel.vdotok.com/norgic/chatSDK" target="_blank">VdoTok</a> to get Authentication Token and Project ID.

## Setting up the local environment

To install Angular on your local system, you need the following:

### Node.js 

Angular requires an active LTS or maintenance LTS version of Node.js. For more information on installing Node.js, see <a href="https://nodejs.org">nodejs.org</a>. If you are unsure what version of Node.js runs on your system, run `node -v` in a **Terminal** window.

### npm package manager

Angular, the Angular CLI, and Angular applications depend npm packages on <a href="https://docs.npmjs.com/getting-started/what-is-npm">npm packages</a> for many features and functions. To download and install npm packages, you need an npm Package Manager. This guide uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run `npm -v` in a terminal window.

### Install the Angular CLI

You can use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

To install the Angular CLI, open a terminal window and run the following command:

Visit <a href="https://angular.io/guide/setup-local">Angular Setup</a> for more information.

## How to run it locally

- Clone this **Repository URL** into new project folder (e.g., my-proj).

```shell
    git clone https://github.com/vdotok/JS-one2one
    cd my-proj
```

## Install npm packages

Please refer to the above-stated npm and nvm version notes. 

- Install the npm packages described in the `package.json` and verify that it works:

```shell
  npm install
  ng serve
```
- Open browser, application is running at **http://localhost:4200**

- Create **New Account** using Sign-up Form, and use the application

###  How to Generate and Install Build:
Follow the commands below to generate a “build”
 
```shell
  ng build 
  ng build --aot --configuration production --build-optimizer --outputHashing=all
```



### How to Configure SDK:
Add SDK into your **index.html** file. Declare a variable for your component or service:
`declare const MVDOTOK: any;`

User provides config to initiate the SDK
```shell
const Client = new MVDOTOK.Client({
      projectID: "****",
      secret: "********************",
    });
    Client.on("authenticated", (res) => {
      let user = StorageService.getUserData();
      this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
    });
```