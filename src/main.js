/*Manipulación del DOM*/
import data from "./data/pokemon/pokemon.js";
import { filterByType } from "./data.js";

const dataPokemon = data.pokemon;

// Primera pantalla donde muestra todos los pokemones
let pokemonHtml = "";

dataPokemon.forEach((eachPokemon) => {
  pokemonHtml += `<div class = "box">
    <h3>NOMBRE:${eachPokemon.name}</h3>
    <p>NÚMERO:${eachPokemon.num}</p>
    <p>PESO:${eachPokemon.size.weight}</p>
    <p>ALTURA:${eachPokemon.size.height}</p>
    <img src="${eachPokemon.img}">
    </div>`;
});
//parent element
document.getElementById("root").innerHTML = pokemonHtml;

//console.log(filterByType(dataPokemon, "poison"))

//data.forEach
//innerHTML
//Añadimos un select y accedemos a el, le ponemos un addEventListener que detecte los cambios con el change, una vez que detecta el cambio ejecuta las funciones
//Detectar el cambio del select con un addEventListener (que detecte los cambios con el change) change  y ejecutar la función filtrado
//como el onclick pero aqui sera el change
//Ejecutar filtrado por tipo pero en lugar de fire poner evento que mandamos
//mediante event.target.value, para acceder al valor cuando le hacemos un cambio a select
//nos dará acceso al valor cuando hacemos un cambio en select

document.getElementById("type").addEventListener("change", function () {
  const typeHtml = document.getElementById("type").value;
  const pokemonType = filterByType(dataPokemon, typeHtml);

  let showfilter = "";
  pokemonType.forEach((filter) => {
    showfilter += `<div class = "box">
        <h3>NOMBRE:${filter.name}</h3>
        <p>NÚMERO:${filter.num}</p>
        <p>PESO:${filter.size.weight}</p>
        <p>ALTURA:${filter.size.height}</p>
        <img src="${filter.img}">
        </div>`;
  });

  document.getElementById("root").innerHTML = showfilter;
});

/*const selectType = document.querySelector('.filter')

selectType.addEventListener('change', (event) => {
    const pokemonFilter = filterByType(dataPokemon,event.target.value);
    const typePokemon = pokemonFilter.map((categoryPokemon) =>

    `<div class = "box">
    <h3>NOMBRE:${categoryPokemon.name}</h3>
    <p>NÚMERO:${categoryPokemon.num}</p>
    <p>PESO:${categoryPokemon.size.weight}</p>
    <p>ALTURA:${categoryPokemon.size.height}</p>
    <img src="${categoryPokemon.img}">
    </div>`
    )

    document.getElementById("root").innerHTML=typePokemon

});*/
