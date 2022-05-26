/**
 * @author Eduardo Knopp
 * @since 26/05/2022
 * 
 * Método responsável pela inserção de novos inputs que podem receber novos valores 
 */
function insereValor() {
  // Criação do form proveniente do HTML
    let form = document.querySelector("form");
    // Criação de um ID aleatório 
    const randomID = `${Date.now().toString(36)}${Math.random().toString(36).substr(2)}`;
    // Insere, antes do final do "form", um novo input, assim como um botão "Remover"
    form.insertAdjacentHTML('beforeend',
    `<div class="div" id="${randomID}">
              <input class="valor" type="text" placeholder="Insira o valor aqui">
              <input type="button" class="special_remove" value="Remover" onclick="removeValor('${randomID}')">
            </div>`);
}

/**
 * @author Eduardo Knopp
 * @since 26/05/2022
 * 
 * Método responsável por remover um input adicionado pelo método "insereValor"
 * 
 * @param {*} idToRemove 
 */
function removeValor(idToRemove) {
  // Criação de "el", como elemento a ser removido do HTML
  const el = document.getElementById(idToRemove)
  // Remove "el" do HTML
  el.parentNode.removeChild(el)
}

/**
 * @author Eduardo Knopp
 * @since 26/05/2022
 * 
 * Método responsável por calcular a média geométrica
 */
function calculaMedia() {
  // Criação de "valor", números recebidos dos 
  let valor = document.querySelectorAll(".valor");
  let valores = [].map.call(valor, function (input) {
    return parseFloat(input.value);
  });
  let totalValores = 0
  let produtoValores = 1;
  for (let i = 0; i < valores.length; i++) {
      totalValores = valores.length;
      produtoValores *= valores[i];
  }
  let resultado = (produtoValores) ** (1/totalValores);
  console.log(resultado);
  if (!resultado) {
    resultado = 'Não foi possível realizar o cálculo...';
  }
  document.getElementById("resultado").innerHTML = "Média Geométrica = " + resultado;
}
