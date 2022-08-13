/*
    Implemente um algoritmo que leia três números e imprima na tela o produto
    (multiplicação) dos três números
*/

import * as rs from 'readline-sync';

const num1: number = rs.question('Digite o primeiro número: ');
const num2: number = rs.question('Digite o segundo número: ');
const num3: number = rs.question('Digite o terceiro número: ');
const res = num1 * num2 * num3;
console.log(`O produto dos números é ${res}`);

//inferência de tipo (adivinha o tipo...)
//Quando a var inicializa sem algo, colocar o tipo.