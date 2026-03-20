<?php

	ini_set('default_charset','UTF-8');
	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	
    include('Conexao.php');

	$id = $_GET['produto'];
	$qtde = $_GET['qtde'];

    try { 

		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));	
		$consulta = $conecta->prepare("UPDATE tb01_produtos SET tb01_qtde = tb01_qtde - $qtde WHERE tb01_id = $id;");
		
		$consulta->execute(array()); 
		$resultadoDaConsulta = $consulta->fetchAll();
 
	} catch(PDOException $e) { // caso retorne erro

		echo('Deu erro: ' . $e->getMessage()); 
	}
?>