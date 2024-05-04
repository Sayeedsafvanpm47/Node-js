const superHero = require('./modcachesol')
const batman = new superHero("Batman")
console.log(batman.getName())
batman.setName("Sayeed")
console.log(batman.getName());
const superman = new superHero("Superman")
console.log(superman.getName());
console.log(batman.getName());
console.log(batman.getName());
