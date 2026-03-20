<?php

	ini_set('default_charset','UTF-8');
	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	
    include('Conexao.php');

	$id = $_GET['num'];

    try { 

		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));	
		$consulta = $conecta->prepare("SELECT * FROM tb01_candidato WHERE tb01_id = $id;");
		
		$consulta->execute(array()); 
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "["; 
		
		if (!count($resultadoDaConsulta) ) {
			$StringJson .= '{"tb01_id":"vazio"}]';
			echo($StringJson);
		}
						
	    if ( count($resultadoDaConsulta) ) {
		  foreach($resultadoDaConsulta as $registro) { 
			if ($StringJson != "[") 
				{$StringJson .= ",";}
			
				$StringJson .= '{"tb01_id":"' . $registro['tb01_id']  . '",';
				$StringJson .= '"tb01_nome":"' . $registro['tb01_nome'] . '",';
				$StringJson .= '"tb01_cargo":"' . $registro['tb01_cargo'] . '",';
				$StringJson .= '"tb01_chapa":"' . $registro['tb01_chapa'] . '",';

				// Converter a foto (BLOB) para base64
				$fotoBase64 = base64_encode($registro['tb01_foto']);
				$StringJson .= '"tb01_foto":"' . $fotoBase64 . '"}';
		    }  
		echo $StringJson . "]";
        } 
 
	} catch(PDOException $e) { // caso retorne erro

		echo('Deu erro: ' . $e->getMessage()); 
	}
?>