function calculaDeterminante() {

    let num1 = document.getElementById("1").value;
    let num2 = document.getElementById("2").value;
    let num3 = document.getElementById("3").value;
    let num4 = document.getElementById("4").value;

    let det = ((num1 * num4) - (num2 * num3));
    document.getElementById("determinante").innerHTML = "det = " + det;
}

function transpoeMatriz() {
    let num2 = document.getElementById("2").value;
    let num3 = document.getElementById("3").value;

    document.getElementById("3").value = num2;
    document.getElementById("2").value = num3
}
