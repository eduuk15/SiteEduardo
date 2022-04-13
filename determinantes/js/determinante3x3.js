function calculaDeterminante() {
    var num1 = document.getElementById("1").value;
    var num2 = document.getElementById("2").value;
    var num3 = document.getElementById("3").value;
    var num4 = document.getElementById("4").value;
    var num5 = document.getElementById("5").value;
    var num6 = document.getElementById("6").value;
    var num7 = document.getElementById("7").value;
    var num8 = document.getElementById("8").value;
    var num9 = document.getElementById("9").value;

    var det = ((num1 * num5 * num9) + (num2 * num6 * num7) + (num3 * num4 * num8)) - ((num2 * num4 * num9) + (num1 * num6 * num8) + (num3 * num5 * num7));
    document.getElementById("determinante").innerHTML = "det = " + det;
}