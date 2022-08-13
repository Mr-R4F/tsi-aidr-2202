"use strict";
/*
    Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final ponderada
    deste aluno. Considerar o peso das notas como 2, 3 e 5, respectivamente
*/
exports.__esModule = true;
var rs = require("readline-sync"); //sempre que necessário
var nota1 = rs.question('Digite a nota 1: ');
var nota2 = rs.question('Digite a nota 2 ');
var nota3 = rs.question('Digite a nota 3 ');
var res = (nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5);
console.log(res);
