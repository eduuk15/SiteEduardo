function insereNota() {
    let form = document.querySelector("form");
    form.insertAdjacentHTML('beforeend', '<div><input class="nota" type="text" placeholder="Insira sua nota aqui"><input class="peso" type="text" placeholder="Insira o peso da prova"></div>');
}

function calculaMedia() {

    let nota = document.querySelectorAll(".nota");
    let notas = [].map.call(nota, function (input) {
      return parseFloat(input.value);
    });

    let peso = document.querySelectorAll(".peso");
    let pesos = [].map.call(peso, function (input) {
      return parseFloat(input.value);
    });

    let somaNotas = 0
    let somaPesos = 0;
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i] * pesos[i];
        somaPesos += pesos[i]
    }

    let resultado = somaNotas / somaPesos;

    if (!resultado) {
      resultado = 'Não foi possível realizar o cálculo...';
    }

    document.getElementById("resultado").innerHTML = "Média Final = " + resultado;
  }
