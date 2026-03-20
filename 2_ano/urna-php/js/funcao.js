var campos = ["num1", "num2", "num3"];
var campoAtual = 0;

async function contavoto()
{
    var xmlhttp = new XMLHttpRequest();
    
    var mos1 = document.getElementById("num1").value;
    var mos2 = document.getElementById("num2").value;
    var mos3 = document.getElementById("num3").value;
    var num = mos1 + mos2 + mos3;
     
    fetch("http://localhost:8080/ProjetoUrna/php/voto.php?num=" + num)
        .then(()=> alert('Voto cadastrado com sucesso!'))
        .catch(() => alert('Deu erro.'))
}

function lista()
{		
    var xmlhttp = new XMLHttpRequest();

    //Prepara link para acionar PHP

    var mos1 = document.getElementById("num1").value;
    var mos2 = document.getElementById("num2").value;
    var mos3 = document.getElementById("num3").value;
    var num = mos1 + mos2 + mos3;
    
    var url = "http://localhost:8080/ProjetoUrna/php/lista.php/?num=" + num;
    
    xmlhttp.onreadystatechange = function () 
    {
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            ConectaServidor(xmlhttp.responseText);
        }
    }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
        
    function ConectaServidor(response) {
         
        var dados = JSON.parse(response); //faz a conversão do texto da WEB para JSON
        
        /*var i=0;
        var id2 = "";
        var nome2 = "";
        var cargo2 = "";
        var chapa2 = "";
        var foto2 = "";
        
        for (i = 0; i < dados.length; i++) //dados.length retorna o tamanho do vetor.
        {
            if (dados[i].tb01_id == "vazio")
            {
                alert("Consulta invalida");

            }
            else
            {
                id2 += dados[i].tb01_id;
                nome2 += dados[i].tb01_nome;
                cargo2 += dados[i].tb01_cargo;
                chapa2 += dados[i].tb01_chapa;
                foto2 += dados[i].tb01_foto;
            }
        }*/

        var nome2 = "";
        var cargo2 = "";
        var chapa2 = "";
        var foto2 = "";

        if (dados.length === 0 || dados[0].tb01_id === "vazio") {
            // Se nenhum candidato foi encontrado, exibe a mensagem de "não encontrado"
            document.getElementById('quadrado').src = "./img/not-found.jpg";
        } else {
            // Se o candidato foi encontrado, preenche os campos com as informações do banco de dados
            var id2 = "";
            var nome2 = "";
            var cargo2 = "";
            var chapa2 = "";
            var foto2 = "";

            for (var i = 0; i < dados.length; i++) {
                id2 += dados[i].tb01_id;
                nome2 += dados[i].tb01_nome;
                cargo2 += dados[i].tb01_cargo;
                chapa2 += dados[i].tb01_chapa;
                foto2 += dados[i].tb01_foto;
            }
        }

        document.getElementById('nome').innerHTML = nome2;
        document.getElementById('cargo').innerHTML = cargo2;
        document.getElementById('chapa').innerHTML = chapa2;

        if (foto2) {
            document.getElementById('quadrado').src = "data:image/jpeg;base64," + foto2; // Define a imagem no src
        }
    }		
}

function digitar(value){

    if (document.getElementById(campos[campoAtual]).value == ""){
        document.getElementById(campos[campoAtual]).value = value;
    } else {
        campoAtual = (campoAtual + 1) % campos.length;
        document.getElementById(campos[campoAtual]).value = value;
    }

    var mos1 = document.getElementById("num1").value;
    var mos2 = document.getElementById("num2").value;
    var mos3 = document.getElementById("num3").value;
    
    if(mos1 !== "" && mos2 !== "" && mos3 !== ""){
        lista();
    }

    var audio = new Audio('./som/digito.mp3');
    audio.play();
}

function semvoto(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    
    document.getElementById("quadrado").src="./img/nulo.jpg";

    var audio = new Audio('./som/voto.mp3');
    audio.play();
    campoAtual = 0;
}

function confirmar(){
    contavoto();

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";

    document.getElementById("nome").innerHTML = "";
    document.getElementById("cargo").innerHTML = "";
    document.getElementById("chapa").innerHTML = "";
    
    document.getElementById("quadrado").src="./img/fim.jpg";

    var audio = new Audio('./som/voto.mp3');
    audio.play();
    campoAtual = 0;
}

function corrigir() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    
    document.getElementById("nome").innerHTML = "";
    document.getElementById("cargo").innerHTML = "";
    document.getElementById("chapa").innerHTML = "";
    
    document.getElementById("quadrado").src="./img/Quadrado.png";
    campoAtual = 0;
}