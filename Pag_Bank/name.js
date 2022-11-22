const precoCombustivel = 5.79;
const kmPorLitro =  10;
let distanciaKM = 123;

let gastoCombustivel = (distanciaKM / kmPorLitro) * precoCombustivel

console.log(gastoCombustivel.toFixed(02))