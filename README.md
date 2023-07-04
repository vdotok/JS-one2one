# Vdotok JS One-to-One Audio/Video Call

This is a demo project to demonstrate “One-to-One Audio/Video Call” using Angular 9+.

## Live Demo

Click <a href="https://one2one.vdotok.com/" target="_blank" title="One2one Call Demo">here</a> to visit the live demo of Vdotok JS One-to-One Audio/Video Call.

## Prerequisites:

- Node v16.x.x or later
- npm v7.x.x or later
- git version any

To verify the version of Node and npm, open **Terminal/Console** window and run `node -v` and `npm –v`. Old versions produce errors.

Click <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">here</a> to download and install the latest versions of Node and npm.

Click <a href="https://git-scm.com/downloads" target="_blank">here</a> to download and install the latest versions of git .

We recommend <a href="https://github.com/nvm-sh/nvm" target="_blank">nvm </a> for managing multiple versions of node and npm.

<br/>


## Setting up the local environment

To install Angular on your local system, you need the following:

### Node

Angular requires an active LTS or maintenance LTS version of Node. For more information on installing Node, see <a href="https://nodejs.org">nodejs.org</a>. If you are unsure what version of Node runs on your system, run `node -v` in a **Terminal** window.

### npm package manager

Angular, the Angular CLI, and Angular applications depend on <a href="https://docs.npmjs.com/getting-started/what-is-npm">npm packages</a> for various features and functions. To download and install npm packages, you need an npm Package Manager. This guide uses the npm client command line interface, which is installed with Node by default. To check that you have the npm client installed, run `npm -v` in a terminal window.

<br/>

## Install the Angular CLI

The Angular CLI is used to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

> To install the Angular CLI, open a terminal window (ctrl + shift + c) and run the following command:

```shell
   npm install -g @angular/cli
```

You can also visit <a href="https://angular.io/guide/setup-local" target="_blank">Angular Setup</a> for more information.

<br/>

## Clone Repo

- Clone this **Repository URL** into new Project folder (e.g., my-proj).

```shell
    git clone https://github.com/vdotok/JS-one2one.git
```


- Move from your current directory i-e, **my-proj** to the **JS-one2one** directory.

```shell
    cd JS-one2one
```

</br>


## Sign up to get credentials i.e Project ID, and API URL.

Register at <a href="https://vdotok.com" target="_blank">VdoTok</a> to get **Project ID** and **API URL**, by following the below steps:

1. Click on this link -> <a href="https://vdotok.com" target="_blank">https://vdotok.com</a> in your browser.

<img width="1721" alt="SignupOnVdotok" src="https://github.com/vdotok/JS-one2one/assets/134290022/2329d276-ae40-447f-96b7-2f354244c46a">


2. Click on the "TRY FOR FREE" button, this will navigate to Sign Up page, where the User is required to enter the following information: First Name > Last Name > Email > Country > Password. Select Sign Up For Free button

![My Remote Image](https://user-images.githubusercontent.com/87179594/184070989-e8b26d85-6e64-4ef3-b6d7-56449738236c.jpg)

3. After successfully signing up with VdoTok, the user navigates to the main Dashboad of VDOTOK where the user can find the ProjectID, and Api url.


4. The User can replace the existing ProjectID with their own ProjectID, as shown in the point # 2 in the below screen.
![My Remote Image](https://user-images.githubusercontent.com/87179594/184071060-9909513b-f880-4de8-9481-6ab91ae2be95.jpg)


<br/>

## Add PROJECT ID and API URL.

To integrate one-2-one call with JS Call SDK, the user can update the projectID by following these steps:

- Go to the file ( JS-ONE2ONE -> src -> constants -> const.ts ).

- Replace the **PROJECT_ID** constant with your project ID.


### Base URL

The user is required to update API-Base-URL with their own base URL. This can be done by following these steps:

- Go to environment.prod.ts file, ( JS-ONE2ONE -> src -> environments -> environment.prod.ts ), and replace the **apiBaseUrl** with your BaseUrl

- Go to environment.ts file, ( JS-ONE2ONE -> src -> environments -> environment.ts ), and replace the **apiBaseUrl** with your BaseUrl

</br>


## Install npm packages

Please refer to the above-stated npm and nvm version notes.

- Run the following command to install all the dependencies:

```shell
  npm install
```

- Now run the following command to run the project:

```shell
  ng serve
```

- Open your browser, your application is running at **http://localhost:4200**

- Create **New Account** using Sign-up Form, and use the application

</br>


## How to Generate Build:

Run the below command to generate a “build”: 

```shell
  npm run build
```

</br>


## Integrate SDK in your project:

To setup audio/video call in your project please follow the detailed documentation here

Click on this link -> <a href = "https://doc.vdotok.com/" target = "_blank"> https://doc.vdotok.com/</a>
