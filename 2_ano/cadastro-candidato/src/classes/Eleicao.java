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
public class Eleicao {
    private int id;
    private String descricao;
    private String ano;
    Conexao con;
    
    public Eleicao(int id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }

    public Eleicao() {
        this.id = 0;
        this.descricao = "";
    }
 
   @Override
    public String toString() {
        return this.getDescricao();
    }

    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getAno() {
        return ano;
    }

    public void setAno(String ano) {
        this.ano = ano;
    }
    
    public int Cadastrar() {
        con = new Conexao();
        int r=0;
        String sql="insert into tb03_eleicao values("+getId()+",'"+getDescricao()+"',"+getAno()+", 0, 0)";
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
        String sql="update tb03_eleicao set tb03_descricao='"+getDescricao()+"', tb03_ano="+getAno()+" where "+"tb03_id="+getId();
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
        String sql="delete from tb03_eleicao where tb03_id="+getId();
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
            String sql = "select * from tb03_eleicao";
            rs = con.selectSQL(sql);
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return rs;
    }
}
