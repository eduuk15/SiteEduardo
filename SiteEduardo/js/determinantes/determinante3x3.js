/**
 * @author Eduardo Knopp
 * @since 25/05/2022
 * 
 * Método responsável por ler os valores passados no form
 * 
 * @returns [array]
 */
function leValoresForm() {
    // Criação do array vazio "valores"
    valores = [];
     // Enquanto "i", a partir de 1, for menor que 5, "i" é incrementado
    for (let i = 1; i < 10; i++) {
         // Joga os valores encontrados pra dentro do array
        valores.push(document.getElementById(`${i}`).value);
    }
    // Retorna o array
    return valores;
}

/**
 * @author Eduardo Knopp
 * @since 25/05/2022
 * 
 * Método responsável por calcular o determinante da matriz 3x3
 */
function calculaDeterminante() {
    // Lê os valores do form
    valores = leValoresForm();

    // Criação do determinante, que é dado pela Regra de Sarrus
    let det = ((valores[0] * valores[4] * valores[8]) + (valores[1] * valores[5] * valores[6]) + (valores[2] * valores[3] * valores[7]))
    - ((valores[1] * valores[3] * valores[8]) + (valores[0] * valores[5] * valores[7]) + (valores[2] * valores[4] * valores[6]));

    // Enquanto "i", a partir de 1, for menor que 10, "i" é incrementado
    for (let i = 1; i < 10; i++) {
        // Se quaisquer elemento tiver um valor vazio...
        if (document.getElementById(`${i}`).value === "") {
             // [...] um erro aparece em tela
            det = "Todos os campos devem ser preenchidos."
        }
    }
    // Mostra o determinante em tela
    document.getElementById("determinante").innerHTML = "det = " + det;
}

/**
 * @author Eduardo Knopp
 * @since 25/05/2022
 * 
 * Método responsável por transpor a matriz 3x3
 */
function transpoeMatriz() {
     // Lê os valores do form
    valores = leValoresForm();

     // Troca os elementos de valor
    document.getElementById("2").value = valores[3];
    document.getElementById("3").value = valores[6];
    document.getElementById("4").value = valores[1];
    document.getElementById("6").value = valores[7];
    document.getElementById("7").value = valores[2];
    document.getElementById("8").value = valores[5];
}

/**
 * @author Eduardo Knopp
 * @since 25/05/2022
 * 
 * Método responsável por mostrar a solução
 */
function mostraSolucao() {

    // Atribui a nova matriz criada no HTML os valores da matriz original (replica a matriz)
    document.getElementById("10").value = valores[0];
    document.getElementById("11").value = valores[1];
    document.getElementById("12").value = valores[2];
    document.getElementById("13").value = valores[0]; 
    document.getElementById("14").value = valores[1]; 
    document.getElementById("15").value = valores[3];
    document.getElementById("16").value = valores[4];
    document.getElementById("17").value = valores[5];
    document.getElementById("18").value = valores[3]; 
    document.getElementById("19").value = valores[4]; 
    document.getElementById("20").value = valores[6];
    document.getElementById("21").value = valores[7];
    document.getElementById("22").value = valores[8];
    document.getElementById("23").value = valores[6]; 
    document.getElementById("24").value = valores[7]; 

    // Mostra a solução, de forma mais sugestiva, em tela
    document.getElementById("solucao").innerHTML = `[{${valores[0]} X ${valores[4]} X ${valores[8]}} + {${valores[1]} X ${valores[5]} X ${valores[6]}} + {${valores[2]} X ${valores[3]} X ${valores[7]}}]
    - [{${valores[1]} X ${valores[3]} X ${valores[8]}} + {${valores[0]} X ${valores[5]} X ${valores[7]}} + {${valores[2]} X ${valores[4]} X ${valores[6]}}]`;
}
