function calcular() {
    altura = (document.getElementById("altura").value.replace(',', '.'));
    peso = (document.getElementById("peso").value.replace(',', '.'));
    nome = document.getElementById("nome").value;
    imc = (peso / (altura * altura)).toFixed(1);

    if (imc < 18.5){
        document.getElementById("visor").innerHTML = nome + ", seu IMC é de " + imc + ". Você está com peso abaixo do ideal. Cuidado!!";
    }
    if(imc >= 18.5 && imc < 30.0){
        document.getElementById("visor").innerHTML = nome + ", seu IMC é de " + imc + ". Você está com peso ideal. Parabéns!!";
    }
    if (imc >= 30.0){
        document.getElementById("visor").innerHTML = nome + ", seu IMC é de " + imc + ". Você está acima do peso. Cuidado!!";
    }
}