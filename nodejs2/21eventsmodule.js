const EventEmitter = require('node:events')
const emitter = new EventEmitter();
emitter.on('order-pizza', (size,toppings)=>{
          console.log(`Order received for ${size} pizza with ${toppings} toppings`)
})
emitter.on('order-pizza',(size)=>{
          if(size === "large"){
                    console.log(`Complementary drink for ${size} pizza`)
          }
})
emitter.emit("order-pizza","large","mushroom")
