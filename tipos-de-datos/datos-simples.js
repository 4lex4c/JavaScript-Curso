// Ejemplos de Tipos de Datos Simples en JavaScript

// Números
const pi = 3.1415; // 3.1415 (número fraccionario)
let edad = 17; // 17

typeof pi === "number"; // true
typeof edad === "number"; // true

// BigInt
const previouslyMaxSafeInteger = 9007199254740991n; // -> 9007199254740991n
const hugeHex = BigInt("0x1fffffffffffff"); // -> 9007199254740991n
const hugeString = BigInt("9007199254740991"); // -> 9007199254740991n

typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true

// String o Cadena de Carácteres
const nombre = "Brian";
const country = "Jamaica";

typeof nombre === "string"; // true
typeof country === "string"; // true

// Booleano 
const booleanExample = true; // true

typeof booleanExample; // "boolean"

// Undefined
let undefined; 

typeof undefined; // "undefined"

// Null
const nullExample = null;

typeof nullExample; // "null"

// Symbol 
let symbolExample = Symbol("Ejemplo");

typeof symbolExample; // "symbol"

// Estos conforman todos los datos primitivos en Javascript