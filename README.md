# Hello World Bot for Flock Chat

Use '/helloworld' slash command to trigger a bot sending "Hello World" message to the chat.

## To Demo App from Your Computer
1. Install ngrok
2. In your project directory, run
    ```bash
    ./ngrok http 8080
    ```

## Add and  Install App in Flock
1. Watch Flock [Tutorial](https://youtu.be/WBBIbueCW7I?list=PLBuDiXOL2QKELVFRl3NJGEHBSyngCZH3_)

## Add config.js
After you've created your new Flock App [here](https://dev.flock.co/apps/new), you will find the following ID's and tokens for your config.js file.
```javascript
    module.exports = {
    appId: <your app id>,
    appSecret: <your app secret>,
    botUserId: <your bot id>,
    botToken: <your bot token>
    };
```


## Start Server
1. In your project directory, run
    ```bash
    node index.js
    ```

## Using slash command
1. Type /helloworld in your chat
2. 🎉 🎉 **Magic happens** 🎉 🎉

----
## Thanks
* [Flock Alarms Tutorial](https://github.com/flockchat/flock-alarms)
