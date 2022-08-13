"use strict";
exports.__esModule = true;
var rs = require("readline-sync"); //sempre que necessário
var NOME = rs.question('Digite seu nome: '); //Como se fosse o promt.
console.log("Bem vindo ".concat(NOME));
