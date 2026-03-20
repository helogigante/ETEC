var campos = ["mostrar", "mostrar2", "mostrar3"];
var campoAtual = 0;


function digitar(value){
    if (document.getElementById(campos[campoAtual]).value == ""){
        document.getElementById(campos[campoAtual]).value = value;
    } else {
        campoAtual = (campoAtual + 1) % campos.length;
        document.getElementById(campos[campoAtual]).value = value;
    }
    var mos = document.getElementById("mostrar").value;
    var mos2 = document.getElementById("mostrar2").value;
    var mos3 = document.getElementById("mostrar3").value;
    
    if (mos && mos2 && mos3) {
        var img = "./img/candidato_" + mos + mos2 + mos3 + ".jpg";
        document.getElementById("quadrado").src = img;
    }
    if (mos3 > 4){
        document.getElementById("quadrado").src="./img/nao.png";
    }
    
    var audio = new Audio('./som/digito.mp3');
    audio.play();
}

function semvoto(){
    document.getElementById("quadrado").src="./img/Nulo.png";

    var audio = new Audio('./som/voto.mp3');
    audio.play();
}

function confirmar(){
    document.getElementById("quadrado").src="./img/fim.png";

    var audio = new Audio('./som/voto.mp3');
    audio.play();
}

function limpar() {
    document.getElementById("mostrar").value = "";
    document.getElementById("mostrar2").value = "";
    document.getElementById("mostrar3").value = "";
    campoAtual = 0;

    document.getElementById("quadrado").src="./img/Quadrado.png";
}