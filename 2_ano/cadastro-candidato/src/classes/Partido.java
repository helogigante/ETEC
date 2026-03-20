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
public class Partido {
    private int id;
    private String nome;
    private String sigla;
    Conexao con;
    
    public Partido(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public Partido() {
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

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }
    
    public int Cadastrar() {
        con = new Conexao();
        int r=0;
        String sql="insert into tb02_partido values("+getId()+",'"+getNome()+"','"+getSigla()+"')";
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
        String sql="update tb02_partido set tb02_nome='"+getNome()+"', tb02_sigla='"+getSigla()+"' where "+"tb02_id="+getId();
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
        String sql="delete from tb02_partido where tb02_id="+getId();
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
            String sql = "select * from tb02_partido";
            rs = con.selectSQL(sql);
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return rs;
    }
}