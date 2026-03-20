/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Etec
 */
public class Bilhete {
    private int num_bi;
    private int id_tarifa;
    private int id_est;
    private int terminal;
    Conexao con = new Conexao();

    public int getNum_bi() {
        return num_bi;
    }

    public void setNum_bi(int num_bi) {
        this.num_bi = num_bi;
    }

    public int getId_tarifa() {
        return id_tarifa;
    }

    public void setId_tarifa(int id_tarifa) {
        this.id_tarifa = id_tarifa;
    }

    public int getId_est() {
        return id_est;
    }

    public void setId_est(int id_est) {
        this.id_est = id_est;
    }

    public int getTerminal() {
        return terminal;
    }

    public void setTerminal(int terminal) {
        this.terminal = terminal;
    }
    
    public ResultSet Pesquisar() throws SQLException{
        String sql = "SELECT * FROM tb03_bilhete ORDER BY tb03_num_bi DESC";
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
