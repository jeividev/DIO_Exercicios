/**
 * 2) IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
 * uma indicação sobre a condição de uma pessoa adulta.
 * 
 * Formula do IMC:
 * IMC = peso / (altura * altura)
 * 
 * Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo
 * com a tabela abaixo.
 * 
 * IMC em adultos condição:
 *  - Abaixo de 18.5 Abaixo do Peso;
 *  - Entre 18.5 e 25 Peso normal;
 *  - Entre 25 e 30 Acima do peso;
 *  - Entre 30 e 40 Obeso:
 *  - Acima de 40 Obsessividade Grave;
 */

const pesoKg = 73.5;
const alturaM = 1.68;
const IMC = pesoKg / (Math.pow(alturaM, 2))

if(IMC < 18.5){
    console.log("Abaixo do Peso");
}else if (IMC < 25){
    console.log("Peso Normal");
}else if (IMC < 30){
    console.log("Acima do peso");
}else if (IMC < 40){
    console.log("Obeso");
}else{
    console.log("Obsessividade Grave")
}