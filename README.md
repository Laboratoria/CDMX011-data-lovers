# Data Lovers

## 5. Criterios de aceptación mínimos del proyecto

Los criterios para considerar que has completado este proyecto son:

### Definición del producto
Esta es una página interactiva que utiliza una API con la temática de Rick and Morty, en la cual el usuario puede ver
los personajes de la serie, conocer datos de ellos y hacer una búsqueda de personajes de su interés con ayuda de filtros y un buscador.

### Historias de usuario
 ### Historia de usuario 1:
 Yo como usuaria quiero ver el listado de los personajes de Rick and Morty para conocer la diversidad.
 **Criterios de aceptación**
 1. El usuario pueda ver en pantalla todos los personajes de Rick and Morty con la información de nombre, especie, origen, género y tipo.
 2. El usuario puede ver la información de los personajes dentro de tarjetas.
**Definición de terminado**
1. Manipulación del Dom (manejo de Template Strings y módulos para llamar a la data y mostrarla en el html)
2. Uso de html semántico, uso básico de selectores de css.

### Historia de usuario 2:
Yo como usuario quiero filtrar a los personajes para conocer las categorías que comparten entre sí.
**Criterios de aceptación**
1. El usuario puede filtrar a los personajes por categorías (especie, status y género).
2. Si el usuario hace uso de algún filtro verá en pantalla únicamente los personajes filtrados.
3. Cuando el usuario pase el mouse sobre las tarjetas, estás tendrán una respuesta visual para crear una experiencia más atractiva.

**Definición de terminado**
1. Crear función de filtrado por categoría (status, especie y género), utilizando el método de filter.
2. Crear función para ordenar los nombres de los personajes en ascendente y descendente con el método sort.
3. Hacer uso del template string para devolver la data con el uso de nuestras funciones de filter y sort.
4. Crear selectores en html para que el usuario pueda seleccionar el filtro a su elección y enlazar sus opciones con sus respectivos filtros de JS.
5. Responsive
6. Añadir color en el cuerpo de la pantalla, en los elementos principales de html y en el diseño de las tarjetas con CSS.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad
`./src/imagenes/prototipo_baja.jpg`

#### Prototipo de alta fidelidad
`.src/imagenes/prototipos.png`
`.src/imagenes/prototipo_alta.png`


#### Testeos de usabilidad

Se hizo un prototipo de baja fidelidad considerando la temática del universo debido a que el programa de Rick and Morty involucra viajes por el multiverso para conocer a sus personajes. Asimismo el interés central de nuestra página es la presentación de los personajes de la serie.
En el diseño nos enfrentamos con varios cambios, ya sea por la resolución de las imágenes en el fondo que aminoraba el enfoque de los personajes, por lo tanto se tomó la decisión de seleccionar una paleta de colores sólidos (aqua, blanco) pero al recibir feedback, los usuarios indicaron que se perdía la esencia de la serie.
Asociado a esto decidimos hacer el diseño  con colores simbólicos de la serie (azul, amarillo, verde, negro). 
Se dieñaron tarjetas para la presentación de los personajes; en estas se visualiza imagen e información de los mismos. 
En esta página  se puede interactuar con filtros que limitan las tarjetas en pantalla de acuerdo al interés de los usuarios; también se pueden ordenar los nombres de manera ascendente y descendente con la intención de que la página sea dinámica.  

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |  |  ├── rickandmorty.js
|  |  |  ├── rickandmorty.json
|  |  |  └── README.md
|  |  └── athletes
|  |  |  ├── athletes.js
|  |  |  ├── athletes.json
|  |  |  └── README.md
|  |  └── ghibli
|  |  |  ├── ghibli.js
|  |  |  ├── ghibli.json
|  |  |  └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 7 file: 20
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

En este archivo encontrarás una serie de _imports_ _comentados_. Para _cargar_
las diferentes fuentes de datos tendrás que _descomentar_ la línea
correspondiente.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/lol/lol.js';
```

La línea quedaría así:

```js
import data from './data/lol/lol.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.
