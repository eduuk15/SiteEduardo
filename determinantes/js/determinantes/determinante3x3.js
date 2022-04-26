function calculaDeterminante() {
    let num1 = document.getElementById("1").value;
    let num2 = document.getElementById("2").value;
    let num3 = document.getElementById("3").value;
    let num4 = document.getElementById("4").value;
    let num5 = document.getElementById("5").value;
    let num6 = document.getElementById("6").value;
    let num7 = document.getElementById("7").value;
    let num8 = document.getElementById("8").value;
    let num9 = document.getElementById("9").value;

    let det = ((num1 * num5 * num9) + (num2 * num6 * num7) + (num3 * num4 * num8)) - ((num2 * num4 * num9) + (num1 * num6 * num8) + (num3 * num5 * num7));
    document.getElementById("determinante").innerHTML = "det = " + det;
}
