function converter()
{
    var n;
    var cont=1;
    var conteudo = "";
    
    n = document.getElementById("num").value;

    while(cont <= 10){
        conteudo += n + "x" + cont + "=" + (n * cont) + "<br>";
        cont++;
    }
    
    document.getElementById("visor").innerHTML=conteudo;
}