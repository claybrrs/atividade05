// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.

// function calcularMediaAltura() {
//     let totalAltura = 0;
//     const numPessoas = 5;

//     for (let i = 1; i <= numPessoas; i++) {
//         let altura = parseFloat(prompt(`Digite a altura da pessoa ${i} em metros:`));

//         // Verifica se a entrada é um número válido
//         while (isNaN(altura) || altura <= 0) {
//             alert('Por favor, digite uma altura válida (número positivo).');
//             altura = parseFloat(prompt(`Digite a altura da pessoa ${i} em metros:`));
//         }

//         totalAltura += altura;
//     }

//     // Calcula a média das alturas
//     let mediaAltura = totalAltura / numPessoas;

//     // Exibe o resultado
//     console.log(`A média de altura das ${numPessoas} pessoas é ${mediaAltura.toFixed(2)} metros.`);
// }

// // Chama a função para iniciar o processo
// calcularMediaAltura();

