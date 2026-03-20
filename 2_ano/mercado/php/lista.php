<?php
	ini_set('default_charset','UTF-8');
	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	
    include('Conexao.php');

	$id = $_GET['produto'];

    try { 
		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));	
		$consulta = $conecta->prepare("SELECT * FROM tb01_produtos WHERE tb01_id = $id;");
		
		$consulta->execute(array()); 
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "["; 
		
		if (!count($resultadoDaConsulta)) {
			$StringJson .= '{"tb01_id":"vazio"}]';
			echo($StringJson);
		}
						
	    if (count($resultadoDaConsulta)) {
		  foreach($resultadoDaConsulta as $registro) { 
			if ($StringJson != "[")
				{$StringJson .= ",";}
			
				$StringJson .= '{"tb01_id":"' . $registro['tb01_id']  . '",';
				$StringJson .= '"tb01_nome":"' . $registro['tb01_nome'] . '",';
				$StringJson .= '"tb01_preco":"' . $registro['tb01_preco'] . '",';
				$StringJson .= '"tb01_qtde":"' . $registro['tb01_qtde'] . '"}';
		  	}
		echo $StringJson . "]";
        } 
 
	} catch(PDOException $e) {

		echo('Deu erro: ' . $e->getMessage()); 
	}
?>