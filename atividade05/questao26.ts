// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o
// número lido for 123, o programa deve exibir 321.

// function inverterNumero() {
//     // Solicita ao usuário que insira um número inteiro
//     let numero = prompt("Digite um número inteiro:");

//     // Converte a entrada em uma string e garante que é um número inteiro
//     let numeroStr = numero.toString();

//     // Verifica se a entrada é válida
//     if (isNaN(numero) || numeroStr === '') {
//         alert("Por favor, digite um número inteiro válido.");
//         return;
//     }

//     // Converte o número em uma string para manipulação
//     let numeroInvertido = '';

//     // Itera sobre cada caractere da string, mas começa do final para o início
//     for (let i = numeroStr.length - 1; i >= 0; i--) {
//         numeroInvertido += numeroStr[i];
//     }

//     // Exibe o resultado
//     console.log(`O número invertido é ${numeroInvertido}`);
// }

// // Chama a função para iniciar o processo
// inverterNumero();

