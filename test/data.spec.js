import {pokemonMock, bulbasaurMock}  from './dataMock.js'
import {filterByType, alphabeticOrder, filterByGeneration } from '../src/data.js';

const allPokemon = pokemonMock;
const grassPokemon = bulbasaurMock;



describe('filtrado por tipo de pokemon', () => {

  it('test de filtrado por tipo', () => {
    expect(filterByType(allPokemon, 'grass')).toHaveLength(1);
  });
  it('test que valida que sea una función', () => {
    expect(typeof filterByType).toBe('function');
  })
  it('debe retornar un pokemon de pasto', () => {
    expect(filterByType(allPokemon, 'grass')).toEqual(grassPokemon)
  })
});


describe('filtrado por generación de pokemon', () => {
  
  it('test de filtrado por generación', () => {
    expect(filterByGeneration(allPokemon, 'kanto')).toHaveLength(3);
  })
  it('test que valida que sea una funcion', () => {
    expect(typeof filterByGeneration).toBe('function');
  })
  // it('debe retornar un pokemon de generacion kanto', () => {
  //   expect(filterByGeneration(allPokemon, '')).toEqual(grassPokemon);
  // })
})





describe('filtrado por orden alfabetico pokemon', () => {
  it('debe retornar pokemones ordenados A-Z', () => {
    const sortPokemons = alphabeticOrder(allPokemon, 'A-Z');
    expect(sortPokemons).toHaveLength(3);
    expect(sortPokemons[0]).toEqual(bulbasaurMock[0]);
  })
  it('debe retornar pokemones ordenados Z-A', () => {
    const sortPokemons = alphabeticOrder(allPokemon, 'Z-A');
    expect(sortPokemons).toHaveLength(3);
    expect(sortPokemons[3]).toEqual(bulbasaurMock[3]);
  })
  it('', () => {
    
  })
});
