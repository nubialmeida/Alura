const formatosValidos = ["jpg", "jpeg", "png"];

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (formatosValidos.some((formato) => filmeFavorito.endsWith(formato))) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
    console.log(filme);
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
