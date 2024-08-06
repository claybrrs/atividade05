// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.

// function calcularMedia() {
//     let notas = [5, 3, 4, 7, 2];
//     let soma = 0;


//     for (let i = 1; i <= 5; i++) {
//         let nota = parseFloat(prompt(`Digite a nota ${i}:`));
//         while (isNaN(nota) || nota < 0 || nota > 10) {
//             nota = parseFloat(prompt(`Nota inválida. Digite novamente a nota ${i} (0 a 10):`));
//         }
//         notas.push(nota);
//         soma += nota;
//     }

//     let media = soma / notas.length;

//     alert(`A média das notas é: ${media.toFixed(2)}`);
// }
