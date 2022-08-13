/*
    Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final ponderada
    deste aluno. Considerar o peso das notas como 2, 3 e 5, respectivamente
*/

import * as rs from 'readline-sync'; //sempre que necessário

const nota1: number = rs.question('Digite a nota 1: ');
const nota2: number = rs.question('Digite a nota 2: ');
const nota3: number = rs.question('Digite a nota 3: ');

const res = (nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5);
console.log(`Sua nota final é : ${res}`);