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
public class Candidato {
    private int id;
    private int eleicao;
    private int candidato;
    private int partido;
    private int cargo;
    Conexao con;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getEleicao() {
        return eleicao;
    }

    public void setEleicao(int eleicao) {
        this.eleicao = eleicao;
    }

    public int getCandidato() {
        return candidato;
    }

    public void setCandidato(int candidato) {
        this.candidato = candidato;
    }

    public int getPartido() {
        return partido;
    }

    public void setPartido(int partido) {
        this.partido = partido;
    }

    public int getCargo() {
        return cargo;
    }

    public void setCargo(int cargo) {
        this.cargo = cargo;
    }
    
    public int Cadastrar() {
        con = new Conexao();
        int r=0;
        String sql="insert into tb05_candidato values("+getId()+",0,"+getCandidato()+","+getEleicao()+","+getCargo()+","+getPartido()+")";
        try {
            con.conectar();
            r = con.runSQL(sql);
            con.desconectar();
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return r;
    }

//    public int Atualizar(){
//        con = new Conexao();
//        int r=0;
//        String sql="update tb05_candidato set tb01_nome='"+getNome()+"' where "+"tb01_id="+getId();
//        try {
//            con.conectar();
//            r = con.runSQL(sql);
//            con.desconectar();
//        } catch (SQLException | ClassNotFoundException ex) {
//            System.out.println("Erro: "+ex);
//        }
//        return r;
//    }

    public int Excluir(){
        con = new Conexao();
        int r=0;
        String sql="delete from tb05_candidato where tb05_id="+getId();
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
            String sql = "select * from tb05_candidato";
            rs = con.selectSQL(sql);
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println("Erro: "+ex);
        }
        return rs;
    }
}
