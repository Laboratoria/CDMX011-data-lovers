import { filterType, sortA, sortZA, statistics } from '../src/data.js';
//import data from '../src/data.js';//
//const pokem = data.pokemon;//
const names =  [
  {
  "num": "002",
  "name": "ivysaur",
  "generation": {
    "num": "generation i",
    "name": "kanto",
    "type": [ "grass", "poison"]
  },

  },
  {
  "num": "003",
  "name": "venusaur",
  "generation": {
    "num": "generation i",
    "name": "kanto",
    "type": ["grass", "poison"]
  },
  },
  {"num": "001",
  "name": "bulbasaur",
   "generation": {
    "num": "generation i",
    "name": "kanto",
    "type": [ "grass", "poison"]
   },
  },

];


describe('returns type pokemon', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  });
  it(' This function should return the types of pokemon', () => {
    expect(filterType(names,"rock")).toHaveLength(0);
  });

});


describe('sortA-Z', () => {
  it('is a function', () => {
    expect(typeof sortA).toBe('function');
  });
  it('returns an Array sorted by A-Z', () => {
    const orden = sortA(names);

      expect(orden[0].name).toBe("bulbasaur");
      expect(orden[1].name).toBe("ivysaur");
      expect(orden[2].name).toBe("venusaur");

  });

});

describe('sortZ-A', () => {
  it('is a function', () => {
    expect(typeof sortZA).toBe('function');
  });
  it('returns an Array sorted by Z-A', () => {
    const orden = sortZA(names);

    expect(orden[0].name).toBe("venusaur");
    expect(orden[1].name).toBe("ivysaur");
    expect(orden[2].name).toBe("bulbasaur");

  });
});

describe('statistics', () => {
  it('is a function', () => {
    expect(typeof statistics).toBe('function');
  });
  it('it must return an array with 2 numerical values', () => {
    const stats = statistics(names);

    expect(stats[0]).toBe( 0 );
    expect(stats[1]).toBe( 100 );


  });
})
