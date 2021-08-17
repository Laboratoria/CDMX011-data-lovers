
import { filterGender, filterName, filterSpecie, filterStatus, filterByName } from "../src/data.js";

import { testCards, alienGoo, abadango,  } from "./mock.js";


describe("Bloque para filtrado", () => {
  it("Deberia encontrar 3 personajes masculinos", () => {
    expect(filterGender(testCards, "Male")).toHaveLength(3);   
}),

 it("Debería reconocer a Alien Googah dentro del género unknown", () => {
  expect(filterGender(alienGoo, "unknown")).toEqual(alienGoo);
}),

 it ("Deberían juntarse un total de 3 humanos", () => {
   expect(filterSpecie(testCards, "Human")).toHaveLength(3);
}),

 it ("Alexander debería ser es el único personaje muerto", () => {
   expect(filterStatus(testCards, "Dead")).toHaveLength(1);
})

});

describe("Bloque de ordenamiento", () => {
  it ("Los personajes en orden de A-Z no deberian cambiar el número de tarjetas", () =>{
    const personajesOrden = filterName(testCards, "A-Z");
    expect(personajesOrden).toHaveLength(5);
  })
  it ("El primer personaje en aparecer deberia ser Abadango, si ordenamos de A-Z", () => {
    const personajesOrdenDescendente = filterName(testCards, "A-Z");
    expect(personajesOrdenDescendente[0]).toEqual(abadango[0]);
  })

});

describe("Bloque de ordenamiento ascendente", () => {
  
  it ("Si los personajes se ordenan de Z-A, la última posición deberia ser Abadango", () => {
    const personajesOrdenDescendente = filterName(testCards, "Z-A");
    expect(personajesOrdenDescendente[4]).toEqual(abadango[0]);
  })

});

describe("Bloque filtrar por nombre", ()=> {
  it("Deberia filtrar por nombre", ()=>{
  expect(filterByName(alienGoo, "alien googah")).toEqual(alienGoo)
})
}) 

/*


describe("filterStatus", () => {
  it("is a function", () => {
    //typeof-->devuelve una cadena que indica el tipo del operando sin evaluarlo
    expect(typeof filterStatus).toBe("function"); //para verificar la identidad referencial de instancias de objetos.
  });
  it("deberia filtrar por status", () => {
    var items = [
      { name: "Edward", status: "Alive" },
      { name: "Sharpe", status: "Dead" }w,
      { name: "And", status: "unknown" },
      { name: "The", status: "Alive" },
      { name: "Magnetic", status: "Dead" },
      { name: "Zeros", status: "unknown" },
    ];
    var status_items = [
      { name: "Edward", status: "Alive" },
      { name: "The", status: "Alive" }
    ];

    expect(filterStatus(items, "Alive")).toStrictEqual(status_items); //para probar que los objetos tienen los mismos tipos y estructura.
  });
});




//Prueba filter genero

describe("filterGender", () => {
  it("is a function", () => {
    expect(typeof filterGender).toBe("function");
  });
  it("deberia filtrar por genero", () => {
    const items = [
      { name: "Edward", gender: "Male" },
      { name: "Sharpe", gender: "Female" },
      { name: "And", gender: "Female" },
      { name: "The", gender: "Male" },
      { name: "Magnetic", gender: "Female" },
      { name: "Zeros", gender: "Female" },
    ];
    const gender_items = [
      { name: "Edward", gender: "Male" },
      { name: "The", gender: "Male" }
    ];

    expect(filterGender(items, "Male")).toStrictEqual(gender_items);
  });
});
//Prueba filtrar por especie

describe("filterSpecie", () => {
  it("is a function", () => {
    expect(typeof filterSpecie).toBe("function");
  });
  it("deberia filtrar por especie", () => {
    const items = [
      { name: "Edward", species: "Human" },
      { name: "Sharpe", species: "Alien" },
      { name: "And", species: "Animal" },
      { name: "The", species: "Alien" },
      { name: "Magnetic", species: "Humanoid" },
      { name: "Zeros", species: "Mytholog" }
    ];
    const specie_items = [
      { name: "And", species: "Animal" }

    ];

    expect(filterSpecie(items, "Animal")).toStrictEqual(specie_items);
  });
});


//Alfabeto
describe("filterName", () => {
  it("is a function", () => {
    expect(typeof filterName).toBe("function");
  });

  it("deberia ordenar nombres descendente", () => {
    const items = [
      { name: "Edward", value: 21 },
      { name: "Sharpe", value: 37 },
      { name: "And", value: 45 },
      { name: "The", value: -12 },
      { name: "Magnetic", value: 13 },
      { name: "Zeros", value: 37 }
    ];
    const az_items = [
      { name: 'And', value: 45 },
      { name: 'Edward', value: 21 },
      { name: 'Magnetic', value: 13 },
      { name: 'Sharpe', value: 37 },
      { name: 'The', value: -12 },
      { name: 'Zeros', value: 37 }
    ];

    expect(filterName(items, "A-Z")).toStrictEqual(az_items);
  });
  it("deberia ordenar nombres ascendentemente", () => {
    const items = [
      { name: "Edward", value: 21 },
      { name: "Sharpe", value: 37 },
      { name: "And", value: 45 },
      { name: "The", value: -12 },
      { name: "Magnetic", value: 13 },
      { name: "Zeros", value: 37 },
    ];
    const za_items = [
      { name: "Zeros", value: 37 },
      { name: "The", value: -12 },
      { name: "Sharpe", value: 37 },
      { name: "Magnetic", value: 13 },
      { name: "Edward", value: 21 },
      { name: "And", value: 45 },
    ];

    expect(filterName(items, "Z-A")).toStrictEqual(za_items);
  });
});

*/
