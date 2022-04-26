function insereNota() {
    var form = document.querySelector("form");
    form.insertAdjacentHTML('beforeend', '<div><input class="nota" type="text" placeholder="Insira sua nota aqui"><input class="peso" type="text" placeholder="Insira o peso da prova"></div>');
}

function calculaMedia() {
    // var notas = document.querySelector(".nota").value;
    // console.log(notas);

    let nota = document.querySelectorAll(".nota");
    let notas = [].map.call(nota, function (input) {
      return parseFloat(input.value);
    });
    console.log(notas);

    let peso = document.querySelectorAll(".peso");
    let pesos = [].map.call(peso, function (input) {
      return parseFloat(input.value);
    });
    console.log(pesos);

    // let resultado = notas[0] * pesos[0];
    // console.log(resultado);

    let somaNotas = 0
    let somaPesos = 0;
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i] * pesos[i];
        somaPesos += pesos[i]
    }

    let resultado = somaNotas / somaPesos;

    document.getElementById("resultado").innerHTML = "Média Final = " + resultado;

    console.log(somaPesos);
    console.log(somaNotas);
  }
