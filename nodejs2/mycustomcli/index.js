#!/usr/bin/env node
// const yargs = require('yargs')
// const {argv} = yargs(process.argv)
// the above codes are commented since we are not passinf any option and we do not need these when we are taking inp from user
// we will install an npm package that allows us to add interactivity to cli
// we can use the package calledf inquirer @8.2.5
// version 9 only worls with es6...
// now lets import th package
const inquirer = require('inquirer')
const printMove = async(pokemonName) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)




          const pokemon = await response.json()
          const moves = pokemon.moves.map(({move})=> move.name)
          console.log(moves.slice(0,5))
}
// first lets create a prompt module
const prompt = inquirer.createPromptModule()
prompt([{
          type:"input",
          name:"pokemon",
          message:"Enter a pokemon name to view its first five moves"
}]).then((answers)=>{
          const pokemon = answers.pokemon
          printMove(pokemon)
})
// in the above prompt function we pass in array of questons that we want to ask the user
// we just have the one qustn and each question is an object in this array
// we specify typoe which is input, name for the queston which is pokemon,, and the actual queston
// tht the user sees... when the user returns with an ansewer,, prmopt returns a promise
// so we can use a then block to recieve the anbswer.. and we will extract just pokemon
// so we will store answer.pokemon inside pokemon and will pass into the function pokemon which contains the]
// answer that the user has output
// printMove(argv.pokemon) now lets move onto an interactive approachS
// printMove('charmander') this is hardcoded

// there are several things we can build using cli
// so i have to check more on cli okayy
