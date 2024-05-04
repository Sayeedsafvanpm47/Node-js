
const PizzaShop = require('./22.js')
const DrinkMachine = require('./22drink.js')
const pizzashop = new PizzaShop()
const drinkMachine  = new DrinkMachine()
pizzashop.on("order",(size,toppings)=>{
          console.log(`Order recieved, baking a ${size} pizza with ${toppings}`)
          drinkMachine.serveDrink(size)
})

pizzashop.order("large","mushrooms");
pizzashop.displayOrderNumber()