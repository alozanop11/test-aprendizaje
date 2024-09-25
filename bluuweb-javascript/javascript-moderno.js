/* 1- Variables y Repaso */
/* var edad = 10;
var edad = 20;

let edad = 10;
edad = 20;

const edad = 10;
edad = 20;

console.log(edad);

var edad = 10;

if (true) {
  var edad = 20;
  console.log(edad);
}

console.log(edad);

let edad = 10;

if (true) {
  let edad2 = 20;
  console.log(edad2);
}

console.log(edad);

let edad = 10;

if (true) {
  let edad = 20;
  console.log(edad);
}

console.log(edad);
*/

/* 2-Arreglos */
/* const arrayNumero = [10, 20, 30];
arrayNumero.push(40);
console.log(arrayNumero); */

/* 3-Objetos */
/* const persona = {
  nombre: "Juanito",
  edad: 20,
};

persona.edad = 21;
persona.pais = "México";

console.log(persona); */

/* 4-Funciones */
/* function sumar(num) {
  console.log(10);
}

sumar(10);

// const sumarDos = num => {
//   console.log(num);
// };

// const sumarDos = (num, num2) => {
//   console.log(num + num2);
// };

const sumarDos = (num, num2) => {
  return num + num2;
};

const resultado = sumarDos(20, 30);
console.log(resultado);

// const mensaje = () => {
//   return "hola soy Abdiel";
// };

const mensaje = (nombre) => `Hola soy ${nombre}`;

const resultadoDos = mensaje("Juanito");
console.log(resultadoDos);

const sumaTres = (num = 0) => {
  console.log(num + 3);
};

sumaTres(); */

/* 5-template string */
// const numero = (num) => {
//   return "el numero es: " + num;
// };

// const numero = (num, num2) => {
//   return `el numero es: ${num + num2}`;
// };

// const numero = (num, num2) => `el numero es: ${num + num2}`;

// const resultado = numero(10, 20);
// console.log(resultado);

/* 6- Objetos */
/* const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ["Pitbull", "French", "Bull Dog"],
};

console.log(mascota);
console.log(mascota.razas);
console.log(mascota.razas[0]);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);

mascota.id = 1;

console.log(mascota.id); */

/* Destructuring */
// const mascota = {
//   nombre: "Tom",
//   edad: 10,
//   vivo: true,
//   razas: ["Pitbull", "French", "Bull Dog"],
// };

// const { edad, nombre } = mascota;
// console.log(edad, nombre);

/* const web = {
  nombre: "www.bluuweb.cl",
  links: {
    enlace: "www.bluuweb.cl",
  },
  redesSociales: {
    youtube: {
      enlace: "youtube.com/bluuweb",
      nombre: "bluuweb yt",
    },
    facebook: {
      enlace: "facebook.com/bluuweb",
      nombre: "bluuweb fb",
    },
  },
};

// console.log(web.redesSociales.youtube.enlace);

// const enlaceYT = web.redesSociales.youtube.enlace;
// console.log(enlaceYT);

const { enlace, nombre } = web.redesSociales.youtube;
console.log(enlace);
console.log(nombre); */

/* 7-Fetch API */
/* fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
   // console.log(data.results);
   let arrayNombres=[]
    data.results.forEach((element) => {
      //console.log(element.name);
      arrayNombres.push(element.name)
    });
  })
  .catch((error) => console.log(error));
 */

/* 8-Async await */
/* const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    // console.log(data.results);
    // const arrayNombres = data.results.map((poke) => poke.name);
    // const arrayNombres = data.results.filter(
    //   (poke) => poke.name === "bulbasaur"
    // );

    const arrayNombres = data.results.filter(
      (poke) => poke.name !== "bulbasaur"
    );

    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones(); */
