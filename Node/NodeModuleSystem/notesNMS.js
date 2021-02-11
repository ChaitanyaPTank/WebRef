// Node Module system

    // - Event module
    // - path module
    // - OS module
    // - HTTP module

/***
// event emitter class

const EventEmitter = require('event');
const emitter = new EventEmitter();

// register a listener
emitter.on('messageLogged', function(){
    console.log('Listener Called');
});

// Raise an event
emitter.emit('Message Logged');

***/


// Event Arguments

emitter.on('messageLogged', function(arg){
    console.log('Listener Called', arg);
});

emitter.emit('Message Logged', {id:1, url:"url"});

        // OR

emitter.on ('messageLogged', (arg) => console.log('Listener called', arg));

emitter.emit('messageLogged', {id:1, url:"url"});


        // OR


// Extending event emitter class


// In logger.js
class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('Message Logged', {id:1, url: 'url'});
    }
}

module.exports = Logger;

// In app.js

const Logger = require('./logger');

logger = new Logger();
logger.log(message);
