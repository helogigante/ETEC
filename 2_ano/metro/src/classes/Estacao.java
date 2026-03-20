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
public class Estacao {
    private int id_linha;
    private int id;
    private String nome;
    Conexao con = new Conexao();

    public int getId_linha() {
        return id_linha;
    }

    public void setId_linha(int id_linha) {
        this.id_linha = id_linha;
    }

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
    
    public Estacao(int id, String nome){
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
//        String sql="insert into tb02_estacao values("+getId()+","+getId_linha()+",'"+getNome()+"')";
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
//        String sql="update tb02_estacao set tb02_nome'"+getNome()+"' where "+"tb02_id="+getId();
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
//        String sql="delete from tb02_estacao where tb02_id="+getId();
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
        ResultSet rs = null;
        String sql = "select * from tb02_estacao where tb02_id_linha="+id_linha;
        try {
            con.conectar();
            rs = con.selectSQL(sql);
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return rs;
    }
}