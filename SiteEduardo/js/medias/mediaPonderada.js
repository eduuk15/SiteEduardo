function insereValor() {
  let form = document.querySelector("form");
  const randomID = `${Date.now().toString(36)}${Math.random().toString(36).substr(2)}`;
  form.insertAdjacentHTML('beforeend',
  `<div class="div" id="${randomID}">
            <input class="valor" type="number" placeholder="Insira o valor aqui">
            <input class="peso" type="number" placeholder="Insira o peso aqui">
            <input type="button" class="special_remove" value="Remover" onclick="removeValor('${randomID}')">
          </div>`);
}

function removeValor(idToRemove) {
  const el = document.getElementById(idToRemove)
  el.parentNode.removeChild(el)
}

function calculaMedia() {
    let valores = document.querySelectorAll(".valor");
    let valor = [].map.call(valores, function (input) {
      return parseFloat(input.value);
    });

    let pesos = document.querySelectorAll(".peso");
    let peso = [].map.call(pesos, function (input) {
      return parseFloat(input.value);
    });

    let somaValores = 0
    let somaPesos = 0;
    for (let i = 0; i < valor.length; i++) {
        somaValores += valor[i] * peso[i];
        somaPesos += peso[i]
    }

    let resultado = somaValores / somaPesos;

    if (!resultado) {
      resultado = 'Não foi possível realizar o cálculo...';
    }

    document.getElementById("resultado").innerHTML = "Média Final = " + resultado;
  }
