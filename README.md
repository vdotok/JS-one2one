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


y	
Follow the link below register your self for chat server and get the project Id
	https://www.kuchtohoga.com/norgic/chatSDK/
  
## How to run it locally

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/vdotok/JS-one2one.git  my-proj
cd my-proj

```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm run serve
```

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
``

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
``


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






