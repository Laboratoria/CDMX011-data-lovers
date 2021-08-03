import { getPokemonRegion, filterTypes, filterRegion, getPokemonTypes, sortData } from '../src/data.js';
import pokemon from "./dataMock/pokemon.js"; //crear esto por cada archido
import { regionJoto, regionKhanto, sortAscendentLetter, sortDescendingLetter, sortDescendingNumber, typeWatter } from "./dataMock";


describe('Tipos de pokemon en set unico de datos', () => {
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