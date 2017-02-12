# Hello World Bot for Flock Chat

Use '/helloworld' slash command to trigger a bot sending "Hello World" message to the chat.

## To Demo App from Your Computer
1. Install ngrok
2. ./ngrok http 8080

## Add and  Install App in Flock
1. Watch Flock [Tutorial](https://youtu.be/WBBIbueCW7I?list=PLBuDiXOL2QKELVFRl3NJGEHBSyngCZH3_)

## Add config.js
```javascript
    module.exports = {
    appId: <your app id>,
    appSecret: <your app secret>,
    botUserId: <your bot id>,
    botToken: <your bot token>
    };
```


## Start Server
1. Run 'node index.js' in project directory

## Using slash command
1. Type /helloworld in your chat
2. **Magic happens**

----
## Thanks
* [Flock Alarms Tutorial](https://github.com/flockchat/flock-alarms)
