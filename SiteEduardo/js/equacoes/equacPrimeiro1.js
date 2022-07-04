/**
 * CONSTANTES
 * LADO ESQUERDO E LADO DIREITO
 * SINAIS
 * ALFABETO
 */

const separadores = ['+', '-', '/', '*'];
const positivo = '+';
const negativo = '-';
const alfabeto = [
    "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J",
    "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T",
    "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"
];

const equacao = document.getElementById("equacao").value;
const ladoEquacao = equacao.split(' = ');

let ladoEsquerdo = ladoEquacao[0];
let ladoDireito = ladoEquacao[1];

let elementosLadoEsquerdo = ladoEsquerdo.split(' ');

let incognita = '';
let resultadoLadoEsquerdo = '';
let resultadoLadoDireito = '';
 

function trataIncognita() {
    for (let i = 0; i < alfabeto.length; i++) {
        
        if (ladoEsquerdo.includes(alfabeto[i])) {
            incognita = alfabeto[i];
        }
        
        if (ladoDireito.includes(alfabeto[i])) {
            incognita = alfabeto[i];
        }
    }
}

let somaCoeficientesEsquerdo = 0;
function trataCoeficienteEsquerdo() {
    for (i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i].toString().includes(incognita)) {
            
            if (elementosLadoEsquerdo[i] === incognita) {
                elementosLadoEsquerdo[i] = 1 + incognita;
            }

            if (elementosLadoEsquerdo[i] === '-' + incognita) {
                elementosLadoEsquerdo[i] = -1 + incognita;        
            }

        somaCoeficientesEsquerdo += parseFloat(elementosLadoEsquerdo[i]);
        }
    }
ladoEsquerdo.replace(``)
}

let somaCoeficientesDireito = 0;
function trataCoeficienteDireito() {
    for (i = 0; i < elementosLadoDireito.length; i++) {
        if (elementosLadoDireito[i].toString().includes(incognita)) {
            
            if (elementosLadoDireito[i] === incognita) {
                elementosLadoDireito[i] = 1 + incognita;
            }

            if (elementosLadoDireito[i] === '-' + incognita) {
                elementosLadoDireito[i] = -1 + incognita;        
            }

        somaCoeficientesDireito += parseFloat(elementosLadoDireito[i]);
        }
    }
}