var elementos = document.querySelectorAll('.player-options div > img');
const enemyOptions = document.querySelectorAll('.anemy-options div');
var playerOpt = "";
var enemyOpt = "";

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', (t)=>{
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt= t.target.getAttribute('opt');
        jogadaInimigo()
    });
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.20;
    }
}

function jogadaInimigo(){
    let rand = Math.floor(Math.random()*3);
    resetOpacityComputer();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            
            enemyOptions[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    ganhador();
}

function resetOpacityComputer(){
    for(var i = 0; i< enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.20;
    }
}

function ganhador(){
    var resultado = document.querySelector('.resultado')
    var ganhou = "GANHOU! :)";
    var perdeu = "PERDEU :("

    if(playerOpt == enemyOpt){
        resultado.innerHTML = "Empate :|"
    }else{
        if(playerOpt=="pedra"){
            if(enemyOpt=="papel"){
                resultado.innerHTML = perdeu;
            }else{
                resultado.innerHTML = ganhou;
            }
        }
        else if(playerOpt=="papel"){
            if(enemyOpt=="pedra"){
                resultado.innerHTML = ganhou;
            }else{
                resultado.innerHTML = perdeu;
            }
        }
        else if(playerOpt=="tesoura"){
            if(enemyOpt=="pedra"){
                resultado.innerHTML = perdeu;
            }else{
                resultado.innerHTML = ganhou;
            }
        }
    }
}