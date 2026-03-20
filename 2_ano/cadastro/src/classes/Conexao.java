/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Aluno
 */
public class Conexao {
    public static Statement statement = null;

    // String com o caminho onde está o banco de dados
    String URL = "jdbc:mysql://localhost:3307/bd_login";
    //Login
    String usuario = "root";
    //Senha
    String senha = "usbw";
    // Variavel para o comando SQL
    private Statement stm = null;
    // Variavel para a conexão
    private Connection conexao = null;
 
    // Métodos Conectar e Desconectar Banco de Dados 
    // =============================================

    public void conectar() throws ClassNotFoundException, SQLException {
       
        // Carga do driver de conexão
        Class.forName("com.mysql.cj.jdbc.Driver");
        // Fazendo a conexão
        conexao = DriverManager.getConnection(URL, usuario, senha);
        statement = (Statement) conexao.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
    }

    public void desconectar() throws SQLException{
           
        // Fechando a conexão
        conexao.close();
    }
public static int runSQL(String sql) 
    {
        int qtdreg = 0;
     
    try{
      qtdreg = statement.executeUpdate(sql);
      //   JOptionPane.showMessageDialog(null, "Registro processado");
      }catch(SQLException sqlex){
           System.out.println("Erro acesso ao BD"+ sqlex);
      //   JOptionPane.showMessageDialog(null, "Erro");
      }
   return qtdreg;
    }
public ResultSet selectSQL(String sql){
        ResultSet rs=null;
        try{
            rs = statement.executeQuery(sql);  
        }catch(SQLException sqlex){
           System.out.println("Erro acesso ao BD"+ sqlex);
      }
        return rs;
    }
}
