/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes;

/**
 *
 * @author Aluno
 */
public class Reserva {
    private String cpf;
    private String nome;
    private String data;
    private String tele;
    private String email;
    
    public void setCpf(String cpf){
        this.cpf=cpf;
    }
    public String getCpf(){
        return this.cpf;
    }
    public void setData(String d){
        this.data=d;
    }
    public String getData(){
        return this.data;
    }
    public void setNome(String n){
        this.nome=n;
    }
    public String getNome(){
        return this.nome;
    }
    public void setTele(String t){
        this.tele=t;
    }
    public String getTele(){
        return this.tele;
    }
    public void setEmail(String e){
        this.email=e;
    }
    public String getEmail(){
        return this.email;
    }
}
