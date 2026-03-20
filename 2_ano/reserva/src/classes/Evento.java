/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes;

/**
 *
 * @author aluno
 */
public class Evento {
    private int codigo;
    private String nome;
    private String data;
    private String hora;
    private String local;
    private String classificacao;
    
    public void setCodigo(int cod){
        this.codigo=cod;
    }
    public int getCodigo(){
        return this.codigo;
    }
    public void setNome(String n){
        this.nome=n;
    }
    public String getNome(){
        return this.nome;
    }
    public void setData(String d){
        this.data=d;
    }
    public String getData(){
        return this.data;
    }
    public void setHora(String h){
        this.hora=h;
    }
    public String getHora(){
        return this.hora;
    }
    public void setLocal(String l){
        this.local=l;
    }
    public String getLocal(){
        return this.local;
    }
    public void setClassificacao(String c){
        this.classificacao=c;
    }
    public String getClassificacao(){
        return this.classificacao;
    }
}
