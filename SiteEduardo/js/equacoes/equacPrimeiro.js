/**
 * @author Eduardo Knopp
 * @since 24/05/2022
 *
 * Método responsável pelo cálculo da equação, tratamento dos elementos (coeficiente, lados da equação...), inserção do resultado em tela, etc.
 */
function calculaEquacao() {
    // Criação dos sinais
    let sinais = ["+", "-", "–"];
    // Recebe a equação passada no input do navegador
    let equacao = document.getElementById("equacao").value;
    // Separa a equação em duas partes, usando o sinal de "=" como separador
    let ladosIgualdade = equacao.split(" = ");
    // Criação do alfabeto
    let alfabeto =  [
        "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J",
        "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T",
        "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
    // Criação da incógnita
    let incognita = "";

    // Criação do lado esquerdo da equação
    let ladoEsquerdo = ladosIgualdade[0];
    // Enquanto "i" for menor que o tamanho do alfabeto, entre maiúsculas e minúsculas, "i" é incrementado
    for (let a = 0; a < alfabeto.length; a++) {
        // Se o lado esquerdo da equação possuir qualquer letra do alfabeto...
        if (ladoEsquerdo.includes(alfabeto[a])) {
            // [...] a incógnita recebe a letra encontrada
            incognita = alfabeto[a];
        }
    }
    // Transforma o ladoEsquerdo (string) num (array), quando separado por um espaço em branco - OBS: DEVERÁ SER ALTERADO NO FUTURO
    let elementosLadoEsquerdo = ladoEsquerdo.split(" ");
    // Criação da soma dos elementos que compõe o array
    let somaElementosLadoEsquerdo = 0;

    let resultadosParentesesEsquerdo = [];
    let indexFechaParentesesEsquerdo = [];
    let indexAbreParentesesEsquerdo = [];

    // Enquanto "f" for menor que o tamanho do array "elementosLadoEsquerdo", "f" é incrementado
    for (let b = 0; b < elementosLadoEsquerdo.length; b++) {
        // Se um elemento incluir um abre parênteses ')'...
        if (elementosLadoEsquerdo[b].toString().includes('(')) {
            // [...] ele é retirado da strig
            elementosLadoEsquerdo[b] = elementosLadoEsquerdo[b].replace('(', '');
            indexAbreParentesesEsquerdo.push(elementosLadoEsquerdo.indexOf(elementosLadoEsquerdo[b]));
        }
        // Se um elemento incluir um feca parênteses '('...
        if (elementosLadoEsquerdo[b].toString().includes(')')) {
            // [...] ele é retirado da strig
            elementosLadoEsquerdo[b] = elementosLadoEsquerdo[b].replace(')', '');
            indexFechaParentesesEsquerdo.push(elementosLadoEsquerdo.indexOf(elementosLadoEsquerdo[b]));
        }
    }
    // Enquanto "j" for menor que o tamanho do array "elementosLadoEsquerdo", "j" é incrementado
    for (let c = 0; c < elementosLadoEsquerdo.length; c++) {
        // Se um elemento for um dos sinais negativos...
        if (elementosLadoEsquerdo[c] === sinais[1] || elementosLadoEsquerdo[c] === sinais[2]) {
            // [...] e se o elemento seguinte for numérico...
            if (isNaN(elementosLadoEsquerdo[c + 1]) === false) {
                // [...] tal elemento é multiplicado por -1, ou seja, seu sinal é trocado
                elementosLadoEsquerdo[c + 1] *= -1;
            }
            // [...] e se o elemento seguinte incluir a incógnita, não sendo a própria incógnita...
            if (elementosLadoEsquerdo[c + 1].toString().includes(`${incognita}`) && elementosLadoEsquerdo[c + 1] !== incognita) {
                // [...] o valor numérico de tal elemento é multiplicado por -1, ou seja, seu sinal é trocado, além de ser concatenado com a incógnita
                elementosLadoEsquerdo[c + 1] = (-1 * parseFloat(elementosLadoEsquerdo[c + 1])) + incognita;
            }
            // [...] e se o elemento seguinte for a própria incógnita...
            if (elementosLadoEsquerdo[c + 1] === incognita) {
                // [...] tal elemento transforma-se em -1 concatenado com a incógnita
                elementosLadoEsquerdo[c + 1] = (-1 + incognita);
            }
        }
    }

    let produtosDentroParentesesEsquerdo = [];
    for (let z = 0; z < elementosLadoEsquerdo.length; z++) {
        if (elementosLadoEsquerdo[z] === '.' && elementosLadoEsquerdo[z + 2] !== '.') {
            elementosLadoEsquerdo[z] = elementosLadoEsquerdo[z - 1] * elementosLadoEsquerdo[z + 1];
            elementosLadoEsquerdo[z - 1] = 0;
            elementosLadoEsquerdo[z + 1] = 0;
            // produtosDentroParentesesEsquerdo.push(parseFloat(elementosLadoEsquerdo[z - 1]) * parseFloat(elementosLadoEsquerdo[z + 1]));
        }
        if (elementosLadoEsquerdo[z] === '.' && elementosLadoEsquerdo[z + 2] === '.' ) {
            elementosLadoEsquerdo[z] = elementosLadoEsquerdo[z - 1] * elementosLadoEsquerdo[z + 1];
            elementosLadoEsquerdo[z + 2] = elementosLadoEsquerdo[z + 1] * elementosLadoEsquerdo[z + 3];
            elementosLadoEsquerdo[z - 1] = 0;
            elementosLadoEsquerdo[z + 1] = 0;
            elementosLadoEsquerdo[z + 3] = 0;
        }
    }

    console.log(elementosLadoEsquerdo);

    if (indexFechaParentesesEsquerdo.length >= 0) {
        // Enqaunto "a" for menor que o tamanho do array "indexFechaParenteses", "a" é incrementado
        for (let d = 0; d < indexFechaParentesesEsquerdo.length; d++) {
            // Para cada par de parênteses, adiciona o resultado das operações dentro do par para o array de resultados
            resultadosParentesesEsquerdo.push(parseFloat(elementosLadoEsquerdo[indexAbreParentesesEsquerdo[d]]) + parseFloat(elementosLadoEsquerdo[indexFechaParentesesEsquerdo[d]]));
        }
    }

    // Enquanto "i" for menor que o tamanho do array "elementosLadoEsquerdo", "i" é incrementado
    for (let e = 0; e < elementosLadoEsquerdo.length; e++) {
        // Se existir algum elemento numérico...
        if (isNaN(elementosLadoEsquerdo[e]) === false) {
            // [...] soma-se todos os valores numéricos encontrados
            somaElementosLadoEsquerdo += parseFloat(elementosLadoEsquerdo[e]);
        }
    }

    // Criação do lado direito da equação
    let ladoDireito = ladosIgualdade[1];
    // Enquanto "i" for menor que o tamanho do alfabeto, entre maiúsculas e minúsculas, "i" é incrementado
    for (let f = 0; f < alfabeto.length; f++) {
        // Se o lado direito da equação possuir qualquer letra do alfabeto...
        if (ladoDireito.includes(alfabeto[f])) {
            // [...] a incógnita recebe a letra encontrada
            incognita = alfabeto[f];
        }
    }
    // Transforma o ladoDireito (string) num (array), quando separado por um espaço em branco - OBS: DEVERÁ SER ALTERADO NO FUTURO
    let elementosLadoDireito = ladoDireito.split(" ");
    // Criação da soma dos elementos que compõe o array
    let somaElementosLadoDireito = 0;

    let resultadosParentesesDireito = [];
    let indexFechaParentesesDireito = [];
    let indexAbreParentesesDireito = [];



    // Enquanto "f" for menor que o tamanho do array "elementosLadoDireito", "f" é incrementado
    for (let g = 0; g < elementosLadoDireito.length; g++) {
        // Se um elemento incluir um abre parênteses ')'...
        if (elementosLadoDireito[g].toString().includes('(')) {
            // [...] ele é retirado da strig
            elementosLadoDireito[g] = elementosLadoDireito[g].replace('(', '');
            indexAbreParentesesDireito.push(elementosLadoDireito.indexOf(elementosLadoDireito[g]));
        }
        // Se um elemento incluir um feca parênteses '('...
        if (elementosLadoDireito[g].toString().includes(')')) {
            // [...] ele é retirado da strig
            elementosLadoDireito[g] = elementosLadoDireito[g].replace(')', '');
            indexFechaParentesesDireito.push(elementosLadoDireito.indexOf(elementosLadoDireito[g]));
        }
    }
    // Enquanto "j" for menor que o tamanho do array "elementosLadoDireito", "j" é incrementado
    for (let h = 0; h < elementosLadoDireito.length; h++) {
        // Se um elemento for um dos sinais negativos...
        if (elementosLadoDireito[h] === sinais[1] || elementosLadoDireito[h] === sinais[2]) {
            // [...] e se o elemento seguinte for numérico...
            if (isNaN(elementosLadoDireito[h + 1]) === false) {
                // [...] tal elemento é multiplicado por -1, ou seja, seu sinal é trocado
                elementosLadoDireito[h + 1] *= -1;
            }
            // [...] e se o elemento seguinte incluir a incógnita, não sendo a própria incógnita...
            if (elementosLadoDireito[h + 1].toString().includes(`${incognita}`) && elementosLadoDireito[h + 1] !== incognita) {
                // [...] o valor numérico de tal elemento é multiplicado por -1, ou seja, seu sinal é trocado, além de ser concatenado com a incógnita
                elementosLadoDireito[h + 1] = (-1 * parseFloat(elementosLadoDireito[h + 1])) + incognita;
            }
            // [...] e se o elemento seguinte for a própria incógnita...
            if (elementosLadoDireito[h + 1] === incognita) {
                // [...] tal elemento transforma-se em -1 concatenado com a incógnita
                elementosLadoDireito[h + 1] = (-1 + incognita);
            }
        }
    }

    if (indexFechaParentesesDireito.length >= 0) {
        // Enqaunto "a" for menor que o tamanho do array "indexFechaParenteses", "a" é incrementado
        for (let i = 0; i < indexFechaParentesesDireito.length; i++) {
            // Para cada par de parênteses, adiciona o resultado das operações dentro do par para o array de resultados
            resultadosParentesesDireito.push(parseFloat(elementosLadoDireito[indexAbreParentesesDireito[i]]) + parseFloat(elementosLadoDireito[indexFechaParentesesDireito[i]]));
        }
    }

    // Enquanto "i" for menor que o tamanho do array "elementosLadoDireito", "i" é incrementado
    for (let j = 0; j < elementosLadoDireito.length; j++) {
        // Se existir algum elemento numérico...
        if (isNaN(elementosLadoDireito[j]) === false) {
            // [...] soma-se todos os valores numéricos encontrados
            somaElementosLadoDireito += parseFloat(elementosLadoDireito[j]);
        }
    }

    // Criação da soma dos coeficientes do lado esquerdo
    let somaCoeficientesEsquerdo = 0;
    // Enquanto "i" for menor que o tamanho do array "elementosLadoEsquerdo", "i" é incrementado
    for (let k = 0; k < elementosLadoEsquerdo.length; k++) {
        // Se o elemento incluir a incógnita...
        if (elementosLadoEsquerdo[k].toString().includes(`${incognita}`)) {
            // [...] e se o elemento for a própria incógnita...
            if (elementosLadoEsquerdo[k] === incognita) {
                // [...] tal elemento transforma-se em 1 concatenado com a incógnita
                elementosLadoEsquerdo[k] = 1 + incognita;
            // [...] e se o elemento for a própria incógnita, porém negativa
            } else if (elementosLadoEsquerdo[k] === '-' + incognita) {
                // [...] tal elemento transforma-se em -1 concatenado com a incógnita
                elementosLadoEsquerdo[k] = -1 + incognita;
            }
            // [...] Soma-se os valores numéricos encontrados nos elementos que possuírem incógnita
            somaCoeficientesEsquerdo += parseFloat(elementosLadoEsquerdo[k]);
        }
    }

    // Criação da soma dos coeficientes do lado direito
    let somaCoeficientesDireito = 0;
    // Enquanto "i" for menor que o tamanho do array "elementosLadoDireito", "i" é incrementado
    for (let l = 0; l < elementosLadoDireito.length; l++) {
        // Se o elemento incluir a incógnita...
        if (elementosLadoDireito[l].toString().includes(`${incognita}`)) {
            // [...] e se o elemento for a própria incógnita...
            if (elementosLadoDireito[l] === incognita) {
                // [...] tal elemento transforma-se em 1 concatenado com a incógnita
                elementosLadoDireito[l] = 1 + incognita;
            }
            // [...] Soma-se os valores numéricos encontrados nos elementos que possuírem a incógnita
            somaCoeficientesDireito += parseFloat(elementosLadoDireito[l]);
        }
    }

    // Criação do coeficiente, que é dado pela diferença dos coeficientes do lado esquerdo pelos do lado direito
    let coeficiente = somaCoeficientesEsquerdo - somaCoeficientesDireito;
    // Criação do resultado, que é dado pela diferença da soma dos elemenentos do lado direito pela soma dos elementos do lado esquerdo, isso tudo dividido pelo coeficiente
    let resultado = (somaElementosLadoDireito - somaElementosLadoEsquerdo) / coeficiente;
    // Atribui no HTML a incógnita e o resultado
    document.getElementById("resultado").innerHTML = "Resultado: " + incognita + " = " + resultado;

    // Se a soma dos elementos do lado esquerdo resultar num número negativo...
    if (somaElementosLadoEsquerdo < 0) {
        // [...] o número é posto entre parênteses
        somaElementosLadoEsquerdo = `(${somaElementosLadoEsquerdo})`
    }
    // Atribui no HTML a solução, que é dada pela lógica aplicada ao resultado
    document.getElementById("solucao").innerHTML = `Solução: ${incognita} = {${somaElementosLadoDireito} - ${somaElementosLadoEsquerdo}} / ${coeficiente}`

    // Consoles.log
    console.log('A equação é: ' + equacao);
    console.log('Os elementos do lado esquerdo são: ' + elementosLadoEsquerdo);
    console.log('Os elementos do lado direito são: ' + elementosLadoDireito);
    console.log('A soma dos elementos do lado direito é: ' + somaElementosLadoDireito);
    console.log('A soma dos elementos do lado esquerdo é: ' + somaElementosLadoEsquerdo);
    console.log('O coeficiente é: ' + coeficiente);
}
