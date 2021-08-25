import {data} from '../src/data.js'
import { pokemonMock } from './dataMock.js';

const pokemones = pokemonMock;

describe('returns the types of pokemon', () => {
  it('the function should return the types', () => {
    expect(data.filterByType(pokemones, 'fire')).toHaveLength(0);
  });
  
  it('should be a function', () => {
    expect(typeof pokemones.filterByType).toBe('function');
  });


});


//import { example, anotherExample } from '../src/data.js';

//import { example, anotherExample } from '../src/data.js';

/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});




describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });
  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/

