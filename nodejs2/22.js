// extending from event emmiter
const EventEmitter = require('node:events')

class PizzaShop extends EventEmitter{
          constructor()
          {
                    super();
                    this.orderNumber = 0
                  
          }
          order(size,toppings){
                    this.orderNumber++
                    this.emit("order",size,toppings)
          }
          displayOrderNumber(){
                    console.log(`Current order number: ${this.orderNumber}`);
          }
}

module.exports = PizzaShop

// so with extending events we were able to tie together diff modules without 
// tightly couple them
// modules can extend from eventEmmiter allowing the, to emit and react to their own custom ecents
// most of the built in modules also extend from event emmiter class
