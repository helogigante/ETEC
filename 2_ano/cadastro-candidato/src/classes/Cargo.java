/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Aluno
 */
public class Cargo {
    private int id;
    private String nome;
    Conexao con;

    public Cargo(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public Cargo() {
        this.id = 0;
        this.nome = "";
    }
 
   @Override
    public String toString() {
        return this.getNome();
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
    
    public int Cadastrar() {
        con = new Conexao();
        int r=0;
        String sql="insert into tb01_cargo values("+getId()+",'"+getNome()+"')";
        try {
            con.conectar();
            r = con.runSQL(sql);
            con.desconectar();
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return r;
    }
    
    public int Atualizar(){
        con = new Conexao();
        int r=0;
        String sql="update tb01_cargo set tb01_nome='"+getNome()+"' where "+"tb01_id="+getId();
        try {
            con.conectar();
            r = con.runSQL(sql);
            con.desconectar();
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return r;
    }
    
    public int Excluir(){
        con = new Conexao();
        int r=0;
        String sql="delete from tb01_cargo where tb01_id="+getId();
        try {
            con.conectar();
            r = con.runSQL(sql);
            con.desconectar();
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return r;
    }
    
    public ResultSet Pesquisar(){
        con = new Conexao();
        ResultSet rs = null;
        try {
            con.conectar();
            String sql = "select * from tb01_cargo";
            rs = con.selectSQL(sql);
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return rs;
    }
}