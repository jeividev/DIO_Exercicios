/**
 * 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semetre da faculdade
 * calculada e imprima a sua média e a sua classificação conforme a tabela a baixo.
 *
 * Média = (nota 1 + nota 2 + nota 3) / 3
 *
 * Classificação:
 *  - Média menor que 5, reprovação
 *  - Média entre 5 e 7, recuperação;
 *  - Média acima de 7, passou de semestre;
 */

const nota1 = 8;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media <= 7) {
  console.log("Recuperação");
} else if (media > 7) {
  console.log("Passou");
}

// switch (media) {
//   case 5:
//     {
//       console.log("Reprovado");
//     }
//     break;

//   case 7:
//     {
//       console.log("Recuperação");
//     }
//     break;

//   default: {
//     console.log("Passou");
//   }
// }
