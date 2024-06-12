// Ejemplos de Tipos de Datos Simples en JavaScript

// Números
let edad = 17; 
let currentYear = 2024;
let memoriaRam = 8;

console.log(edad + ` "${typeof edad}"`); // -> 17 "number"
console.log(currentYear + ` "${typeof currentYear}"`); // -> 2024 "number"
console.log(memoriaRam + ` "${typeof memoriaRam}"`); // -> 8 "number"

// BigInt
const previouslyMaxSafeInteger = 9007199254740991n; // -> 9007199254740991n
const hugeHex = BigInt("0x1fffffffffffff"); // -> 9007199254740991n
const hugeString = BigInt("9007199254740991"); // -> 9007199254740991n

typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true



