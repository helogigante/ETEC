<?php
	ini_set('default_charset','UTF-8');
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	
    include('ConexaoSenha.php'); 

	$tipo = $_GET['tipo'];

    try { 
		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha);
		$conecta->exec("SET CHARACTER SET utf8");
		$consulta = $conecta->prepare("SELECT coalesce(MAX(tb01_seq), 0) AS senha, tb01_tipo FROM tb01_senhas where tb01_tipo = '$tipo'");
		$consulta->execute(array()); 
		$resultadoDaConsulta = $consulta->fetchAll();
 		
		echo json_encode($resultadoDaConsulta[0]);
	} catch(PDOException $e) { // caso retorne erro
		echo('Deu erro: ' . $e->getMessage()); 
	}
?>