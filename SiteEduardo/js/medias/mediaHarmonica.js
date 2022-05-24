function insereValor() {
  let form = document.querySelector("form");
  const randomID = `${Date.now().toString(36)}${Math.random().toString(36).substr(2)}`;
  form.insertAdjacentHTML('beforeend',
  `<div class="div" id="${randomID}">
            <input class="valor" type="text" placeholder="Insira o valor aqui">
            <input type="button" class="special_remove" value="Remover" onclick="removeValor('${randomID}')">
          </div>`);
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

    let totalValores = 0
    let somaInversoValores = 0;
    for (let i = 0; i < valores.length; i++) {
        totalValores = valores.length;
        somaInversoValores += 1/valores[i];
    }

    let resultado = (totalValores) / (somaInversoValores);

    if (!resultado) {
      resultado = 'Não foi possível realizar o cálculo...';
    }

    document.getElementById("resultado").innerHTML = "Média Harmônica = " + resultado;
  }
