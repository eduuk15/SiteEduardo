function insereValor() {
  let form = document.querySelector("form");
  const randomID = `${Date.now().toString(36)}${Math.random().toString(36).substr(2)}`;
  form.insertAdjacentHTML('beforeend', '<div class="div" id="' + randomID + '"><input class="valor" type="number" placeholder="Insira o valor aqui"><input class="peso" type="number" placeholder="Insira o peso aqui"</div><input type="button" class="special_remove" value="X" onclick="removeValor(\'' + randomID +'\')"></input>');
}

function removeValor(idToRemove) {
  const el = document.getElementById(idToRemove)
  el.parentNode.removeChild(el)
}

function calculaMedia() {
    let valor = document.querySelectorAll(".valor");
    let valores = [].map.call(valor, function (input) {
      return parseFloat(input.value);
    });

    let peso = document.querySelectorAll(".peso");
    let pesos = [].map.call(peso, function (input) {
      return parseFloat(input.value);
    });

    let somaValores = 0
    let somaPesos = 0;
    for (let i = 0; i < valores.length; i++) {
        somaValores += valores[i] * pesos[i];
        somaPesos += pesos[i]
    }

    let resultado = somaValores / somaPesos;

    if (!resultado) {
      resultado = 'Não foi possível realizar o cálculo...';
    }

    document.getElementById("resultado").innerHTML = "Média Final = " + resultado;
  }
