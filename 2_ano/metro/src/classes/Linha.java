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
public class Linha {
    Conexao con = new Conexao();
    private int id;
    private String nome;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public Linha() {
        id=0;
        nome="";
    }
    
    public Linha(int id, String nome){
        this.id = id;
        this.nome = nome;
    }
    
    @Override
    public String toString(){
        return nome;
    }

//    public int Cadastrar() {
//        con = new Conexao();
//        int r=0;
//        String sql="insert into tb01_linha values("+getId()+",'"+getNome()+"')";
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
//        String sql="update tb01_linha set tb01_descricao'"+getNome()+"' where "+"tb01_id="+getId();
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
//        String sql="delete from tb01_linha where tb01_id="+getId();
//        try {
//            con.conectar();
//            r = con.runSQL(sql);
//            con.desconectar();
//        } catch (SQLException | ClassNotFoundException ex) {
//            System.out.println("Erro: "+ex);
//        }
//        return r;
//    }

    public ResultSet Pesquisar(){
        String sql = "SELECT * FROM tb01_linha";
        ResultSet rs=null;
        try{
            con.conectar();
            rs = con.selectSQL(sql);
        }catch(ClassNotFoundException | SQLException ex){
            System.out.println("Erro: "+ ex);
        }
        return rs;
    }
}