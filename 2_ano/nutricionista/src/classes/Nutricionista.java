/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes;

/**
 *
 * @author aluno
 */
public class Nutricionista {
    private String nome;
    private int cfn;
    private String telefone;
    private String especialidade;
    
    public void salvar(String n, int c, String t, String e){
        this.nome=n;
        this.cfn=c;
        this.telefone=t;
        this.especialidade=e;
    }
    
    public String exibir(){
        return("Nome: "+this.nome+"\nCFN: "+this.cfn+"\nEspecialidade: "+this.especialidade+"\nTelefone: "+this.telefone);
    }
    public String getnome(){
        return this.nome;
    }
    public int getcfn(){
        return this.cfn;
    }
}
