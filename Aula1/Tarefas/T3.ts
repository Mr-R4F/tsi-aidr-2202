/*
    Elabore um programa capaz de ler a base e a altura de um triângulo para, em seguida,
    escrever a sua área.
*/

import * as rs from 'readline-sync'; //sempre que necessário

const base: number = rs.question('Digite a base: ');
const altura: number = rs.question('Digite a altura: ');
const res = (base * altura) / 2;
console.log(`A área do seu triângulo é: ${res}`);