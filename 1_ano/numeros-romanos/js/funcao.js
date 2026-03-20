function converter()
{
    var n, resto=0, cem=0, deze=0, uni=0;
    var traduz = "";
    var un = new Array ("I","II", "III", "IV", "V", "VI", "VII", "VIII", "IX");
    var dez = new Array ("X","XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC");
    var cent = new Array ("C","CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM");
    
    n = document.getElementById("num").value;

    resto = n;
    cem = resto / 100;
    resto = resto % 100;
    
    if(Math.trunc (cem) > 0){
      traduz = traduz + cent[Math.trunc (cem) - 1];
    }
      
    if(Math.trunc (resto) >= 10 && Math.trunc (resto) <= 90){
      deze = resto / 10;
      resto = resto % 10;
      traduz = traduz + dez[Math.trunc (deze) - 1];
    }
      
    if(resto < 10 && resto >0){
      uni = resto;
      traduz = traduz + un[uni - 1];
    }
    
    document.getElementById("visor").value=traduz;
}