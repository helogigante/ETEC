<?php

	ini_set('default_charset','UTF-8');
	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	
    include('ConexaoLogin.php'); 
		
    $user = $_GET['user'];
    $pass = $_GET['pass'];

    try { 

		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));	
		$consulta = $conecta->prepare("SELECT * FROM tb01_login where tb01_usuario = '$user' and tb01_senha = '$pass';");
		
		$consulta->execute(array()); 
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "["; 
		
		if (!count($resultadoDaConsulta) ) {
			$StringJson .= '{"tb01_usuario":"vazio"}]';
			echo($StringJson);
		}
						
	    if ( count($resultadoDaConsulta) ) {
		  foreach($resultadoDaConsulta as $registro) 
		  { 
			if ($StringJson != "[") 
				{$StringJson .= ",";}
			
			$StringJson .= '{"tb01_usuario":"' . $registro['tb01_usuario']  . '",';
			$StringJson .= '"tb01_senha":"' . $registro['tb01_senha'] . '"}';
			
		    }  
		echo $StringJson . "]"; 
        } 
 
	} catch(PDOException $e) { // caso retorne erro

		echo('Deu erro: ' . $e->getMessage()); 
	}
?>