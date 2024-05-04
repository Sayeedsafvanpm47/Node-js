// import add from "./math-esm.mjs"
// console.log(add(5,5))
// third pattern
// import math from "./math-esm.mjs"
// console.log(math.add(5,5))
// console.log(math.sub(5,5));

// now we can look at the destructuring // fourth pat with respect to 3rd pat inside math-esm-mjs
// import math from "./math-esm.mjs"
// const{
//           add,sub
// } = math
// console.log(add(5,5));
// console.log(sub(5,5));

// in es modules we also have something called as named exports where the variable or fn name must math while impoorting it
// we can import in 2 ways..
// first way
// import * as math from "./math-esm.mjs"
// const {add,sub} = math
// console.log(add(5,5));
// console.log(sub(5,5));
// seocnd way or common way
import {add,sub} from "./math-esm.mjs"
console.log(add(5,5));
console.log(sub(5,5));