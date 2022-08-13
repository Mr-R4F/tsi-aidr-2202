"use strict";
/*
    Elabore um programa capaz de ler a base e a altura de um triângulo para, em seguida,
    escrever a sua área.
*/
exports.__esModule = true;
var rs = require("readline-sync"); //sempre que necessário
var base = rs.question('Digite a base: ');
var altura = rs.question('Digite a altura: ');
var res = (base * altura) / 2;
console.log("A \u00E1rea do seu tri\u00E2ngulo \u00E9: ".concat(res));
