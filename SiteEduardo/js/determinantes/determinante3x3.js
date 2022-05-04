function leValoresForm() {
    valores = []
    for (let i = 1; i < 10; i++) {
        valores.push(document.getElementById(`${i}`).value);
    }
    return valores;
}

function calculaDeterminante() {
    valores = leValoresForm();

    let resultado = ((valores[0] * valores[4] * valores[8]) + (valores[1] * valores[5] * valores[6]) + (valores[2] * valores[3] * valores[7])) 
    - ((valores[1] * valores[3] * valores[8]) + (valores[0] * valores[5] * valores[7]) + (valores[2] * valores[4] * valores[6]));

    for (let i = 1; i < 10; i++) {
        if (document.getElementById(`${i}`).value === "") {
            resultado = "Todos os campos devem ser preenchidos."
        }
    }

    document.getElementById("determinante").innerHTML = "det = " + resultado;
}

function transpoeMatriz() {
    valores = leValoresForm();

    document.getElementById("2").value = valores[3];
    document.getElementById("3").value = valores[6];
    document.getElementById("4").value = valores[1];
    document.getElementById("6").value = valores[7];
    document.getElementById("7").value = valores[2];
    document.getElementById("8").value = valores[5];
}
