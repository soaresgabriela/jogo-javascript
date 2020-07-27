var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var criaMosquitoTempo = 1500;

function ajustaTamanhoPalcoJogo(){    
    altura = window.innerHeight;
    largura = window.innerWidth;
}
var dificuldade = window.location.href.search;

if(dificuldade === '?normal'){
    criaMosquitoTempo = 1500;
}else if(dificuldade==='?dificil'){
    criaMosquitoTempo = 1000;
}else if(dificuldade==='?impossivel'){
    criaMosquitoTempo = 750;
}


ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
    tempo --;
    if(tempo<0){
        clearInterval(cronometro);
        clearInterval(criaMosca);
        document.location.href = 'vitoria.html';
    }else{
    document.getElementById('cronometro').innerHTML = tempo;
    }    
    
},1000)

function posicaoRandomica(){
    
    //remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if(vidas>3){
            window.location.href = 'fim-de-jogo.html'

        }else{
            document.getElementById('v' + vidas).src = "img/coracao_vazio.png"
            vidas++
    }
    }
    
    var posicaoX = Math.floor(Math.random()*largura) - 90;
    var posicaoY = Math.floor(Math.random()*altura) - 90;
    //console.log(posicaoX, posicaoY);
    posicaoX = posicaoX<0 ? 0 : posicaoX;
    posicaoY = posicaoY<0 ? 0 : posicaoY;


    //criar o elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }
    document.body.appendChild(mosquito);
}
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3); 
    switch(classe){
        case 0:
            return 'mosca1';
        case 1:
            return 'mosca2';
        case 2:
            return 'mosca3';
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2); 
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
 
    }

}
