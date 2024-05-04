const superHero = require('./modulecache')
console.log(superHero.getName())
superHero.setName("Sujperman")
console.log(superHero.getName());
// so the above willl return batman and superman, so what if i create a new instance ?
const newSuperhero = require('./modulecache')
console.log(newSuperhero.getName());
// so even if we print the above statement with a new instance we will still get the values as Superman
// this is due to module caching