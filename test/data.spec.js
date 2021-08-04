import { filterTypes, filterRegion, sortData } from '../src/data.js';
import dataMockSortBy from "./dataMock/dataMockSortBy.js";
import pokemonMock from "./dataMock/pokemonMock.js";
const pokemonData = pokemonMock.pokemon;

describe('Sort by number an alphabetically ascendant and descendant', () => {
    const pokemonSort = dataMockSortBy.pokemon;
    it('is a function', () => {
        expect(typeof sortData).toBe('function');
    });

    it('ordena por nombre ascendente', () => {
        const result = sortData(pokemonSort, "Nombre ascendente");
        expect(result).toEqual(dataMockSortBy.NameAscendent);
    });

    it('ordena por nombre descendente', () => {
        const result = sortData(pokemonSort, "Nombre descendente");
        expect(result).toEqual(dataMockSortBy.NameDescendant);
    });

    it('ordena por numero ascendente', () => {
        const result = sortData(pokemonSort, "0 a 251");
        expect(result).toEqual(dataMockSortBy.NumberAscendant);
    });

    it('ordena por numero descendente', () => {
        const result = sortData(pokemonSort, "251 a 0");
        expect(result).toEqual(dataMockSortBy.NumberDescendant);
    });
});
describe('Show pokemon by types', () => {
    it('show water type', () => {
        const result = filterTypes("water", pokemonData);
        expect(result.length).toBe(4);
    })
    it('show poison type', () => {
        const result = filterTypes("poison", pokemonData);
        expect(result.length).toBe(3);
    })
});

describe('filter types by generation', () => {
    it('show kanto generation', () => {
        const result = filterRegion("kanto", pokemonData);
        expect(result.length).toBe(7);
    });
    it('show johto generation', () => {
        const result = filterRegion("johto", pokemonData);
        expect(result.length).toBe(4);
    });
});