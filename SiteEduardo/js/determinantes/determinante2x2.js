function leValoresForm() {
    valores = []
    for (let i = 1; i < 5; i++) {
        valores.push(document.getElementById(`${i}`).value);
    }
    return valores;
}

function calculaDeterminante() {
    valores = leValoresForm();

    let det = ((valores[0] * valores[3]) - (valores[1] * valores[2]));

    for (let i = 1; i < 5; i++) {
        if (document.getElementById(`${i}`).value === "") {
            det = "Todos os campos devem ser preenchidos."
        }
    }
    document.getElementById("determinante").innerHTML = "det = " + det;
}

function transpoeMatriz() {
    valores = leValoresForm();

    document.getElementById("3").value = valores[1];
    document.getElementById("2").value = valores[2];
}

function mostraSolucao() {

    document.getElementById("5").value = valores[0];
    document.getElementById("6").value = valores[1];
    document.getElementById("7").value = valores[2];
    document.getElementById("8").value = valores[3];

    document.getElementById("solucao").innerHTML = `(${valores[0]} X ${valores[3]})
    - (${valores[1]} X ${valores[2]})`;
}
