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
imagem: "./assets/charizard.gif"};
//mimikyu
var mimikyu = {nome: "mimikyu" ,
ataque1: "Pior Presente" , dano1: 20 ,
ataque2: "Boneco Postiço", dano2: 10 ,
ataque3: "Números Tenebrosos", dano3: 30,
ataque4: "Reflexo", dano4: 15,
imagem: "./assets/mimikyu.gif"};

var nm_my_pokemon = document.getElementById('nm_my_pokemon');
var barra1 = document.getElementById('barra1');
var barra2 = document.getElementById('barra2');
var ataque1 = document.getElementById('ataque1');
var ataque2 = document.getElementById('ataque2');
var ataque3 = document.getElementById('ataque3');
var ataque4 = document.getElementById('ataque4');

var pokemonSelecionado = picachu;

nm_my_pokemon.innerHTML = pokemonSelecionado.nome;
document.getElementById('my_pokemonIMG').src = pokemonSelecionado.imagem;
ataque1.innerHTML = pokemonSelecionado.ataque1;
ataque2.innerHTML = pokemonSelecionado.ataque2;
ataque3.innerHTML = pokemonSelecionado.ataque3;
ataque4.innerHTML = pokemonSelecionado.ataque4;
barra2.style.width = 40 + "px";