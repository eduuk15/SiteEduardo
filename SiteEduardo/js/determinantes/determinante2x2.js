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
    valores = []
    // Enquanto "i", a partir de 1, for menor que 5, "i" é incrementado
    for (let i = 1; i < 5; i++) {
        // Joga o valor encontrado pra dentro do array
        valores.push(document.getElementById(`${i}`).value);
    }
    // Retorna o array
    return valores;
}

/**
 * @author Eduardo Knopp
 * @since 25/05/2022
 * 
 * Método responsável por calcular o determinante da matriz 2x2
 */
function calculaDeterminante() {
    // Lê os valores do form
    valores = leValoresForm();

    // Criação do determinante, que é dado pelo produto dos elementos da diagonal principal 
    // menos o produto dos elementos da diagonal secundária
    let det = ((valores[0] * valores[3]) - (valores[1] * valores[2]));

    // Enquanto "i", a partir de 1, for menor que 5, "i" é incrementado
    for (let i = 1; i < 5; i++) {
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
 * Método responsável por transpor a matriz 2x2
 */
function transpoeMatriz() {
    // Lê os valores do form
    valores = leValoresForm();

    // Troca os elementos de valor
    document.getElementById("3").value = valores[1];
    document.getElementById("2").value = valores[2];
}

/**
 * @author Eduardo Knopp
 * @since 25/05/2022
 * 
 * Método responsável por mostrar a solução
 */
function mostraSolucao() {

    // Atribui a nova matriz criada no HTML os valores da matriz original (replica a matriz)
    document.getElementById("5").value = valores[0];
    document.getElementById("6").value = valores[1];
    document.getElementById("7").value = valores[2];
    document.getElementById("8").value = valores[3];

    // Mostra a solução, de forma mais sugestiva, em tela
    document.getElementById("solucao").innerHTML = `(${valores[0]} X ${valores[3]})
    - (${valores[1]} X ${valores[2]})`;
}
