/**
 * 5) Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustíve por quilômetro rodado.
 * Crie um método que dado a quantidade de quilômetro e o preço do combustível nos dê o valor
 * gasto em reais para realizar este percurso.
 */

class Carros {
    constructor(fabricante, modelo, cor, KmPorLitro) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.cor = cor;
        this.KmPorLitro = KmPorLitro;
    }

    valorGasto(precoCombustivel, distanciaKm) {
        let gastoMedioPorKm = precoCombustivel / this.KmPorLitro;
        return (gastoMedioPorKm * distanciaKm).toFixed(2)
    }
}

const porsche911 = new Carros('Porscher', '911', 'Branco', 10)

console.log(porsche911.valorGasto(4.69, 560))
