const carta1 = {
    nome: "Eudora",
    imagem: "http://pm1.narvii.com/7975/41fdca9404d8af326450d349eb8730c3f6c0fadbr1-360-360v2_00.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 10,
    },
};
const carta2 = {
    nome: "Zilong",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-8Pqyhs6LKK1yuOd9LGqPn2qJqXr6wXPEA&usqp=CAU",
    atributos: {
        ataque: 10,
        defesa: 8,
        magia: 1,
    },
};

const carta3 = {
    nome: "Nana",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_52Vswxn39WRyPWc8nC3fB0vvGIFIo65lg&usqp=CAU",
    atributos: {
        ataque: 8,
        defesa: 5,
        magia: 8,
    },
};

const carta4 = {
    nome: "Chou",
    imagem: "https://1.bp.blogspot.com/-60TDQdR0IQA/Xp8yV8GTdoI/AAAAAAAAANM/B3o7bL8NoqgGXSq7q4IVLApehPqI3n6VACLcBGAsYHQ/s1600/kisah-chou-hero-mobile-legends.png",
    atributos: {
        ataque: 8,
        defesa: 9,
        magia: 2,
    },
};

const cartas = [carta1, carta2, carta3, carta4];
let cartaMaquina;
let cartaJogador;

function sortearCarta() {
    cartaJogador = null;
    cartaMaquina = null;
    let numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    let numeroCartaJogador = parseInt(Math.random() * cartas.length);
    while (numeroCartaJogador === numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length);
    }

    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCarta("jogador");
    exibirCarta("maquina");
}

function obtemAtributosSelecionado() {
    let arraySelecionados = [];

    let radioAtributosJogador = document.getElementsByName("atributo-jogador");

    for (let i = 0; i < radioAtributosJogador.length; i++) {
        if (radioAtributosJogador[i].checked == true) {
            arraySelecionados.push(radioAtributosJogador[i].value);
        }
    }

    let radioAtributosMaquina = document.getElementsByName("atributo-maquina");

    for (let i = 0; i < radioAtributosMaquina.length; i++) {
        if (radioAtributosMaquina[i].checked == true) {
            arraySelecionados.push(radioAtributosMaquina[i].value);
        }
    }

    return arraySelecionados;
}

function jogar() {
    let atributoSelecionado = obtemAtributosSelecionado();
    console.log(atributoSelecionado);
    let divResultado = document.getElementById("resultado");
    divResultado.classList.add("final");

    if (atributoSelecionado[0] > atributoSelecionado[1]) {
        divResultado.innerHTML = "<p class'resultado-final'>Você venceu!!</p>";
    } else if (atributoSelecionado[0] < atributoSelecionado[1]) {
        divResultado.innerHTML = "<p class='resultado-final'>Você perdeu :(</p>";
    } else {
        divResultado.innerHTML = "<p class='resultado-final'>Empatou</p>";
    }

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
}

function exibirCarta(nome) {
    const carta = nome === "jogador" ? cartaJogador : cartaMaquina;
    let divCarta = document.getElementById(`carta-${nome}`);
    divCarta.style.backgroundImage = `url(${carta.imagem})`;
    let moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: 100%; height: 100%; position: absolute; top: 0; left: 0;">';

    let tagHTML = "<div class='opcoes carta-status'>";

    let opcoesTexto = "";
    for (let atributo in carta.atributos) {
        opcoesTexto += `<label>
        <input type='radio'
        name='atributo-${nome}'
        value='${carta.atributos[atributo]}' />
            ${atributo} ${carta.atributos[atributo]}
        </label><br>`;
    }
    let nomeCarta = `<p class="carta-subtitle">${carta.nome}</p>`;

    divCarta.innerHTML = moldura + nomeCarta + tagHTML + opcoesTexto + "</div>";
}
