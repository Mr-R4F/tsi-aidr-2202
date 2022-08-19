import * as rs from 'readline-sync'; //sempre que necessário

const Minutos: number = rs.question('Quantos minutos você joga por dia ');
const Dias: number = rs.question('E quantos dias você joga por semana? ');
const QtdHoras: number = Minutos * Dias * 52 / 60;

console.log('Você jogou em um ano: ' + QtdHoras);
console.log(` Você jogou em um ano: ${QtdHoras}`);
