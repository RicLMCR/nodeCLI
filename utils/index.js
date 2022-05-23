// creates variable (export instead of const) and makes it ready for export
// returns an array with an

const movArray = []

exports.addMovie = (movieObj)=>{
    // take a movie, add it to an array and then return to the array
    movArray.push(movieObj)
}

// exports 'movArray' array 
exports.listMovies = ()=>{
    return(
        movArray
        )
}

////////////////////////// yargs
// const movies = [];

// exports.addMovie = (movieObj)=>{//Parameters should be named after teh data included and the type of data
//     movies.push(movieObj);
// }

// exports.listMovies =()=>{
//     return movies;
// }