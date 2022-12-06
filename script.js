//picachu
var picachu = {nome: "picachu" ,
ataque1: "choque do trovão" , dano1: 20 ,
ataque2: "esfera eletrica", dano2: 10 ,
ataque3: "investida trovão", dano3: 30,
ataque4: "ataque rapido", dano4: 15,
imagem: "./assets/picachu.jpg"};
//charizard
var charizard = {nome: "charizard" ,
ataque1: "Garra do Dragão" , dano1: 20 ,
ataque2: "Explosão de Fogo", dano2: 10 ,
ataque3: "Onda de Calor", dano3: 30,
ataque4: "Ataque de Asa", dano4: 15,
imagem: "./assets/Charizard.gif"};
//gengar
var gengar = {nome: "gengar" ,
ataque1: "Portão do Mundo Inferior" , dano1: 20 ,
ataque2: "Levitação", dano2: 10 ,
ataque3: "Sacudida Vital", dano3: 30,
ataque4: "Boneco Postiço", dano4: 15,
imagem: "./assets/gengar.gif"};
//mimikyu
var mimikyu = {nome: "mimikyu" ,
ataque1: "Pior Presente" , dano1: 20 ,
ataque2: "Boneco Postiço", dano2: 10 ,
ataque3: "Números Tenebrosos", dano3: 30,
ataque4: "Reflexo", dano4: 15,
imagem: "./assets/mimikyu.gif"};
//garchomp
var garchomp = {nome: "garchomp" ,
ataque1: "Investida do Dragão" , dano1: 20 ,
ataque2: "Garra de Dragão", dano2: 10 ,
ataque3: "Golpe Sônico", dano3: 30,
ataque4: "Lâmina do Dragão", dano4: 15,
imagem: "./assets/garchomp.gif"};

var nm_my_pokemon = document.getElementById('nm_my_pokemon');
var barra1 = document.getElementById('barra1');
var barra2 = document.getElementById('barra2');
var ataque1 = document.getElementById('ataque1');
var ataque2 = document.getElementById('ataque2');
var ataque3 = document.getElementById('ataque3');
var ataque4 = document.getElementById('ataque4');
var center_pokemon = document.getElementById('center_pokemon');
const hp = 100;

function selecionadoPicachu() {
    escolherPokemonFecha();
    var pokemonSelecionado = picachu;
    carregarPokemon(pokemonSelecionado);
}

function selecionadoCharizard() {
    escolherPokemonFecha();
    var pokemonSelecionado = charizard;
    carregarPokemon(pokemonSelecionado);
}

function selecionadoGengar() {
    escolherPokemonFecha();
    var pokemonSelecionado = gengar;
    carregarPokemon(pokemonSelecionado);
}

function selecionadoMimikyu() {
    escolherPokemonFecha();
    var pokemonSelecionado = mimikyu;
    carregarPokemon(pokemonSelecionado);
}

function selecionadoGarchomp() {
    escolherPokemonFecha();
    var pokemonSelecionado = garchomp;
    carregarPokemon(pokemonSelecionado);
}

function carregarPokemon(pokemonSelecionado){
    nm_my_pokemon.innerHTML = pokemonSelecionado.nome;
    document.getElementById('my_pokemonIMG').src = pokemonSelecionado.imagem;
    ataque1.innerHTML = pokemonSelecionado.ataque1;
    ataque2.innerHTML = pokemonSelecionado.ataque2;
    ataque3.innerHTML = pokemonSelecionado.ataque3;
    ataque4.innerHTML = pokemonSelecionado.ataque4;
}

function escolherPokemonFecha() {
    center_pokemon.style.display = "none";
    canvas.style.display = "block";
}

//intro
window.addEventListener('load', function(){
    setTimeout(function(){
        center_pokemon.style.display = "block";
        var Pokemon_The_Game = document.getElementById('Pokemon_The_Game');
        Pokemon_The_Game.style.display = "none";
    }, 3000)
})