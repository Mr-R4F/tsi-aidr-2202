import * as rs from 'readline-sync'; //sempre que necessário

const NOME: string = rs.question('Digite seu nome: '); //Como se fosse o promt.
console.log(`Bem vindo ${NOME}`);