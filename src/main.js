import data from "./data/rickandmorty/rickandmorty.js"
import { filterStatus, filterGender, filterSpecie,filterName, filterByName } from "./data.js"




// Mostrar Data
const characters = data.results
let characterHtml = ""
characters.forEach((character=> {
  characterHtml += `<div class= "card">
           <img src = "${character.image}"> 
          <div class="info">   
          <h3>${character.name} </h3>
          <p><b>Status:</b> ${character.status}</p>
          <p><b>Specie:</b> ${character.species}</p>
          <p><b>Gender:</b> ${character.gender}</p>
          <p><b>Type:</b> ${character.type}</p>
          <p><b>Origin:</b> ${character.origin.name}</p>
      
        </div>
       </div> `
}))
document.getElementById("root").innerHTML = characterHtml


  /*  window.addEventListener('DOMContentLoaded', () => {
        // eslint-disable-next-line no-console
        console.log(filtrarVivo(characters,"Dead"))
    });
  */


//Filtrar por Status
    document.getElementById("status").addEventListener("change", function(){
      const statusHtml = document.getElementById("status").value
      const characterStatus= filterStatus(characters, statusHtml)
    
      let showStatusFilter=""
      characterStatus.forEach((card=> {
        showStatusFilter += `<div class= "card">
                 <img src = "${card.image}"> 
                <div class="info">   
                <h3>${card.name} </h3>
                <p><b>Status:</b> ${card.status}</p>
                <p><b>Specie:</b> ${card.species}</p>
                <p><b>Gender:</b> ${card.gender}</p>
                <p><b>Type:</b> ${card.type}</p>
                <p><b>Origin:</b> ${card.origin.name}</p>
            
              </div>
             </div> `
      }))
        // eslint-disable-next-line no-console
      //console.log(characterStatus)
      document.getElementById("root").innerHTML = showStatusFilter

    })

//Filtar pos Género
document.getElementById("gender").addEventListener("change", function(){
  const genderHtml = document.getElementById("gender").value
  const characterGender= filterGender(characters, genderHtml)
  
  let showGenderFilter=""
characterGender.forEach((card=> {
  showGenderFilter += `<div class= "card">
           <img src = "${card.image}"> 
          <div class="info">   
          <h3>${card.name} </h3>
          <p><b>Status:</b> ${card.status}</p>
          <p><b>Specie:</b> ${card.species}</p>
          <p><b>Gender: </b>${card.gender}</p>
          <p><b>Type: </b>${card.type}</p>
          <p><b>Origin: </b>${card.origin.name}</p>
      
        </div>
       </div> `
}))

// eslint-disable-next-line no-console
  //console.log(characterGender)
document.getElementById("root").innerHTML = showGenderFilter
})

// Specie
document.getElementById("species").addEventListener("change", function(){
  const specieHtml = document.getElementById("species").value
  const characterSpecie= filterSpecie(characters, specieHtml)
  let showSpeciesFilter=""
  characterSpecie.forEach((card=> {
    showSpeciesFilter += `<div class= "card">
             <img src = "${card.image}"> 
            <div class="info">   
            <h3>${card.name} </h3>
            <p ><b>Status:</b>${card.status}</p>
            <p><b>Specie:</b>${card.species}</p>
            <p><b>Gender: </b>${card.gender}</p>
            <p><b>Type:</b> ${card.type}</p>
            <p><b>Origin:</b> ${card.origin.name}</p>
        
          </div>
         </div> `
  }))
  
  document.getElementById("root").innerHTML = showSpeciesFilter

  // eslint-disable-next-line no-console
  //console.log(characterSpecie)
})

//Filtrar por nombre
document.getElementById("button").addEventListener("click", function (){
  const input= document.getElementById("input").value
  const buscar = filterByName(characters, input)
  let buscarByName = ""
  buscar.forEach((orden=> {
    buscarByName+= `<div class= "card">
            <img src = "${orden.image}"> 
           <div class="info">   
           <h3>${orden.name} </h3>
           <p><b>Status:</b> ${orden.status}</p>
           <p><b>Specie:</b> ${orden.species}</p>
           <p><b>Gender: </b>${orden.gender}</p>
           <p><b>Type: </b>${orden.type}</p>
           <p><b>Origin: </b>${orden.origin.name}</p>
       
         </div>
        </div> `
 }))
 
 document.getElementById("root").innerHTML = buscarByName
 // eslint-disable-next-line no-console
 console.log(buscar)
})



 //Filtrar por Alfabeto
document.getElementById("order").addEventListener("change", function(){
  const orderHtml = document.getElementById("order").value
  const orderAlphabet=filterName(characters, orderHtml)
  let inOrder=""
  orderAlphabet.forEach((order=> {
     inOrder+= `<div class= "card">
             <img src = "${order.image}"> 
            <div class="info">   
            <h3>${order.name} </h3>
            <p><b>Status:</b> ${order.status}</p>
            <p><b>Specie:</b> ${order.species}</p>
            <p><b>Gender: </b>${order.gender}</p>
            <p><b>Type: </b>${order.type}</p>
            <p><b>Origin: </b>${order.origin.name}</p>
        
          </div>
         </div> `
  }))
  
  document.getElementById("root").innerHTML = inOrder
})
/*
document.getElementById("order").addEventListener("change", function(){
  const orderHtml = document.getElementById("order").value
  const orderAlphabet=filterName(characters, orderHtml)
  let mostrarOrden=""
  orderAlphabet.forEach((orden=> {
     mostrarOrden+= `<div class= "card">
             <img src = "${orden.image}"> 
            <div class="tarjeta">   
            <h3>${orden.name.toUpperCase()} </h3>
            <p>Status: ${orden.status}</p>
            <p>Specie: ${orden.species}</p>
            <p>Gender: ${orden.gender}</p>
            <p>Type: ${orden.type}</p>
            <p>Origin: ${orden.origin.name}</p>
        
          </div>
         </div> `
  }))
  
  document.getElementById("root").innerHTML = mostrarOrden
})

*/ 
