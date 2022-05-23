/////////////////////////////////////////////////// MON - ASSIGNMENT 1 ////////////////////////////////////////////////////// 

// // // accept at least movie title on command line
// // what is the argument vector???

// const {addMovie, listMovies} = require("./utils")

// const prompt = require("prompt-sync")({ sigint:true});
// const movie = prompt("What is your movie?:");
// const actor = prompt("Name the lead actor:");

// // if userinput has actor, capture this as well
// // add movie object to an array
// // console log the movie - output to the console
// addMovie({title: movie, actor: actor});
// const movies = listMovies();
// console.log(movies[0].title);

// app(process.argv);


/////////////////////////////////////////////////////// MON - YARGS //////////////////////////////////////////////////
// Use command line to create key value pair for object

const yargs = require("yargs");
const { addMovie, listMovies } = require("./utils");


const app = (yargsObj) =>{
    if (yargsObj.add){
    
// capture user input and create a movie object
const movieObj = {title: yargsObj.title, actor: yargsObj.actor}
addMovie(movieObj);

const returnValue = listMovies();
console.log (returnValue);

// push the object into an array
// console log the array
}
}

app(yargs.argv);

// Example command line entry: $ node app.js --add --title "Spiderman" --actor "Andrew"
