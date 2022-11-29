/**
 * Faça um programa para calcular o valor gasto de combustível em uma viagem.Faça
 * 
 * Você terá 5 variáveis. Sendo elas:
 * 1 - Preço do etanol;
 * 2 - Preço da gasolina;
 * 3 - O tipo de combustível que está no seu carro;
 * 4 - Gasto médio de combustível do carro por kM;
 * 5 - Distência em KM da viagem;
 * 
 * Imprima no console o valor que será gasto para realizar esta viagem.
 */

const precoEtanol = 3.49;
const precoGasolina = 4.69;
const tipoGasolinaNoCarro = "gasolina";
const kmPorLitro = 10;
const distaciaEmKm = 560;

let gastoMedioPorKmCarro = 0;

if (tipoGasolinaNoCarro == "gasolina") {
  gastoMedioPorKmCarro = precoGasolina / kmPorLitro;
} else {
  gastoMedioPorKmCarro = precoEtanol / kmPorLitro;
}

const valorGasto = gastoMedioPorKmCarro * distaciaEmKm;
console.log(valorGasto.toFixed(2))