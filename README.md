# Vdotok QuickStart Source for chat messaging Demo
This is a test project to demonstrate using chat  with Angular 9+. It contains all of the specs from Angular's test guide as well as some extras. Specs have been reformatted and converted to using Intern best practices as outlined below.

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

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
npm start
```

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run build` - runs the TypeScript compiler once.
* `npm run build:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)

### Init SDK Configration
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
Send Message
```shell
    export interface MessageModel {
      id: String,
      to: String,
      key: String,
      from: String,
      type: String,
      content: String,
      size: number,
      isGroupMessage: Boolean,
      status: number,
      date: number,
}

  this.Client.SendMessage(message);

```
