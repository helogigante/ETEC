function montaData() {
	const dataAtual = new Date();

	const dia = String(dataAtual.getDate()).padStart(2, '0');
	const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
	const ano = dataAtual.getFullYear();
	const horas = String(dataAtual.getHours()).padStart(2, '0');
	const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
	const segundos = String(dataAtual.getSeconds()).padStart(2, '0');

	document.getElementById('data').innerHTML = `${dia}/${mes}/${ano}`;
	document.getElementById('hora').innerHTML = `${horas}:${minutos}:${segundos}`;
}

function emiteSenha(tipo)
	{

		if (document.getElementById('senha').value =="")
		{
			return;
		}

		if (document.getElementById('comprova').innerHTML !="")
		{
			return;
		}
	
		document.getElementById('logo').src = 'imagens/SusEtec.png';

		var conteudo="<br><br>";

		montaData();
		
		conteudo += "<p style='margin-top: 15%'>============================</p>";
		conteudo += "<p style='font-size: 20px;'>SENHA</p>";
		conteudo += "<p>============================</p>";
		conteudo += "<p style='font-size: 32px; margin-top: 25%'>" + document.getElementById('senha').value + "</p>";
		conteudo += "<p style='font-size: 16px; margin-top: 37%'>" + dia + "/" + mes + "/" + ano + "</p>";
		conteudo += "<p style='font-size: 16px; margin-top: 5%'>" + horas + ":" + minutos + ":" + segundos + "</p>";

		document.getElementById('comprova').innerHTML = conteudo;

		montaData();

		document.getElementById('data').innerHTML = dia + "/" + mes + "/" + ano;
		document.getElementById('hora').innerHTML = horas + ":" + minutos + ":" + segundos;

		atualizaSenha();

	}

function atualizaSenha()
	{
		numero = document.getElementById('senha').value;

		tipo = numero.substring(0,1);

		numero = Math.trunc(numero.substring(1,4));
			
		var xmlhttp = new XMLHttpRequest();

		var url = "http://localhost:8080/ProjetoSenha/php/atualizaSenha.php/?tipo=" + tipo + "&senha=" + numero;

		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		
	}

/**
 * @param {'E' | 'N'} tipo 
 * @returns 
 */
async function pegaSenha(tipo) {
	const response = await fetch("http://localhost:8080/ProjetoSenha/php/pega_ultima_senha.php/?tipo=" + tipo)
	const jsonResponse = await response.json()

	const novaSenha =  { senha: Number(jsonResponse.senha) + 1, tipo };
	
	document.getElementById('visor').value = `${novaSenha.tipo} - ${novaSenha.senha}`;
	document.getElementById('visor-senha').value = `${novaSenha.tipo} - ${novaSenha.senha}`;
}

async function retirarSenha() {
	const [tipo, senha] = document.getElementById('visor').value.split(' - ');

	currentDate = new Date()
	const hora = `${currentDate.getHours()}:${currentDate.getMinutes()}`
	const data = `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()}`
	const params = `tipo=${tipo}&seq=${senha}&atendido=${0}&data=${data}&hora=${hora}`

	try {
		const response = await fetch(`http://localhost:8080/ProjetoSenha/php/Inclui.php?${params}`)
		console.log({response})
	} catch {
		alert('Algo deu errado ao tentar inserir a senha')
	}

	document.getElementById('visor').value = "";
	document.getElementById('visor-senha').value = "";
}

async function chamarSenha() {
	try {
		const response = await fetch('http://localhost:8080/ProjetoSenha/php/lista_senhas_pendentes.php');
		const jsonResponse = await response.json();

		let senhaAlterada
		const especial = jsonResponse.find(senha => senha.tb01_tipo == 'E');

		if (especial) {
			senhaAlterada = especial
			document.getElementById('visor').value = `${especial.tb01_tipo}${especial.tb01_seq}`	
		} else {
			const normal = jsonResponse.find(senha => senha.tb01_tipo == 'N')
			senhaAlterada = normal
			document.getElementById('visor').value = `${normal.tb01_tipo}${normal.tb01_seq}`
		}

		const params = `tipo=${senhaAlterada.tb01_tipo}&seq=${senhaAlterada.tb01_seq}&data=${senhaAlterada.tb01_data}&hora=${senhaAlterada.tb01_hora}`
		await fetch(`http://localhost:8080/ProjetoSenha/php/atualiza_senha.php?${params}`)

		document.getElementById('monitor-senha').innerHTML += `<p>${senhaAlterada.tb01_tipo}${senhaAlterada.tb01_seq}</p>`
		document.getElementById('monitor').innerHTML = `${senhaAlterada.tb01_tipo}${senhaAlterada.tb01_seq}`
	} catch (err) {
		alert('Não há senhas na fila.')
	}
}

