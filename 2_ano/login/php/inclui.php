<?php

	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	date_default_timezone_set('America/Sao_Paulo');	
	
	include('ConexaoLogin.php'); 
	
	$data = new DateTime(); 
	
    $sdata = $data->format('Y-m-d');

	$user = $_GET['user'];
	$email = $_GET['email'];
    $pass = $_GET['pass'];

	try 
	{ 
		// Grava banco de dados
		
		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));		
		
        $query = "INSERT INTO tb01_login (tb01_usuario, tb01_email, tb01_senha) VALUES ('$user', '$email', '$pass')";
				  
		$grava = $conecta->prepare($query);
		$grava->execute(array()); 
				
	} 
	catch(PDOException $e) 
	{ 
		echo('Deu erro: ' . $e->getMessage());
	}
 
?>