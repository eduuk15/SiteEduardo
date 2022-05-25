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
    for (let i = 0; i < alfabeto.length; i++) {
        // Se o lado esquerdo da equação possuir qualquer letra do alfabeto...
        if (ladoEsquerdo.includes(alfabeto[i])) {
            // [...] a incógnita recebe a letra encontrada
            incognita = alfabeto[i];
        }
    }
    // Transforma o ladoEsquerdo (string) num (array), quando separado por um espaço em branco - OBS: DEVERÁ SER ALTERADO NO FUTURO
    let elementosLadoEsquerdo = ladoEsquerdo.split(" ");
    // Criação da soma dos elementos que compõe o array
    let somaElementosLadoEsquerdo = 0;
    // Enquanto "i" for menor que o tamanho do array "elementosLadoEsquerdo", "i" é incrementado
    for (let i = 0; i < elementosLadoEsquerdo.length; i++) {
        // Se um elemento for um dos sinais negativos...
        if (elementosLadoEsquerdo[i] === sinais[1] || elementosLadoEsquerdo[i] === sinais[2]) {
            // [...] e se o elemento seguinte for numérico...
            if (isNaN(elementosLadoEsquerdo[i + 1]) === false) {
                // [...] tal elemento é multiplicado por -1, ou seja, seu sinal é trocado
                elementosLadoEsquerdo[i + 1] *= -1;
            }
            // [...] e se o elemento seguinte incluir a incógnita, não sendo a própria incógnita...
            if (elementosLadoEsquerdo[i + 1].toString().includes(`${incognita}`) && elementosLadoEsquerdo[i + 1] !== incognita) {
                // [...] o valor numérico de tal elemento é multiplicado por -1, ou seja, seu sinal é trocado, além de ser concatenado com a incógnita
                elementosLadoEsquerdo[i + 1] = (-1 * parseFloat(elementosLadoEsquerdo[i + 1])) + incognita;
            }
            // [...] e se o elemento seguinte for a própria incógnita...
            if (elementosLadoEsquerdo[i + 1] === incognita) {
                // [...] tal elemento transforma-se em -1 concatenado com a incógnita
                elementosLadoEsquerdo[i + 1] = (-1 + incognita);
            }
        }

        // Se existir algum elemento numérico...
        if (isNaN(elementosLadoEsquerdo[i]) === false) {
            // [...] soma-se todos os valores numéricos encontrados
            somaElementosLadoEsquerdo += parseFloat(elementosLadoEsquerdo[i]);
        }
    }

    // Criação do lado direito da equação
    let ladoDireito = ladosIgualdade[1];
    // Enquanto "i" for menor que o tamanho do alfabeto, entre maiúsculas e minúsculas, "i" é incrementado
    for (let i = 0; i < alfabeto.length; i++) {
        // Se o lado direito da equação possuir qualquer letra do alfabeto...
        if (ladoDireito.includes(alfabeto[i])) {
            // [...] a incógnita recebe a letra encontrada
            incognita = alfabeto[i];
        }
    }
    // Transforma o ladoDireito (string) num (array), quando separado por um espaço em branco - OBS: DEVERÁ SER ALTERADO NO FUTURO
    let elementosLadoDireito = ladoDireito.split(" ");
    // Criação da soma dos elementos que compõe o array
    let somaElementosLadoDireito = 0;
    // Enquanto "i" for menor que o tamanho do array "elementosLadoDireito", "i" é incrementado
    for (let i = 0; i < elementosLadoDireito.length; i++) {
        // Se um elemento for um dos sinais negativos...
        if (elementosLadoDireito[i] === sinais[1] || elementosLadoDireito[i] === sinais[2]) {
             // [...] e se o elemento seguinte for numérico...
            if (isNaN(elementosLadoDireito[i + 1]) === false) {
                 // [...] tal elemento é multiplicado por -1, ou seja, seu sinal é trocado
                elementosLadoDireito[i + 1] *= -1;
            }
            // [...] e se o elemento seguinte incluir a incógnita, não sendo a própria incógnita...
            if (elementosLadoDireito[i + 1].toString().includes(`${incognita}`) && elementosLadoDireito[i + 1] !== incognita) {
                 // [...] o valor numérico de tal elemento é multiplicado por -1, ou seja, seu sinal é trocado, além de ser concatenado com a incógnita
                elementosLadoDireito[i + 1] = (-1 * parseFloat(elementosLadoDireito[i + 1])) + incognita;
            }
            // [...] e se o elemento seguinte for a própria incógnita...
            if (elementosLadoDireito[i + 1] === incognita) {
                 // [...] tal elemento transforma-se em -1 concatenado com a incógnita
                elementosLadoDireito[i + 1] = (-1 + incognita);
            }
        }

        // Se existir algum elemento numérico...
        if (isNaN(elementosLadoDireito[i]) === false) {
            // [...] soma-se todos os valores numéricos encontrados
            somaElementosLadoDireito += parseFloat(elementosLadoDireito[i]);
        }
    }

    // Criação da soma dos coeficientes do lado esquerdo
    let somaCoeficientesEsquerdo = 0;
    // Enquanto "i" for menor que o tamanho do array "elementosLadoEsquerdo", "i" é incrementado
    for (let i = 0; i < elementosLadoEsquerdo.length; i++) {
        // Se o elemento incluir a incógnita...
        if (elementosLadoEsquerdo[i].toString().includes(`${incognita}`)) {
            // [...] e se o elemento for a própria incógnita...
            if (elementosLadoEsquerdo[i] === incognita) {
                // [...] tal elemento transforma-se em 1 concatenado com a incógnita
                elementosLadoEsquerdo[i] = 1 + incognita;
            }
            // [...] Soma-se os valores numéricos encontrados nos elementos que possuírem incógnita
            somaCoeficientesEsquerdo += parseFloat(elementosLadoEsquerdo[i]);
        }
    }

    // Criação da soma dos coeficientes do lado direito
    let somaCoeficientesDireito = 0;
    // Enquanto "i" for menor que o tamanho do array "elementosLadoDireito", "i" é incrementado
    for (let i = 0; i < elementosLadoDireito.length; i++) {
        // Se o elemento incluir a incógnita...
        if (elementosLadoDireito[i].toString().includes(`${incognita}`)) {
            // [...] e se o elemento for a própria incógnita...
            if (elementosLadoDireito[i] === incognita) {
                // [...] tal elemento transforma-se em 1 concatenado com a incógnita
                elementosLadoDireito[i] = 1 + incognita;
            }
            // [...] Soma-se os valores numéricos encontrados nos elementos que possuírem a incógnita
            somaCoeficientesDireito += parseFloat(elementosLadoDireito[i]);
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
    document.getElementById("solucao").innerHTML = `Solução: x = (${somaElementosLadoDireito} - ${somaElementosLadoEsquerdo}) / ${coeficiente}`

    // Consoles.log
    console.log('A equação é: ' + equacao);
    // console.log(ladosIgualdade);
    // console.log(ladoEsquerdo);
    console.log('Os elementos do lado esquerdo são: ' + elementosLadoEsquerdo);
    // console.log(ladoDireito);
    console.log('Os elementos do lado direito são: ' + elementosLadoDireito);
    console.log('A soma dos elementos do lado direito é: ' + somaElementosLadoDireito);
    console.log('A soma dos elemetnos do lado esquerdo é: ' + somaElementosLadoEsquerdo);
    console.log('O coeficiente é: ' + coeficiente);
    // console.log(resultado);
    // console.log(incognita);
}
