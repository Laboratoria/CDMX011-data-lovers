import information from '../src/data.js';


describe('information', () => {
    it('Deberài ser un Objeto', () => {
        expect(typeof information).toBe('object');
    });

    describe('information.sortData', () => {
        it('information.sortData debería ser una funcion', () => {
            expect(typeof information.sortData).toBe('function');
        });

        it('Debería retornar [{"name":"Ana"},{"name":"Bertha"},{"name":"Karla"}] para [{"name":"Bertha"},{"name":"Ana"},{"name":"Karla"}]', () => {
            expect(information.sortData([{ name: "Bertha" }, { name: "Ana" }, { name: "Karla" }], 1)).toEqual([{ name: "Ana" }, { name: "Bertha" }, { name: "Karla" }]);
        });
        it('Debería retornar [{"name":"Karla"},{"name":"Bertha"},{"name":"Ana"}] para [{"name":"Bertha"},{"name":"Ana"},{"name":"Karla"}]', () => {
            expect(information.sortData([{ name: "Bertha" }, { name: "Ana" }, { name: "Karla" }], 2)).toEqual([{ name: "Karla" }, { name: "Bertha" }, { name: "Ana" }]);
        });
        it('Debería retornar [{"id":1},{"id":2},{"id":3}] para [{"id":3},{"id":2},{"id":1}]', () => {
            expect(information.sortData([{ "id": 3 }, { "id": 2 }, { "id": 1 }], 3)).toEqual([{ "id": 1 }, { "id": 2 }, { "id": 3 }]);
        });
        it('Debería retornar [{"id":1},{"id":2},{"id":3}] para [{"id":3},{"id":2},{"id":1}]', () => {
            expect(information.sortData([{ "id": 1 }, { "id": 2 }, { "id": 3 }], 4)).toEqual([{ "id": 3 }, { "id": 2 }, { "id": 1 }]);
        });
    });
    describe('information.filterData', () => {
        it('information.filterData debería ser una funcion', () => {
            expect(typeof information.filterData).toBe('function');
        });

        it('Debería retornar[{ name: "Bertha", status: "Alive" }, { name: "Karla", status:"Alive" }] para [{ name: "Bertha", status: "Alive" }, { name: "Ana", status: "Dead" }, { name: "Karla", status:"Alive" }]', () => {
            expect(information.filterData([{ name: "Bertha", status: "Alive" }, { name: "Ana", status: "Dead" }, { name: "Karla", status: "Alive" }], 1)).toEqual([{ name: "Bertha", status: "Alive" }, { name: "Karla", status: "Alive" }]);
        });
        it('Debería retornar[{ name: "Bertha", status: "Dead" }, { name: "Karla", status:"Dead" }] para [{ name: "Bertha", status: "Dead" }, { name: "Ana", status: "unknown" }, { name: "Karla", status:"Dead" }]', () => {
            expect(information.filterData([{ name: "Bertha", status: "Dead" }, { name: "Ana", status: "unknown" }, { name: "Karla", status: "Dead" }], 2)).toEqual([{ name: "Bertha", status: "Dead" }, { name: "Karla", status: "Dead" }]);
        });
        it('Debería retornar[{ name: "Bertha", species: "Human" }, { name: "Karla", species:"Human" }] para [{ name: "Bertha", species: "Human" }, { name: "Ana", species: "Alien" }, { name: "Karla", species:"Human" }]', () => {
            expect(information.filterData([{ name: "Bertha", species: "Human" }, { name: "Ana", species: "Alien" }, { name: "Karla", species: "Human" }], 3)).toEqual([{ name: "Bertha", species: "Human" }, { name: "Karla", species: "Human" }]);
        });
        it('Debería retornar[{ name: "Bertha", species: "Alien" }, { name: "Karla", species:"Alien" }] para [{ name: "Bertha", species: "Alien" }, { name: "Ana", species: "Human" }, { name: "Karla", species:"Alien" }]', () => {
            expect(information.filterData([{ name: "Bertha", species: "Alien" }, { name: "Ana", species: "Human" }, { name: "Karla", species: "Alien" }], 4)).toEqual([{ name: "Bertha", species: "Alien" }, { name: "Karla", species: "Alien" }]);
        });
        it('Debería retornar[{ name: "Bertha", species: "Humanoid" }, { name: "Karla", species:"Humanoid" }] para [{ name: "Bertha", species: "Humanoid" }, { name: "Ana", species: "Human" }, { name: "Karla", species:"Humanoid" }]', () => {
            expect(information.filterData([{ name: "Bertha", species: "Humanoid" }, { name: "Ana", species: "Human" }, { name: "Karla", species: "Humanoid" }], 5)).toEqual([{ name: "Bertha", species: "Humanoid" }, { name: "Karla", species: "Humanoid" }]);
        });
        it('Debería retornar[{ name: "Bertha", species: "Poopybutthole" }, { name: "Karla", species:"Poopybutthole" }] para [{ name: "Bertha", species: "Poopybutthole" }, { name: "Ana", species: "Human" }, { name: "Karla", species:"Poopybutthole" }]', () => {
            expect(information.filterData([{ name: "Bertha", species: "Poopybutthole" }, { name: "Ana", species: "Human" }, { name: "Karla", species: "Poopybutthole" }], 6)).toEqual([{ name: "Bertha", species: "Poopybutthole" }, { name: "Karla", species: "Poopybutthole" }]);
        });
        it('Debería retornar[{ name: "Bertha", species: "Cronenberg" }, { name: "Karla", species:"Cronenberg" }] para [{ name: "Bertha", species: "Cronenberg" }, { name: "Ana", species: "Human" }, { name: "Karla", species:"Cronenberg" }]', () => {
            expect(information.filterData([{ name: "Bertha", species: "Cronenberg" }, { name: "Ana", species: "Human" }, { name: "Karla", species: "Cronenberg" }], 7)).toEqual([{ name: "Bertha", species: "Cronenberg" }, { name: "Karla", species: "Cronenberg" }]);
        });
        it('Debería retornar[{ name: "Raul", gender: "Male" }, { name: "Carlos", gender: "Male" }] para [{ name: "Raul", gender: "Male" }, { name: "Ana", gender: "Female" }, { name: "Carlos", gender: "Male" }]', () => {
            expect(information.filterData([{ name: "Raul", gender: "Male" }, { name: "Ana", gender: "Female" }, { name: "Carlos", gender: "Male" }], 8)).toEqual([{ name: "Raul", gender: "Male" }, { name: "Carlos", gender: "Male" }]);
        });
        it('Debería retornar[{ name: "Ana", gender: "Female" }] para [{ name: "Raul", gender: "Male" }, { name: "Ana", gender: "Female" }, { name: "Carlos", gender: "Male" }]', () => {
            expect(information.filterData([{ name: "Raul", gender: "Male" }, { name: "Ana", gender: "Female" }, { name: "Carlos", gender: "Male" }], 9)).toEqual([{ name: "Ana", gender: "Female" }]);
        });
        it('Debería retornar[{ name: "Raul", gender: "Male" }, { name: "Ana", gender: "Female" }, { name: "Carlos", gender: "Male" }] para [{ name: "Raul", gender: "Male" }, { name: "Ana", gender: "Female" }, { name: "Carlos", gender: "Male" }]', () => {
            expect(information.filterData([{ name: "Raul", gender: "Male" }, { name: "Ana", gender: "Female" }, { name: "Carlos", gender: "Male" }], 0)).toEqual([{ name: "Raul", gender: "Male" }, { name: "Ana", gender: "Female" }, { name: "Carlos", gender: "Male" }]);
        });
    });
});