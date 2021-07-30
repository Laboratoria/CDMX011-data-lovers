
// import data from './data/lol/lol.js';
import data from "./data/rickandmorty/rickandmorty.js"
import { filterStatus, filterGender, filterSpecie } from './data.js';

const characters = data.results
let characterHtml = ""
characters.forEach((character=> {
  characterHtml += `<div class= "card">
           <img src = "${character.image}"> 
          <div class="info">   
          <h3>${character.name} </h3>
          <p>Status: ${character.status}</p>
          <p>Specie: ${character.species}</p>
          <p>Gender: ${character.gender}</p>
          <p>Type: ${character.type}</p>
          <p>Origin: ${character.origin.name}</p>
      
        </div>
       </div> `
}))
document.getElementById("root").innerHTML = characterHtml

//Filtrar por Status
document.getElementById("status").addEventListener("change", function(){
  const statusHtml = document.getElementById("status").value
  const characterStatus= filterStatus(characters, statusHtml)

  let mostrarFiltro=""
  characterStatus.forEach((filtrado=> {
    mostrarFiltro += `<div class= "card">
             <img src = "${filtrado.image}"> 
            <div class="tarjeta">   
            <h3>${filtrado.name.toUpperCase()} </h3>
            <p>Status: ${filtrado.status}</p>
            <p>Specie: ${filtrado.species}</p>
            <p>Gender: ${filtrado.gender}</p>
            <p>Type: ${filtrado.type}</p>
            <p>Origin: ${filtrado.origin.name}</p>
        
          </div>
         </div> `
  }))
    // eslint-disable-next-line no-console
  //console.log(characterStatus)
  document.getElementById("root").innerHTML = mostrarFiltro

})

//Filtar pos Género
document.getElementById("gender").addEventListener("change", function(){
const genderHtml = document.getElementById("gender").value
const characterGender= filterGender(characters, genderHtml)

let mostrarFiltro=""
characterGender.forEach((filtrado=> {
mostrarFiltro += `<div class= "card">
       <img src = "${filtrado.image}"> 
      <div class="tarjeta">   
      <h3>${filtrado.name.toUpperCase()} </h3>
      <p>Status: ${filtrado.status}</p>
      <p>Specie: ${filtrado.species}</p>
      <p>Gender: ${filtrado.gender}</p>
      <p>Type: ${filtrado.type}</p>
      <p>Origin: ${filtrado.origin.name}</p>
  
    </div>
   </div> `
}))

// eslint-disable-next-line no-console
//console.log(characterGender)
document.getElementById("root").innerHTML = mostrarFiltro
})



//Filtrar por Especie

document.getElementById("species").addEventListener("change", function(){
const specieHtml = document.getElementById("species").value
const characterSpecie= filterSpecie(characters, specieHtml)
let mostrarFiltro=""
characterSpecie.forEach((filtrado=> {
mostrarFiltro += `<div class= "card">
         <img src = "${filtrado.image}"> 
        <div class="tarjeta">   
        <h3>${filtrado.name.toUpperCase()} </h3>
        <p>Status: ${filtrado.status}</p>
        <p>Specie: ${filtrado.species}</p>
        <p>Gender: ${filtrado.gender}</p>
        <p>Type: ${filtrado.type}</p>
        <p>Origin: ${filtrado.origin.name}</p>
    
      </div>
     </div> `
}))

document.getElementById("root").innerHTML = mostrarFiltro

// eslint-disable-next-line no-console
//console.log(characterSpecie)
})


 
