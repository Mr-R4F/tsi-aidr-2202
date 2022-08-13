"use strict";
/*
    Implemente um algoritmo que leia três números e imprima na tela o produto
    (multiplicação) dos três números
*/
exports.__esModule = true;
var rs = require("readline-sync"); //sempre que necessário
var num1 = rs.question('Digite o primeiro número');
var num2 = rs.question('Digite o segundo número');
var num3 = rs.question('Digite o terceiro número');
var res = num1 * num2 * num3;
console.log(res);
