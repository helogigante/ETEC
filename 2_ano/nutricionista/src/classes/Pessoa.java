/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes;

/**
 *
 * @author aluno
 */
public class Pessoa {
    private String nome;
    private double altura;
    private double peso;
    private int idade;
    private int id;
    
    public void atribuir (String n, double h, int i, double p, int id){
        this.nome=n;
        this.idade=i;
        this.altura=h;
        this.peso=p;
        this.id=id;
    }
    
    public int getId(){
        return this.id;
    }
    
    public String getnome(){
        return this.nome;
    }
    
    public String mostrar(){
        String texto = "ID: "+this.id+", nome: "+this.nome+", idade: "+this.idade+", peso: "+this.peso+", altura: "+this.altura;
        return texto;
    }
    
    public double calcular(){
        double imc = this.peso/(this.altura*this.altura);
        return imc;
    }
}