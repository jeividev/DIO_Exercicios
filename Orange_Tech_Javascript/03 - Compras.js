/**
 * 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
 * de etiqueta e a escolha da condição de pagamento.
 * Utilizando os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
 * o cálculo adequado.
 *
 * Código Condição de pagamento:
 *  1 - À vista débito, recebe 10% de desconto;
 *  2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
 *  3 - Em duas vezes, preço normal de etiqueta sem juros;
 *  4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */

const precoEtiqueta = 100;
const formaDePagamento = 4;
let valorSerPago = 0;

if ((formaDePagamento === 1)) {
  valorSerPago = precoEtiqueta * 0.9;
} else if ((formaDePagamento === 2)) {
  valorSerPago = precoEtiqueta * 0.85;
} else if ((formaDePagamento === 3)) {
  valorSerPago = precoEtiqueta;
} else if ((formaDePagamento === 4)) {
  valorSerPago = precoEtiqueta * 1.10;
}

console.log(valorSerPago.toFixed(2))