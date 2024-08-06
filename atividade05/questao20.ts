// 20. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
// ou igual a 7).

// function verificarNotas() {
//     let aprovado = 0; // Contador de alunos aprovados

//     for (let i = 1; i <= 5; i++) {
//         let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));

//         // Verifica se a nota é um número válido
//         while (isNaN(nota) || nota < 0 || nota > 10) {
//             alert('Por favor, digite uma nota válida entre 0 e 10.');
//             nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));
//         }

//         // Verifica se o aluno foi aprovado
//         if (nota >= 7) {
//             aprovado++;
//         }
//     }

//     // Exibe o resultado no console
//     alert(`Número de alunos aprovados: ${aprovado}`);
// }

// // Chama a função para iniciar a verificação
// verificarNotas();

