/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes;

/**
 *
 * @author aluno
 */
public class Usuario {
    private String login;
    private String senha;
    
    public Usuario(){
        this.login="teste";
        this.senha="123";
    }
    
    public String getUsuario(){
        return this.login;
    }
    public String getSenha(){
        return this.senha;
    }
}
