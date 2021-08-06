# Vdotok QuickStart Source for One to one Call Demo
This is a demo project to demonstrate using chat  with Angular 9+.

## Live Demo
 Fellow the link below to visit the live demo
 
  <a href="https://one2one.vdotok.com" target="_blank" title="Chat Demo">Live Demo</a> 
  
 
## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

 

## Project Signup and Project ID

Follow the link below register your self for chat server and get the project Id
	https://www.kuchtohoga.com/norgic/chatSDK/
  
## Setting up the local environment

To install Angular on your local system, you need the following:


**Node.js**

Angular requires an active LTS or maintenance LTS version of Node.js.
For more information on installing Node.js, see <a href="https://nodejs.org">nodejs.org</a>. If you are unsure what version of Node.js runs on your system, run node -v in a terminal window.

**npm package manager**

Angular, the Angular CLI, and Angular applications depend <a href="https://docs.npmjs.com/getting-started/what-is-npm"> npm packages </a> on npm packages for many features and functions. To download and install npm packages, you need an npm package manager. This guide uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run npm -v in a terminal window.


**Install the Angular CLI**

You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

To install the Angular CLI, open a terminal window and run the following command:

```
npm install -g @angular/cli
```

For more information <a href="https://angular.io/guide/setup-local"> Angular Setup</a>

## How to run it locally

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/vdotok/JS-one2one.git
cd my-proj

```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
ng serve
```
Open browser application is running at http://localhost:4200

Create new account using sign up form and use the application

###  How to generate and install build 
Follow the commands below to build
 
```shell
   ng build 
   ng build --aot --configuration production --build-optimizer --outputHashing=all
```



### How to configure SDK.
You need to add SDK into your index.html file .After that decalar a variable in your component  orservice

```shell
declare const MVDOTOK: any;

```

user provided config to init SDK

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
### SDK Events


```
  Client.on("error", (response) => {
///these are errors user receives 
    if (response.type == "Authorization") {
    // when sdk recieves wrong credentials and authentication would be failed
    }

    if (response.type == "Register") {
    // when user can not connect to the vidtok server
    }

    if (response.type == "PROCESS_ANSWER") {
    // when system does not generate an answer for call
    }

    if (response.type == "CALL_ADDCANDIDATE") {
    // when system does not generate ice candidates from system/webbrowser
    }

    if (response.type == "CALL_OFFERGENERATING") {
    // when system/web browser does not send the media to receiver
    }

    if (response.type == "CALL_RTCPEER") {
    // when system webrtc does not work
    }

    if (response.type == "TRYING") {
    // when server trying to search receiver
    }
});



```

### SDK Methods

**Register**

Register function will be called after initializing the SDK.

```
Client.Register("vxcse45ssr3","v9posername");
```

**Call**

Call method will take one parameter in the form of object.	

```
Call(params:Object);
params= {
  localVideo:"local video element",
  remoteVideo:"remote video element",
  to:"receiver/callee name"
}

Client.Call({ localVideo:myVid, remoteVideo:remoteVid, to:toUser });
```


During the call two functions can be called.
1.	EndCall
2.	CancelCall

```
  Client.EndCall();
  ClientRect.CancelCall();
```

**Receiver side Call methods **

Receiver will receive one of the following function call.
1.	RejectCall
2.	AcceptCall
These function calls depends on the response of the receiver.

```
Client.RejectCall();
Client.AcceptCall();
```






