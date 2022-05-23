// const userInput = console.log(process.argv[2]);

// if (userInput== "steve"){
//     console.log("It's Ric");
// } else {
//     console.log("Not Ric")
// }

////////////////////////////// PSEUDOCODE //////////////////////////

// accept at least movie title on command line
const {addMovie, listMovies} = require("./utils")

const prompt = require("prompt-sync")({ sigint:true});
const movie = prompt("What is your movie?:");
const actor = prompt("Name the lead actor:");

// if userinput has actor, capture this as well
// add movie object to an array
// console log the movie - output to the console
addMovie({title: movie, actor: actor});
const movies = listMovies();
console.log(movies[0].title);

// const movList = movArray;
// console.log(movList)

