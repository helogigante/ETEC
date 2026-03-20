<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
date_default_timezone_set('America/Sao_Paulo');

include('ConexaoSenha.php');

if(isset($_GET['tipo'], $_GET['seq'], $_GET['data'], $_GET['hora'])) {
    $tipo = $_GET['tipo'];
    $seq = $_GET['seq'];
    $data = $_GET['data'];
    $hora = $_GET['hora'];

    try {
        $conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        
        $query = "UPDATE tb01_senhas SET tb01_tipo = :tipo, tb01_seq = :seq, tb01_data = :data, tb01_hora = :hora, tb01_atendido = '1' WHERE tb01_seq = :seq";
        $stmt = $conecta->prepare($query);
        $stmt->bindParam(':tipo', $tipo);
        $stmt->bindParam(':seq', $seq);
        $stmt->bindParam(':data', $data);
        $stmt->bindParam(':hora', $hora);
        $stmt->execute();

        echo "Senha atualizada com sucesso";
    } catch(PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
} else {
    echo "Erro: Parâmetros faltando";
}
?>