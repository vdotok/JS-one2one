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
  Client.on("connect", (response) => {
    //after connecting successfully
  });

  Client.on("disconnect", (response) => {
      //on disconnecting
  });

  Client.on("subscribed", (response) => {
      //on subscribing the channel
  });

  Client.on("messagesent", (response) => {
      //on sending the message
  });

  Client.on("online", (response) => {
      //when someone gets online
  });

  Client.on("offline", (response) => {
      //on someone gets offline
  });

  Client.on("message", (response) => {
      //on receiving a message
  });

  Client.on("create", (response) => {
      //on creating a channel
  });

```

### SDK Methods

**CreateChannel**

      This method is used to create a channel. It consists of one parameter i.e,
      name of the channel
           
           
```
Client.CreateChannel("abc");
```
**SubscribeChannel**

This method is used to subscribe a channel. It takes and object which contains two parameters i.e, key and channel name

```
Client.Subscribe(
  {
    "key": "xsesAcDs45sse",
    "channel": "abc/",
  }
);

```

**UnSubscribeChannel**

This method is used to unsubscribe a channel. It takes and object which contains two parameters i.e, key and channel name

```
Client.UnSubscribe(
  {
    "key": "xsesAcDs45sse",
    "channel": "abc/",
  }
);
```


**SendMessage**


This method is used to send message of following types:

-	Text
// If someone sends a message

```
Client.SendMessage({
    "from": "kashif11",
    "content": "This is a text message",
    "id": "1611641364417",
    "size": 0,
    "key": "AACO5B_L67HeJxw7onqZz1QoYDd2KyJQ",
    "type": "text",
    "to": "4130/",
    "isGroupMsg": false,
});
```

**SendReceipt**

This method is used to send a confirmation message of a message that is received

```
Client.SendReceipt({ 
    //This id will be the same as received message id           
    "messageId": "1611641364415",
    "from": "kashif11",
    "key": "AACO5B_L67HeJxw7onqZz1QoYDd2KyJQ",
    "to": "4130/",
    "receiptType": 3,
    "date": "1611639333.028"
});
```

**Send Attachment**

This method is used to send Attachments 

```
    var option = {
      from:"",
      topic:"",
      key:"",
      type:""
    };

    /*
    <input type="file" id="fileinput" />
    */
    var file = document.getElementById("fileinput").value;
    Client.SendFile(file, option);

    // If someone sends a raw message
    var rawOptions = {
    from:"",
    topic:"",
    key:""
    }
    var rawMessage = "Hi";
    SendRawMessage(rawMessage, rawOption);
```

