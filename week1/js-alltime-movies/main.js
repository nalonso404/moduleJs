//### Iteration 2: All rates average

const sumOfRates = (array)=> {
    const sum= array.reduce(function(accumulator,currentValue){
         return (accumulator + currentValue.rate)
     },0)
    return sum;
 }

 const ratesAverage=(array) => {
     const average = 1*(sumOfRates(array)/array.length).toFixed(2)
     return average
 }
 
 ratesAverage(movies)

 //### Iteration 3: Drama movies

 const onlyDramas = (array) => {
    const onlyDramas = array.filter(movie=> movie.genre.includes('Drama') ? movie : null)
    return onlyDramas
}

const dramaMoviesRates = (array) => onlyDramas(array)

ratesAverage(dramaMoviesRates(movies))

//### Iteration 5: Steven Spielberg. The best?

let howManyMovies = (array) => {
    const onlySpielberg = array.filter (movie => movie.director.includes('Steven Spielberg')? movie : null)
    return onlySpielberg
}

howManyMovies(onlyDramas(movies))

//### Iteration 6: Alphabetic Order


let orderAlphabetically = (array) => {
    const justTitle = array.map(movie => movie.title)
    const sortedArray = justTitle.sort().splice(0,20)
    return sortedArray
}

//### Iteration 1: Time Format (Longest iteration)

//turn duration to min

const hoursToMinutes = array => array[0]*60 + array[1]*1 

const turnHoursToMinutes = (array)=> {
  let moviesCopy =JSON.parse(JSON.stringify(array))
  let movies = moviesCopy.map(function(movie){
  let duration = ((movie.duration).split(' '))
  let newArray=[];
   for(let i=0; i< duration.length; i++){
     if (duration[i].charCodeAt() <= '57' && duration[i].charCodeAt()>='33'){
       newArray.push(parseInt(duration[i],10))
     }
   }
  movie.duration = hoursToMinutes(newArray)
    return movie
  })
  return movies
}
turnHoursToMinutes(movies)


  const orderByDuration = array => {
      const alphabetical = array.sort((a,b)=>{
        if(a.title > b.title){return 1}
        else if(a.title < b.title) {return -1}
        else{return 0}  
      })
      let result = (turnHoursToMinutes(alphabetical)).sort((a,b)=>{
          a.duration - b.duration
      })
      return result
  }

  orderByDuration(movies)