<?php
	ini_set('default_charset','UTF-8');
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	
    include('ConexaoSenha.php'); 

    try { 
		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha);
		$conecta->exec("SET CHARACTER SET utf8");
		$consulta = $conecta->prepare("SELECT * FROM tb01_senhas where tb01_atendido = '0' ORDER BY tb01_seq ASC");
		$consulta->execute(array()); 
		$resultadoDaConsulta = $consulta->fetchAll();
 		
        $StringJson = "["; 
		
		for ($i = 0; $i < count($resultadoDaConsulta); $i++) {
			$StringJson .= '{';
			$StringJson .= '"tb01_tipo": "' . $resultadoDaConsulta[$i]['tb01_tipo'] . '",';
			$StringJson .= '"tb01_seq": "' . $resultadoDaConsulta[$i]['tb01_seq'] . '",';
			$StringJson .= '"tb01_hora": "' . $resultadoDaConsulta[$i]['tb01_hora'] . '",';
			$StringJson .= '"tb01_atendido": "' . $resultadoDaConsulta[$i]['tb01_atendido'] . '",';
			$StringJson .= '"tb01_data":"' . $resultadoDaConsulta[$i]['tb01_data'] . '"';
			$StringJson .= '}';

			if ($i < count($resultadoDaConsulta) - 1) {
				$StringJson .= ",";
			}
		}

		$StringJson .= "]";

	   echo $StringJson;
	} catch(PDOException $e) { // caso retorne erro
		echo('Deu erro: ' . $e->getMessage()); 
	}
?>