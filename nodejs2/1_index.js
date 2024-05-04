const addFn = require('./add')
console.log("Hello sayeed");

const sum = addFn(1,2)
const sum2 = addFn(3,4)
console.log(sum);
console.log(sum2);
exports.add = add
// return value doesnt have to be same as the exported value.. this is called default
// where you can refer to the return value using any name