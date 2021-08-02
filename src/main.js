
import { showPosters, orderBy, directorFilter, producerFilter, characterFilter, getUniqueValues, locationTitleToSelect,locationFilter, vehicleFilter,joinPeopleName} from './data.js';
import data from '../data/ghibli/ghibli.js';

let imagePosters = showPosters(data);
///---------- Seccion de la primera pagina donde muestra los showPosters
let posterHTML = ""
imagePosters.forEach(objeto =>{
    posterHTML+=generatorPosterHTML(objeto)
})
function generatorPosterHTML(objeto){
    return `<div class="poster"><img src="${objeto}" ></div>`
}
document.getElementById("allFilms").innerHTML = posterHTML

let sortAndSelect = document.getElementById('sortinGhibli')
sortAndSelect.addEventListener('change', () =>{
    let posterOrder = orderBy(data.films, sortAndSelect.value)
    let posterOrderHTML = '' //Aqui se guarda el nuevo orden

    posterOrder.forEach(objeto =>{
        posterOrderHTML+=generatorPosterHTML(objeto)
    })

    function generatorPosterHTML(objeto){
        if(sortAndSelect.value == 'AZ' || sortAndSelect.value == 'ZA'){
        return `<figure class="poster">
        <figcaption class='princialPoster'> ${objeto.title}</figcaption>
        <img src="${objeto.poster}" >
        </figure>`
        }else
        if (sortAndSelect.value == 'scoreMinToMax' || sortAndSelect.value == 'scoreMaxToMin'){
            return `<figure class="poster">
            <figcaption class='princialPoster'>Score: ${objeto.rt_score}</figcaption>
            <img src="${objeto.poster}" >
            </figure>`
        }else
        if (sortAndSelect.value == 'dateMinToMax' || sortAndSelect.value == 'dateMaxToMin'){
            return `<figure class="poster">
            <figcaption class='princialPoster'>Date: ${objeto.release_date}</figcaption>
            <img src="${objeto.poster}" >
            </figure>`
        }
    }
    document.getElementById("allFilms").innerHTML = posterOrderHTML
})


//SELECCIONAR DIRECTOR directo DESDE la DATA // ----------------seccion de DIRECTORES
let selectOneDirector = document.getElementById('selectDirector');
let directorOptions = data.films.map(function(film) {return film.director})
directorOptions = getUniqueValues(directorOptions) //evita duplicacion de elementos
  
    for (let i = 0; i < directorOptions.length; i++){
        let directorName = directorOptions[i];
        let directorElement = document.createElement("option")
        
        directorElement.textContent = directorName 
        directorElement.value = directorName
        selectOneDirector.appendChild(directorElement);
    }
    selectOneDirector.addEventListener('change', () => {
     document.getElementById('FirstPage').style.display="none";
     document.getElementById('informativeFile').style.display = 'block';
     document.getElementById('character').style.display = 'none';
     document.getElementById('locations').style.display = 'none';
     document.getElementById('vehicles').style.display = 'none';
     document.getElementById('vehiclesFile').style.display = 'none'
     
     let directorName = selectOneDirector.value;
     let dataFiltered =['']
     dataFiltered = directorFilter(directorName,data.films);  
     const caption = 'He has directed '+ dataFiltered.length + ' films';

     document.getElementById('Name').innerHTML = directorName;
     document.getElementById('caption').innerHTML = caption;

     /* ----- HTML DINAMICO*/
     let directorHTML = ""
     dataFiltered.forEach( oneDirector =>{
         oneDirector.names = joinPeopleName(oneDirector)
         directorHTML += generatorDirectorHTML(oneDirector)
     })
     function generatorDirectorHTML(oneDirector){
         return ` 
         <div class="flexRow" style="display: flex; font-family: sans-serif; flex-flow: nowrap; 
         background-color: #D9B8B5; border-radius: 1rem; margin-bottom: 1rem;">
            <div class="posterFilter" style="padding: 1rem; ">
                <img src="${oneDirector.poster}" id="filterImg"></div>
            <div class="Informative">
            <h1>${oneDirector.title}</h1><hr color="#000">
            <p><b>Year: </b><span id="year">${oneDirector.release_date}</span></p>
            <p><b>Score: </b><span id="score">${oneDirector.rt_score}</span></p>
            <p><b>Descripcion: </b><span id='filmDescription'>${oneDirector.description}</span></p>
            <p><b>Producer: </b><span id="producer">${oneDirector.producer}</span></p>
            <p><b>Director: </b><span id="director">${oneDirector.director}</span></p>
            <p><b>Movie characters:  </b><span id="people">${oneDirector.names}</span></p>
            </div>
          </div>  `
          
     }

     document.getElementById("informativeFile").innerHTML = directorHTML
     
    })

    //SELECCIONAR PRODUCTOR directo DESDE la DATA // ------------------------------Seccion PRODUCTOR
let selectTheProducer = document.getElementById('selectProducer');
let producerOptions = data.films.map(function(film) {return film.producer})
producerOptions = getUniqueValues(producerOptions) //evita duplicacion de elementos
   
    for (let i = 0; i < producerOptions.length; i++){
        let producerName = producerOptions[i];
        let producerElement = document.createElement("option")
        
        producerElement.textContent = producerName 
        producerElement.value = producerName
        selectTheProducer.appendChild(producerElement);
    }

    selectTheProducer.addEventListener('change', () => {
     document.getElementById('FirstPage').style.display="none";
     document.getElementById('informativeFile').style.display = 'block';
     document.getElementById('character').style.display = 'none';
     document.getElementById('locations').style.display = 'none';
     document.getElementById('vehicles').style.display = 'none';
     document.getElementById('vehiclesFile').style.display = 'none'
     let producerName = selectTheProducer.value;
     let dataFiltered =['']
     dataFiltered = producerFilter(producerName,data.films);  
     const caption = 'He has produced '+ dataFiltered.length + ' films';

     document.getElementById('Name').innerHTML = producerName;
     document.getElementById('caption').innerHTML = caption;

     /* ----- HTML DINAMICO*/
     let producerHTML = ""
     dataFiltered.forEach( theProducer=>{
         theProducer.names = joinPeopleName(theProducer)
        producerHTML += generatorProducerHTML(theProducer)
     })
     function generatorProducerHTML(theProducer){
         return ` 
         <div class="flexRow" style="display: flex; font-family: sans-serif; flex-flow: nowrap; 
         background-color: #D9B8B5; border-radius: 1rem; margin-bottom: 1rem;">
         <div class="posterFilter" style="padding: 1rem;"><img src="${theProducer.poster}" id="filterImg"></div>
         <div class="Informative">
           <h1>${theProducer.title}</h1><hr color="#000">
           <p><b>Year: </b><span id="year">${theProducer.release_date}</span></p>
           <p><b>Score: </b><span id="score">${theProducer.rt_score}</span></p>
           <p><b>Descripcion: </b><span id='filmDescription'>${theProducer.description}</span></p>
           <p><b>Producer: </b><span id="producer">${theProducer.producer}</span></p>
           <p><b>Director: </b><span id="director">${theProducer.director}</span></p>
           <p><b>Movie characters:  </b><span id="people">${theProducer.names}</span></p>
         </div>
         </div>`
     }
     document.getElementById("informativeFile").innerHTML = producerHTML
     
    })// --- Final producer
    

 //SELECCIONAR PEOPLE directo DESDE la DATA // ------------------------------Seccion CHARACTER
let selectCharacter = document.getElementById('selectCharacter');
let characterOptions = data.films.map(function(film) {return film.title})
//characterOptions  = getUniqueValues(characterOptions ) //evita duplicacion de elementos

for(let i=0; i < characterOptions.length; i++){//Porque me lo pone arriba 
    let titleName = characterOptions[i];
    let characterElemnt = document.createElement('option')

    characterElemnt.textContent =titleName //¿Por que ?
    characterElemnt.value = titleName 
    selectCharacter.appendChild(characterElemnt)
}

selectCharacter.addEventListener('change',() =>{
    document.getElementById('FirstPage').style.display = 'none';
    document.getElementById('informativeFile').style.display = 'none';// Sirve para desaparecer las fichas informativas, si es que estan
    document.getElementById('character').style.display = 'flex';
    document.getElementById('locations').style.display = 'none';
    document.getElementById('vehicles').style.display = 'none';
    document.getElementById('vehiclesFile').style.display = 'none'
    
    let filmTitle= selectCharacter.value
    let dataFiltered = [''];
    dataFiltered = characterFilter(filmTitle, data.films); //argument
    const caption = 'has '+ dataFiltered.length + ' characters';

    document.getElementById('Name').innerHTML = filmTitle;
    document.getElementById('caption').innerHTML = caption;

    let characterHTML = ""
    dataFiltered.forEach( theCharacter=>{
       characterHTML += generatorCharacterHTML(theCharacter)
    })
    function generatorCharacterHTML(theCharacter){
        return `
        <button class="btnCharacter" value='${theCharacter.img}, ${theCharacter.name}, ${theCharacter.age}, ${theCharacter.specie},${theCharacter.gender},${theCharacter.eye_color},${theCharacter.hair_color}'>
        <figure class="poster">
        <img src="${theCharacter.img}" id="characterImg" >
        <figcaption>${theCharacter.name}</figcaption>
        </figure></button>`

    }
    document.getElementById("character").innerHTML =  characterHTML
    const btnCharacter = document.getElementsByClassName("btnCharacter")

    for(let i=0; i <btnCharacter.length; i++){
        btnCharacter[i].addEventListener('click', (evt)=>{ // ---- Es un arreglo porque esta en event de class y varios elementos cuentan con esta clase
            evt.preventDefault;
            let character =  btnCharacter[i].value;
            let provisionalCharacterMatriz = ['']
            let arrayInfoCharacter = character.split(",")
            provisionalCharacterMatriz[0] =arrayInfoCharacter
            
            let htmlTheCharacter = ''
            provisionalCharacterMatriz.forEach( theCharacter=>{
                htmlTheCharacter += generatorHTMLcharacter(theCharacter)
             })
            function generatorHTMLcharacter(theCharacter){
                return` 
                <img src="${theCharacter[0]}" id="imgCharacter">
                <div id="infoCharacter"><h1> ${theCharacter[1]} </h1>
                <p><b>Edad: </b>${theCharacter[2]}</p>
                <p><b>Especie: </b>${theCharacter[3]}</p>
                <p><b>Genero: </b>${theCharacter[4]}</p>
                <p><b>Color de ojos: </b>${theCharacter[5]}</p>
                <p><b>Color de cabello: </b>${theCharacter[6]}</p></br>
                </div>`
            }
            document.getElementById("character").innerHTML = htmlTheCharacter
          
        })
    }
   })// final de Character
///// -----------------------------------------------------------------------seccion Location

let selectLocation = document.getElementById('selectLocation');
   let locationOptions = locationTitleToSelect(data.films)

   for(let i=0; i < locationOptions.length; i++){ 
    let Location = document.createElement('option')
    Location.textContent =locationOptions[i] 
    Location.value = locationOptions[i]
    selectLocation.appendChild(Location)
}

selectLocation.addEventListener('change', ()=> {
    document.getElementById('FirstPage').style.display = 'none';
    document.getElementById('informativeFile').style.display = 'none';// Sirve para desaparecer las fichas informativas, si es que estan
    document.getElementById('character').style.display = 'none';
    document.getElementById('locations').style.display = 'flex';
    document.getElementById('vehicles').style.display = 'none';
    document.getElementById('vehiclesFile').style.display = 'none';
    let filmTitle = selectLocation.value
    let locationFiltered = [''];
    locationFiltered = locationFilter(filmTitle, data.films); //argument
    const caption = 'has '+ locationFiltered.length + ' locations.';
    document.getElementById('Name').innerHTML =filmTitle;
    document.getElementById('caption').innerHTML = caption;

    /* ----- HTML DINAMICO*/
    let locationHTML = ""
    locationFiltered.forEach( thelocation=>{
        locationHTML += generatorLocationHTML(thelocation)
    })
    function generatorLocationHTML(thelocation){
        return ` 
        <div class="flexRow" style="display: flex; font-family: sans-serif; 
        background-color: #BB9EA0; border-radius: 1rem; margin-bottom: 10px; ">
        <div class="posterFilter" style="padding: 1rem;"><img src="${thelocation.img}" id="filterImg"></div>
        <div class="informativeLocation">
          <h1><b></b><span id="title">${thelocation.name}</span></h1>
          <p><b>Clima: </b><span id="year">${thelocation.climate}</span></p>
          <p><b>Terreno: </b><span id="score">${thelocation.terrain}</span></p>
          <p><b>Superficie del agua: </b><span id='filmDescription'>${thelocation.surface_water}</span></p>
          <p><b>Residentes: </b><span id="producer">${thelocation.residents[0]}</span></p>
        </div>
        </div>`
    }
    document.getElementById("locations").innerHTML = locationHTML
})


 let selectVehicle= document.getElementById('selectVehicle');
 let vehicleOptions = data.films.filter((film) => film.vehicles.length > 0)
    .map(function(film) {return film.title})
    
       for (let i = 0; i < vehicleOptions.length; i++){
           let vehicleName = vehicleOptions[i];
           let vehicleElement = document.createElement("option")
           
           vehicleElement.textContent = vehicleName 
           vehicleElement.value = vehicleName
           selectVehicle.appendChild(vehicleElement);
       }
   


 selectVehicle.addEventListener('change', () => {
    document.getElementById('FirstPage').style.display = 'none';
    document.getElementById('informativeFile').style.display = 'none';// Sirve para desaparecer las fichas informativas, si es que estan
    document.getElementById('vehicles').style.display = 'flex';
    document.getElementById('vehiclesFile').style.display = 'flex';
    document.getElementById('locations').style.display = 'none';
    document.getElementById('character').style.display = 'none';
    let filmTitle = selectVehicle.value
    let vehiclesFiltered = [''];
    vehiclesFiltered = vehicleFilter(filmTitle, data.films); //argument
    const caption = 'has '+ vehiclesFiltered.length + ' vehicles';

    document.getElementById('caption').innerHTML = caption;

    let vehicleHTML = ""
    vehiclesFiltered.forEach( theVehicle=>{
       vehicleHTML += generatorVehicleHTML(theVehicle)
    })

    function generatorVehicleHTML (theVehicle){
        return `
        <div class="flexRow" style="display: flex; font-family: sans-serif; flex-flow: nowrap; 
        background-color: bisque; border-radius: 1rem; margin-bottom: 10px;">
        <div class="posterFilter" style="padding: 1rem; width: -webkit-fill-available;"><img src="${theVehicle.img}" id="filterImg"></div>
        <div class="informativeLocation">
                <p style="font-size: 50px;"><b> ${theVehicle.name}</b></p>
                <p><b>Description: </b> ${theVehicle.description}<p>
                <p><b>Pilot: </b>${theVehicle.pilot.name}<p>
                <p><b>Vehicle Type: </b>${theVehicle.vehicle_class}<p>
                <p><b>Length </b>${theVehicle.length}</p>
          </div>
        </div>
        `
    }
    
    document.getElementById("vehiclesFile").innerHTML = vehicleHTML
} )

//window.addEventListener('load', init, false);
//function init() {
    let contador =0
    let div = document.getElementsByTagName('ul');
    let boton = document.getElementById('btnToMovilMenu');
    boton.addEventListener('click', function (e) {
        contador ++
        e.preventDefault;
        if(contador%2 != 0 ){
            div[0].style.left = '0%';
        }else{
            div[0].style.left = '-105%';
        }
    }
    );
//}