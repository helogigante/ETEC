function lista()
{		
    var xmlhttp = new XMLHttpRequest();

    //Prepara link para acionar PHP
    
    var url = "http://localhost:8080/projeto-login/php/lista.php";
    
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
        var i=0;
        var conteudo = "";
        var linhas;
        
        // O for() vai montar a linha (<TR>) da tabela
        for (i = 0; i < dados.length; i++) //dados.length retorna o tamanho do vetor.
        {
            if (dados[i].tb01_usuario == "vazio")
            {
                limpaID();
                alert("Consulta invalida");

            }
            else
            {
                conteudo += '<tbody id="lnome">'
                conteudo += '<tr>';
                conteudo += '<td>' + dados[i].tb01_usuario + '</td>';	
                conteudo += '<td style="text-align: center">' + dados[i].tb01_email+ '</td>';
                conteudo += '<td style="text-align: center">' + dados[i].tb01_senha + '</td>';
                conteudo += '</tr>';
                conteudo += '</tbody>';
            }
        }	

        document.getElementById('lnome').innerHTML = conteudo;			
    }		
}