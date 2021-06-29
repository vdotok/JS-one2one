# Vdotok QuickStart Source for chat messaging Demo
This is a demo project to demonstrate using chat  with Angular 9+.

## Live Demo
 Fellow the link below to visit the live demo
 
  <a href="https://chat.vdotok.com" target="_blank" title="Chat Demo">Live Demo</a> 
  
 
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

### How to configure SDK.
You need to add SDK into your index.html file .After that decalar a variable in your component  orservice

```shell
declare const MVDOTOK: any;

```

user provided config to init SDK

```shell
    this.Client = new MVDOTOK.Client({
      projectID: "****",
      secret: "********************",
    });
    this.Client.on("authenticated", (res) => {
      let user = StorageService.getUserData();
      this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
    });
```
###  How to generate and install build 
Follow the commands below to build
 
```shell
   ng build 
   ng build --aot --configuration production --build-optimizer --outputHashing=all
```

