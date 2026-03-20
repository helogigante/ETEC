function login() {	
	var user = 	document.getElementById('usuario').value;
	var pass = document.getElementById('senha').value;

	var xmlhttp = new XMLHttpRequest();

	//Prepara link para acionar PHP
	
	var url = "http://localhost:8080/projeto-login/php/Login.php?user="+user+"&pass="+pass;

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
			if (dados[i].tb01_nome == "vazio")
			{
				alert("Acesso negado");

			}
			else
			{
				window.location.href = 'lista.html';
			}
		}				
	}		
}