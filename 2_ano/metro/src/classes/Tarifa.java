/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Aluno
 */
public class Tarifa {
    private int id;
    private double valor;
    private int data;
    
    Conexao con = new Conexao();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public int getData() {
        return data;
    }

    public void setData(int data) {
        this.data = data;
    }
    
    
//    public int Cadastrar() {
//        con = new Conexao();
//        int r=0;
//        String sql="insert into tb04_tarifa values("+getId()+","+getValor()+","+getData()+")";
//        try {
//            con.conectar();
//            r = con.runSQL(sql);
//            con.desconectar();
//        } catch (SQLException | ClassNotFoundException ex) {
//            System.out.println("Erro: "+ex);
//        }
//        return r;
//    }
//
//    public int Atualizar(){
//        con = new Conexao();
//        int r=0;
//        String sql="update tb04_tarifa set tb04_valor'"+getValor()+"' where "+"tb04_id_tarifa="+getId();
//        try {
//            con.conectar();
//            r = con.runSQL(sql);
//            con.desconectar();
//        } catch (SQLException | ClassNotFoundException ex) {
//            System.out.println("Erro: "+ex);
//        }
//        return r;
//    }
//
//    public int Excluir(){
//        con = new Conexao();
//        int r=0;
//        String sql="delete from tb04_tarifa where tb04_id_tarifa="+getId();
//        try {
//            con.conectar();
//            r = con.runSQL(sql);
//            con.desconectar();
//        } catch (SQLException | ClassNotFoundException ex) {
//            System.out.println("Erro: "+ex);
//        }
//        return r;
//    }

    public ResultSet Pesquisar() throws SQLException{
        String sql = "SELECT * FROM tb04_tarifa ORDER BY tb04_data DESC";
        ResultSet rs = null;
        try {
            con.conectar();
            rs = con.selectSQL(sql);
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return rs;
    }
}
