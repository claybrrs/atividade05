// 25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.

// function somaDosDigitosPares() {
//     // Solicita ao usuário que insira um número inteiro
//     let numero = prompt("Digite um número inteiro:");

//     // Converte a entrada em um número e garante que é um número inteiro
//     numero = parseInt(numero, 10);

//     // Verifica se a entrada é válida
//     if (isNaN(numero)) {
//         alert("Por favor, digite um número inteiro válido.");
//         return;
//     }

//     // Converte o número em uma string para iterar pelos dígitos
//     let numeroStr = Math.abs(numero).toString(); // Usa Math.abs para lidar com números negativos
//     let soma = 0;

//     // Itera sobre cada caractere da string e soma os dígitos pares usando um loop 'for'
//     for (let i = 0; i < numeroStr.length; i++) {
//         let digito = parseInt(numeroStr[i], 10);
//         if (digito % 2 === 0) {  // Verifica se o dígito é par
//             soma += digito;
//         }
//     }

//     // Exibe o resultado
//     console.log(`A soma dos dígitos pares de ${numero} é ${soma}`);
// }

// // Chama a função para iniciar o processo
// somaDosDigitosPares();


