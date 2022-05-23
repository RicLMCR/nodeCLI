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
