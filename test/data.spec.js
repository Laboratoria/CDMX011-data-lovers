import { filterByType } from "../src/data.js";

describe("filterByType", () => {
  it("should be a function", () => {
    expect(typeof filterByType).toBe("function");
  });

  it("returns `la data pokemon debe ser filtrada por tipo`", () => {
    expect(() => (filterByType).toThrow("pokemonType"));
  });
});

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
