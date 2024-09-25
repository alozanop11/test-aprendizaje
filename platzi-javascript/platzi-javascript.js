/* 1- mi primer hola mundo */
//console.log("Hola mundo")

/*2- Variables - let y const*/
/* 
let cajaDeAndy = "Woody";
console.log(cajaDeAndy); 
*/

/*3- tipos de datos*/
//primitivos
/* 
let nombre = "Abdiel"; //string

let edad = 25; // number

let esMayor = true; // boolean

let noHayValor = null; //null

let noDefinido = undefined; // undefined

let simboloUnico = Symbol("único");  //symbol

console.log(nombre);
*/

//complejos
/* 
let carro = {
  marca: "Tesla",
  modelo: "Model S",
}; // Object

let frutas = ["manzana, banano "]; //array

//console.log(carro);
//console.log(frutas);

function saludar() {} 
*/

/*4- Strings */
/* let string1 = "Hola, mundo";
let string2 = "javascript es genial";
let string3 = `${string1} feliz :)`;
let string4 = string1 + " " + string2;

//console.log(string4);

let frase = "JavaScript es Extremadamente Genial";
console.log(frase.length);
console.log(frase.toLocaleLowerCase());
console.log(frase.toUpperCase());
console.log(frase.substring(0, 10)); */

/* 5- tipo entero y decimal */
/* const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal); */

/* 6- Infinito y NaN */
/* const infinito = Infinity;
const noEsUnNumero = NaN; */

/* 7- operaciones aritmeticas */
// suma, resta, multiplicación y división
/* const suma = 3 + 4;
const resta = 4 - 4;
const multiplicación = 4 * 7;
const division = 16 / 2; */

/* 8- Móudulo y Exponenciadión */
/* const modulo = 15 % 8;
const exponenciacion = 2 ** 3; */

/* 9 - Precisión */
/* const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado === 0.3); */

/* 10- operaciones avanzadas */
/* const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const aleatorio = Math.random();

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio); */

/* 11- operadores */
/* const a = 10;
const b = 20;
const c = "10";

console.log(a == b);
console.log(a === c);
console.log(a != b);
console.log(a !== c);
console.log(a > b);
console.log(a <= b);
console.log(a > c); */

/* 12 operadores logicos */
/* const a = 10;
const b = 20;
const c = "10";

console.log(a == b && a === c);
console.log(a != b || a === c);
console.log(!(a === c));
 */

/* 12- operadores logicos */
/* let nombre = "Nico";

if (nombre === "Diego") {
  console.log("Hola Abdiel");
} else if (nombre === "Nico") {
  console.log("Hola Nico");
} else {
  console.log("nombre no encontrado");
}
 */

/* EJERCICIO 1 */
/* const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina el numero entre 1 al 10"));
//console.log(numeroSecreto);

if (numeroJugador === numeroSecreto) {
  console.log("Ganaste");
} else if (numeroJugador < numeroSecreto || numeroJugador > 10) {
  console.log("numero invalido");
} else {
  console.log("No adivinaste");
}

let expr = "Papayas";

switch (expr) {
  case "Naranjas":
    console.log("las naranjas cuestan $20 el kilo");
    break;
  case "Manzanas":
    console.log("las manzanas cuestan $30 el kilo");
    break;
  case "Platanos":
    console.log("las platanos cuestan $40 el kilo");
    break;
  case "Mangos":
  case "Papayas":
    console.log("los mangos y las papayas cuestan $25 el kilo");
    break;
  default:
    console.log(`Lo siento, no contamos con ${expr}`);
    break;
}

console.log("hay algo mas que desees?");
 */

/* For */
/* let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
} */

/* For of */
/* let canasta = ["manzana", "pera", "naranja", "uva"];

for (const fruta of canasta) {
  console.log(fruta);
} */

/* For In - Iterar Objetos*/
/* const listaDeCompras = {
  manzana: 5,
  peras: 3,
  naranja: 2,
  uva: 1,
};

for (fruta in listaDeCompras) {
  console.log(fruta);
}

for (fruta in listaDeCompras) {
  console.log(`${listaDeCompras[fruta]}`);
}
 */

/* While */
/* let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador++;
}
 */

/* Do While */

/* let contador = 0;
do {
  console.log(contador);
  contador++;
} while (contador < 10); */

/*13- funciones */
/* function suma(a, b) {
  return a + b;
}

suma(3, 5);

function calculateDiscountPrice(price, discountPercentage) {
  const discount = (price * discountPercentage) / 100;
  const priceWithDiscount = price - discount;

  return priceWithDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage);

console.log(
  `Original Price $${originalPrice}, Descuento: ${discountPercentage}%, Precio Final ${finalPrice}`
); */

/* Callbacks */
/* function a() {}
function b(a) {}
b(a); */

/* Almacenar funciones en objetos */
/* const rocket = {
  name: "falcon 9",
  lounchMessage: function lounchMessage() {
    console.log("😂");
  },
};

rocket.lounchMessage();
 */

/* 14-Funciones Puras 
// Side Effects

1. Modificar variables globales
2. Modificar parámetros
3. Solicitudes HTTP
4. Imprimir mensajes en pantalla o consola
5. Manipulación del DOM
6. Obtener la hora actual

function sum(a, b){
return a + b
}
*/

/* Funciones Impuras */
/* function sum(a, b) {
  console.log("A: ", a);
  return a + b;
} */

/* funciones puras */
/*function square(x) {
   return x * x;
}

function addTen(y) {
  return y + 10;
}

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);

let total = 0;

function sumWithSideEffect(a) {
  total += a;
  return total;
}
 */

/* Arrow function */
/* 
//explicit return
const newGreeting = (name) => {
  return `Hi, ${name}`;
};

// implicit return
const newGreetingImplicit = (name) => `Hi, ${name}`;
const newGreetingImplicitWithTwoParameters = (name, lastname) => `Hi, ${name}`; */

//Lexical Binding
/* const finctionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWtihArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`);
  },
};

finctionalCharacter.messageWithTraditionalFunction(
  "with reat power comes great responsability."
);

finctionalCharacter.messageWtihArrowFunction("Beawer of Doctor Octopus"); */

/* Contextos de ejecución y Scope chain */

/* 15- Closure */
/* function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counterA = createCounter();
counterA();
counterA();

const counterB = createCounter();
counterB();
 
function outer() {
  let message = "Hello, ";

  function inner(name) {
    console.log(message + name);
  }

  return inner;
}

const clousereA = outer();
const clousereB = outer();

clousereA("Alicia");
clousereA("Bob");
*/

/* 16- Arrays */
/* const fruits = Array("apple", "banana", "orange");
console.log(fruits);

const number = Array(1, 2, 3, 4, 5);
console.log(number);

//Array literal syntax
const oneNumber = [4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ["soccer", "tennis", "rugby"];
console.log(sports);

const recipeIngredients = [
  "Flour",
  true,
  2,
  {
    ingredient: "Milk",
    quantity: "1 cup",
  },
  false,
];

console.log(recipeIngredients);

const firstFruit = fruits[0];
console.log(firstFruit);

const numberOfFruits = fruits.length;
console.log(numberOfFruits);

// Mutability
fruits.push("watermelon");
console.log(fruits);

//Inmutability
const newFruits = fruits.concat(["grape", "kiwi"]);
console.log(fruits);
console.log(newFruits);

//checking arrays with Array.isArray
const isArray = Array.isArray(fruits);
console.log(isArray);

// Practical Exercise: sum all elements of an array
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}

console.log(sum);

//Modificar Arreglos
const countries = ["USA", "Canada", "UK"];
const newCountries = countries.push("Germany", "Australia"); //push()

console.log(countries);
console.log(newCountries);

const removeCountry = countries.pop(); //pop()
console.log(countries);
console.log(removeCountry);

//map()
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);

console.log(numbers);
console.log(squaredNumbers);

//forEach()
const colors = ["red", "pink", "blue"];
const iteratedColors = colors.forEach((color) => console.log(color));

console.log(colors);
console.log(iteratedColors);

//Exercise: Fahrenheit to Celsius conversion
const temperaturesInFahrenheit = [32, 68, 104, 212];

const temperaturesInCelsius = temperaturesInFahrenheit.map(
  (fahrenheit) => (5 / 9) * (fahrenheit - 32)
);

console.log(`temperatures In Fahrenheit: ${temperaturesInFahrenheit}`);
console.log(`temperatures In Celsius: ${temperaturesInCelsius}`); 

//Exercise: sum of elements in an Array

const newNumbers = [1, 2, 3, 4, 5];

let sumTotal = 0;

newNumbers.forEach((number) => (sumTotal += number));
console.log(`Array: ${newNumbers}`);
console.log(`La suma total es: ${sumTotal}`);

//filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(numbers);
console.log(evenNumbers);

//reduce() - case 1

const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(numbersReduce);
console.log(sum);

//reduce() - case 2
const words = ["apple", "banana", "hello", "bye", "banana", "bye", "bye"];
const wordFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }

  return accumulator;
}, {});

console.log(wordFrecuency);

//find()
const multipleOf5 = [5, 10, 14, 20];

const firstNumberGreaterThan10 = multipleOf5.find((number) => number > 10);

console.log(multipleOf5);
console.log(firstNumberGreaterThan10);

//findIndex()
const randomNumber = [6, 14, 27, 56, 40];
const indexNumber = randomNumber.findIndex((number) => number > 50);

console.log(randomNumber);
console.log(indexNumber);

//slice()
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 6));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());
*/

/* 17- spreed-operator */
/* const originalArray = [1, 2, 3, 4, 5];
const copiedOfArray = [...originalArray];

console.log(originalArray);
console.log(copiedOfArray);

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];
const combinedArray = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(combinedArray);

const baseArray = [1, 2, 3];
const arrayWithAdditionalElement = [...baseArray, 4, 5, 6];

console.log(baseArray);
console.log(arrayWithAdditionalElement);

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result); */

/* 18-Anatomia de un Objeto 
-estructura de datos
-key/value

objeto{
  propiedad:valor,
  propiedad:valor,
  propiedad:valor
}
*/

/* const persona = {
  nombre: "Jon",
  edad: 30,
  direccion: {
    calle: "Av Insurgentes 187",
    ciudad: "CDMX",
  },
  saludar() {
    console.log(`hola, mi nombre es ${persona.nombre}`);
  },
};

console.log(persona);
persona.saludar();

persona.telefono = "555-555-5555";

console.log(persona.telefono);

persona.despedir = () => {
  console.log("Adios");
};

persona.despedir();

delete persona.telefono;

delete persona.despedir; */

/* 18-función constructora */
/* function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

const persona1 = new Persona("Juan", "Perez", 30);

console.log(persona1);

const persona2 = new Persona("Diego", "De Granda", 35);

console.log(persona2);

Persona.prototype.telefono = "555-555-5555";

persona1.nacionalidad = "Mexicano";

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

persona1.saludar();
persona2.saludar(); */

/* 19-Clases */
/* class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola , nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
}

const persona1 = new Persona("Mariana", 25);

persona1.saludar(); */

/* 20-Prototipos y Herencia */
/* class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log("El animal emite un sonido");
  }
}

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }
  emitirSonido() {
    console.log("El perro ladra");
  }
  correr() {
    console.log(`${this.nombre} corre alegremente`);
  }
}

perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevoMetodo = function () {
  console.log("Este es un metodo");
};

Perro.prototype.segundoMetodo = function () {
  console.log("Es otro nuevo metodo");
}; */

/* 21-this */
/* class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const persona1 = new Persona("Alice", 25);

console.log(persona1);

persona1.nuevoMetodo = function () {
  console.log(`Mi nombre es ${this.nombre}`);
}; */

/* 22-Reto-Red-Social */
/* const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    timeline: "me encanta Javascript",
    password: "Estefany",
  },
  {
    timeline: "me encanta React",
    password: "Oscar",
  },
  {
    timeline: "me encanta Vue",
    password: "Marian",
  },
];

const username = prompt("Cuál es tu usuario?");
const password = prompt("Cuál es tu contraseña?");

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert("uuups, usuario o contraseña incorrectos");
  }
}

signIn(username, password);
 */
