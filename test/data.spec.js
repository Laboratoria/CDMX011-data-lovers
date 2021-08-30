import { pokemonMock, bulbasaurMock } from "./dataMock.js";
import { filterByType, filterByGeneration, pokemonOrder} from "../src/data.js";

const pokemones = pokemonMock;
const grassPokemon = bulbasaurMock;

describe("Bloque filtrado por tipo de pokemon", () => {
  it("test de filtrado por tipo", () => {
    expect(filterByType(pokemones, "grass")).toHaveLength(1);
  });
  it("test que valida que sea una función", () => {
    expect(typeof filterByType).toBe("function");
  });
  it("debe retornar un pokemon de pasto", () => {
    expect(filterByType(pokemones, "grass")).toEqual(grassPokemon);
  });
});


describe("filtrado por generación de pokemon", () => {

  it("test que valida que sea una funcion", () => {
    expect(typeof filterByGeneration).toBe("function");
  });
  it("test de filtrado por generación", () => {
    expect(filterByGeneration(pokemones, "kanto")).toHaveLength(3);
  });
  it("debe retornar un pokemon de generacion kanto", () => {
    expect(grassPokemon).toEqual(bulbasaurMock);
  });
  it("test de filtrado por generación", () => {
    expect(filterByGeneration(pokemones, "johto")).toHaveLength(2);
  });
  
}); 


describe('Test para ordenado de la A-Z', () => {
   
    it("Es una funcion", () => {
      expect(typeof pokemonOrder).toBe("function");
    });
    it('debe retornar los pokemones ordenados de A-Z', () =>{
     const sortPokemon = pokemonOrder(pokemones, "A-Z");
     expect(sortPokemon).toHaveLength(5);
     expect(sortPokemon[0]).toEqual(bulbasaurMock[0]);
     expect(sortPokemon[0].name).toBe("bulbasaur");
    //  expect(sortPokemon[3]).toEqual(squirtleMock[0]);
   });
  
});


describe('Test para ordenado de la Z-A', () => {
  
   it('debe retornar los pokemones ordenados de Z-A', () =>{
     const sortPokemon = pokemonOrder(pokemones, "Z-A");
     expect(sortPokemon).toHaveLength(5);
     expect(sortPokemon[3]).toEqual(pokemonMock[3]);
     expect(sortPokemon[0].name).toBe("squirtle");
    //  expect(sortPokemon[0]).toEqual(squirtleMock[0]);

  });
  
});

// describe('Test de ordenado por numero', () => {
  
//   it('debe ordenar por número descendente', () =>{
//      const sortPokemon = pokemonOrder(pokemones, "251-1");
//        expect(sortPokemon).toHaveLength(4);
 

//  });
// });