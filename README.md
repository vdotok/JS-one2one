# Vdotok JS One-to-One Audio/Video Call

This is a demo project to demonstrate “One-to-One Audio/Video Call” using Angular 9+.

## Live Demo

Click <a href="https://one2one.vdotok.com" target="_blank" title="Chat Demo">here</a> to visit the live demo of VdoTok JS One-to-One Audio/Video Call.

## Prerequisites:

- Node v4.x.x or later
- npm v3.x.x or later
- git version any

To verify the version of Node and npm, open **Terminal/Console** window and run `node -v` and `npm –v`. Older versions produce errors.

Click <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">here</a> to download and install the latest versions of Node and npm.

Click <a href="https://git-scm.com/downloads" target="_blank">here</a> to download and install the latest versions of git

We recommend <a href="https://github.com/nvm-sh/nvm" target="_blank">nvm </a> for managing multiple versions of node and npm.

<br/>

## Sign up to get credentials i.e Project ID, Authentication Token.

Register at <a href="https://userpanel.vdotok.com/norgic/chatSDK" target="_blank">VdoTok</a> to get Authentication Token and Project ID.

## Setting up the local environment

To install Angular on your local system, you need the following:

### Node

Angular requires an active LTS or maintenance LTS version of Node. For more information on installing Node, see <a href="https://nodejs.org">nodejs.org</a>. If you are unsure what version of Node runs on your system, run `node -v` in a **Terminal** window.

### npm package manager

Angular, the Angular CLI, and Angular applications depend npm packages on <a href="https://docs.npmjs.com/getting-started/what-is-npm">npm packages</a> for many features and functions. To download and install npm packages, you need an npm Package Manager. This guide uses the npm client command line interface, which is installed with Node by default. To check that you have the npm client installed, run `npm -v` in a terminal window.

<br/>

## Install the Angular CLI

You can use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

> To install the Angular CLI, open a terminal window (ctrl + shift + c) and run the following command:

```shell
   npm install –g @angular/cli
```

Visit <a href="https://angular.io/guide/setup-local" target="_blank">Angular Setup</a> for more information.

<br/>

## Clone Repo

- Clone this **Repository URL** into new project folder (e.g., my-proj).

```shell
    git clone https://github.com/vdotok/JS-one2one
    cd my-proj
```

#### After successful registration, you can update the existing projectID with your own projectID.

<br/>

## Add PROJECT ID and AUTHENTICATION Token.

- After successful registration, you can update the existing projectID with your own projectID, Which you will recieve in the response of register request.
- For One to One call in the application, You can update the projectID by following these steps. ( JS-ONE2ONE -> src -> app -> shared -> services -> pubsub.service.ts ).

You have to Update Project_id at the Login and Signup request by following these steps.

- At Login request. ( JS-ONE2ONE -> src -> app -> components -> login -> login.component.ts )
- At Signup request. ( JS-ONE2ONE -> src -> app -> components -> sign-up -> sign-up.component.ts )

After replacing the projectID at all the above places, compile and run the project.

### Base URL

You have to update BaseUrl with your own apiBaseUrl. You can update **apiBaseUrl** by following these steps.

- In environment.prod.ts File, (JS-ONE2ONE -> src -> environments -> environment.prod.ts)
- In environment.ts File, (JS-ONE2ONE -> src -> environments -> environment.ts)

## Install npm packages

Please refer to the above-stated npm and nvm version notes.

- Install the npm packages described in the `package.json` and verify that it works:

```shell
  npm install
  ng serve
```

- Open browser, application is running at **http://localhost:4200**

- Create **New Account** using Sign-up Form, and use the application

### How to Generate and Install Build:

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

After Successful configuation, you can run the projcet locally by using this command.

```shell
    npm start or
    ng serve
```

Now open the browser and you can see the application at http://localhost:4200
