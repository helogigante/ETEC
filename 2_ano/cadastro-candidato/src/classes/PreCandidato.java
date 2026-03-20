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
public class PreCandidato {
    private String nome;
    private int id;
    private byte[] foto;
    Conexao con;
    
    public PreCandidato(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public PreCandidato() {
        this.id = 0;
        this.nome = "";
    }
 
   @Override
    public String toString() {
        return this.getNome();
    }


    public byte[] getFoto() {
        return foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
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
        String sql="insert into tb04_precandidato values("+getId()+",'"+getNome()+"','"+getFoto()+"')";
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
        String sql="update tb04_precandidato set tb04_nome='"+getNome()+"' where "+"tb04_id="+getId();
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
        String sql="delete from tb04_precandidato where tb04_id="+getId();
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
            String sql = "select * from tb04_precandidato";
            rs = con.selectSQL(sql);
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return rs;
    }
}
