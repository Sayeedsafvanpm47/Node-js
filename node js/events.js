const { log } = require('console');
var events = require('events')
var eventEmitter = new events.EventEmitter();
var ringbell = function(){
          console.log("Ring Ring Ring");
          eventEmitter.emit('bellrings','welcome')
}
eventEmitter.on('doorOpen',ringbell)
eventEmitter.on('bellrings',(message)=>console.log(message))
eventEmitter.emit('doorOpen')