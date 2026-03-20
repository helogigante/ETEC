<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
date_default_timezone_set('America/Sao_Paulo');

include('ConexaoSenha.php');

if(isset($_GET['tipo'], $_GET['seq'], $_GET['data'], $_GET['hora'], $_GET['atendido'])) {
    $tipo = $_GET['tipo'];
    $seq = $_GET['seq'];
    $data = $_GET['data'];
    $hora = $_GET['hora'];
    $atendido = $_GET['atendido'];

    try {
        $conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        
        $query = "INSERT INTO tb01_senhas (tb01_tipo, tb01_seq, tb01_data, tb01_hora, tb01_atendido) VALUES (:tipo, :seq, :data, :hora, :atendido)";
        $stmt = $conecta->prepare($query);
        $stmt->bindParam(':tipo', $tipo);
        $stmt->bindParam(':seq', $seq);
        $stmt->bindParam(':data', $data);
        $stmt->bindParam(':hora', $hora);
        $stmt->bindParam(':atendido', $atendido);
        $stmt->execute();

        echo "Senha inserida com sucesso";
    } catch(PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
} else {
    echo "Erro: Parâmetros faltando";
}
?>