//picachu
var picachu = {nome: "picachu" ,
ataque1: "choque do trovão" , dano1: 40 ,
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
var nm_enemy_pokemon = document.getElementById('nm_enemy_pokemon');
var barra1 = document.getElementById('barra1');
var barra2 = document.getElementById('barra2');
var ataque1 = document.getElementById('ataque1');
var ataque2 = document.getElementById('ataque2');
var ataque3 = document.getElementById('ataque3');
var ataque4 = document.getElementById('ataque4');
var center_pokemon = document.getElementById('center_pokemon');
var fimJogo = document.getElementById('fimJogo');
var center_pokemonEnemy = document.getElementById('center_pokemonEnemy');

var pokemonSelecionado1;
var pokemonSelecionado2;
var permissaoAtaque = 0;

function selecionadoPicachu() {
    escolherPokemonFecha();
    pokemonSelecionado1 = picachu;
    carregarPokemon(pokemonSelecionado1);
}

function selecionadoCharizard() {
    escolherPokemonFecha();
    pokemonSelecionado1 = charizard;
    carregarPokemon(pokemonSelecionado1);
}

function selecionadoGengar() {
    escolherPokemonFecha();
    pokemonSelecionado1 = gengar;
    carregarPokemon(pokemonSelecionado1);
}

function selecionadoMimikyu() {
    escolherPokemonFecha();
    pokemonSelecionado1 = mimikyu;
    carregarPokemon(pokemonSelecionado1);
}

function selecionadoGarchomp() {
    escolherPokemonFecha();
    pokemonSelecionado1 = garchomp;
    carregarPokemon(pokemonSelecionado1);
}

function carregarPokemon(pokemonSelecionado1){
    nm_my_pokemon.innerHTML = pokemonSelecionado1.nome;
    document.getElementById('my_pokemonIMG').src = pokemonSelecionado1.imagem;
    ataque1.innerHTML = pokemonSelecionado1.ataque1;
    ataque2.innerHTML = pokemonSelecionado1.ataque2;
    ataque3.innerHTML = pokemonSelecionado1.ataque3;
    ataque4.innerHTML = pokemonSelecionado1.ataque4;
}

function escolherPokemonFecha() {
    center_pokemon.style.display = "none";
    canvas.style.display = "block";
    barra2.style.width = "100px";
    barra1.style.width = "100px";
}

//intro
window.addEventListener('load', function(){
    setTimeout(function(){
        center_pokemon.style.display = "block";
        var Pokemon_The_Game = document.getElementById('Pokemon_The_Game');
        Pokemon_The_Game.style.display = "none";
    }, 3000)
})

function atacar1(){
    if (permissaoAtaque == 0)
    {
        var hp = barra2.clientWidth;
        hp = hp - pokemonSelecionado1.dano1;
        if (hp < pokemonSelecionado1.dano1)
        {
            barra2.style.width = "0px";
        }
        barra2.style.width = hp + "px";
        inimigoMorto();
        receberDano();
    }
}

function atacar2(){
    if (permissaoAtaque == 0)
    {
        var hp = barra2.clientWidth;
        hp = hp - pokemonSelecionado1.dano2;
        if (hp < pokemonSelecionado1.dano2)
        {
            barra2.style.width = "0px";
        }
        barra2.style.width = hp + "px";
        inimigoMorto();
        receberDano();
    }
}

function atacar3(){
    if (permissaoAtaque == 0)
    {
        var hp = barra2.clientWidth;
        hp = hp - pokemonSelecionado1.dano3;
        if (hp < pokemonSelecionado1.dano3)
        {
            barra2.style.width = "0px";
        }
        barra2.style.width = hp + "px";
        inimigoMorto();
        receberDano();
    }
}

function atacar4(){
    if (permissaoAtaque == 0)
    {
        var hp = barra2.clientWidth;
        hp = hp - pokemonSelecionado1.dano4;
        if (hp < pokemonSelecionado1.dano4)
        {
            barra2.style.width = "0px";
        }
        barra2.style.width = hp + "px";
        inimigoMorto();
        receberDano();
    }
}

function inimigoMorto(){
    if (barra2.clientWidth == 0)
    {
        fimJogo.style.display = "block";
    }
}

function escolherPokemonAbre() {
    fimJogo.style.display = "none";
    center_pokemon.style.display = "block";
    canvas.style.display = "none";
}

function batalharDenovo(){
    barra1.style.width = "100px";
    barra2.style.width = "100px";
    fimJogo.style.display = "none";
}

function escolherInimigo(){
    fimJogo.style.display = "none";
    barra2.style.width = "100px";
    barra1.style.width = "100px";
    canvas.style.display = "none";
    center_pokemonEnemy.style.display = "block";
}

function selecionadoPicachuEnemy(){
    pokemonSelecionado2 = picachu;
    fecharEscolhaPokemonInimigo();
}

function selecionadoMimikyuEnemy(){
    pokemonSelecionado2 = mimikyu;
    fecharEscolhaPokemonInimigo();
}

function selecionadoCharizardEnemy(){
    pokemonSelecionado2 = charizard;
    fecharEscolhaPokemonInimigo();
}

function selecionadoGengarEnemy(){
    pokemonSelecionado2 = gengar;
    fecharEscolhaPokemonInimigo();
}

function selecionadoGarchompEnemy(){
    pokemonSelecionado2 = garchomp;
    fecharEscolhaPokemonInimigo();
}

function fecharEscolhaPokemonInimigo(){
    center_pokemonEnemy.style.display = "none";
    canvas.style.display = "block";
    nm_enemy_pokemon.innerHTML = pokemonSelecionado2.nome;
    document.getElementById('enemy_pokemonIMG').src = pokemonSelecionado2.imagem;
}

function receberDano(){
    permissaoAtaque = 1;
    setTimeout(function(){
        barra1.style.width = (barra1.clientWidth - 20) + "px";
        permissaoAtaque = 0;
    }, 1000)
}

document.addEventListener("keypress",function(e){
    if(e.key == '1')
    {
        atacar1();
    }
    if(e.key == '2')
    {
        atacar2();
    }
    if(e.key == '3')
    {
        atacar3();
    }
    if(e.key == '3')
    {
        atacar3();
    }
});