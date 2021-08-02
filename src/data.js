export const showPosters = (data) => {
    let posters = [];
    let i=0;
    do {
      posters.push(data.films[i].poster);
      i++
    } while (i<data.films.length);
    return posters;
};

export const getUniqueValues = (array) => ( 
  array.filter((currentValue, index, arr) => (
      arr.indexOf(currentValue) === index
  )) 
)

//-----------------------Parte del order alfabeticamente, year and score
export const orderBy = (films, option) =>{
  if( option == 'AZ'){
    const orderByAtoZ = films.sort((film1, film2)=>{
      return (film1.title < film2.title) ? -1 : 1;
    })
    return orderByAtoZ //Agrege esto porque no regresaba nada
  }
  else if (option == 'ZA'){
    const orderByZtoA = films.sort((film1, film2)=>{
      return (film1.title > film2.title) ? -1 : 1;
    })
    return orderByZtoA
  }
  else if (option == 'scoreMinToMax'){
    const orderByMinToMax = films.sort((film1, film2)=>{
      return film1.rt_score - film2.rt_score
    })
    return orderByMinToMax
  }
  else if (option== 'scoreMaxToMin'){
    const orderByMaxToMin = films.sort((film1, film2)=>{
      return film2.rt_score - film1.rt_score
    })
    return orderByMaxToMin
  }
  else if (option == 'dateMinToMax'){
    const dateByMinToMax = films.sort((film1, film2) =>{
      return film1.release_date - film2.release_date
    })
    return dateByMinToMax 
  }
  else if (option == 'dateMaxToMin'){
    const dateByMaxToMin = films.sort((film1, film2) =>{
      return film2.release_date - film1.release_date
    })
    return dateByMaxToMin
  }
}


//obtener valores unicos en select input
//
export const directorFilter = (directorName,films) => {
    const directorFilms = films.filter(function(films){
       return films.director === directorName;})
       .map(function(films){
         return films 
       })
       return directorFilms
}

export const joinPeopleName = (film) => {
  let allPeopleOfFilm = film.people;
  let namesOfPeople = [];
    for(let j=0; j<allPeopleOfFilm.length; j++){
      namesOfPeople[j] = film.people[j].name ;
    }
    let names = namesOfPeople.join(', ');
 return names 
}

export const producerFilter = (producerName,films) => {

  const producers = films.filter(function(films){
     return films.producer === producerName;})
     .map(function(films){
      return films
     })
     return producers
}

export const characterFilter = (filmTitle,films) => {
  const characters = films // parameter
    .filter( function(film){ return film.title === filmTitle;} ) 
    .map(function(film){
      let listOfPeople = film.people;
      return listOfPeople
    })[0] // 
    return characters
  }

export const locationTitleToSelect = (films) =>{
  let titlesOfFilmsWithLocation = ['']
  let j=0
  for(let i=0; i< films.length ;i++){
    let locationObjFilms = films[i].locations
    if( locationObjFilms.length != 0){
      titlesOfFilmsWithLocation[j]= films[i].title
      j++
    }else{continue}
  }
  return titlesOfFilmsWithLocation
}

export const locationFilter = (filmTitle,films) =>{
  const locations = films.filter(function(film){return film.title === filmTitle})
  .map(function(film){
    return film.locations
  })[0]
  return locations
}

  export const vehicleFilter = (filmTitle, films) => {
    const vehicles = films 
    .filter(function(film){ return film.title == filmTitle;})
    .map(function(film){
      let listOfVehicles = film.vehicles;
      return listOfVehicles
    }) [0]
    return vehicles
  }
  


