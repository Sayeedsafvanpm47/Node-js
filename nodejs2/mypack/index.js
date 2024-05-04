// lets see how to impoert a third part module
const upperCase = require("upper-case").upperCase
function greet(name){
          console.log(upperCase(`Hello ${name}, welcome to codevolution`))
}
greet("sayeed")
module.exports = greet
// so we have used a package imported a package from npm library and used it
// imagine a complex req like need to deepclone an object, so to write and test the code you can rely
// on npm
// loadash is a js utility library, it has various functionality that you can use in projhet

// you can use npm init --yes
// {
//   "name": "greet-sayeed",  //this is a mandatory feild, it must be lowercase, one word, and might only take hiphen or underscore
//   "version": "1.0.0", //it must follow semantic verion of guidelines
//    "description": "",  //used to search and disploay package in npm registry
//   "main": "index.js",  //defines main field which define entry points of the project