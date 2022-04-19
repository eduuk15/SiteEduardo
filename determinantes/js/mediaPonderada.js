function calculaMedia() {
    var notas = document.getElementsByClassName("nota");
    console.log(notas);

}

function insereNota() {
    var form = document.querySelector("form");
    form.insertAdjacentHTML('beforeend', '<div><input id="nota" type="text" placeholder="Insira sua nota aqui"><input id="peso" type="text" placeholder="Insira o peso da prova"></div>');
}
