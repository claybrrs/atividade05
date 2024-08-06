// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.

// function somaDosDigitos() {
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

//     // Itera sobre cada caractere da string e soma os dígitos usando um loop 'for'
//     for (let i = 0; i < numeroStr.length; i++) {
//         soma += parseInt(numeroStr[i], 10);
//     }

//     // Exibe o resultado
//     console.log(`A soma dos dígitos de ${numero} é ${soma}`);
// }

// // Chama a função para iniciar o processo
// somaDosDigitos();

