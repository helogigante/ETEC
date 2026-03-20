function inclui() {
    var user = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("senha").value;
    var confirma = document.getElementById("confirma").value;

    if (user == ""){
        alert('Preencha o campo "Nome".');
        return false;
    }
    if (email == ""){
        alert('Preencha o campo "E-mail".');
        return false;
    }
    if (pass == ""){
        alert('Preencha o campo "Senha".');
        return false;
    }
    if (pass !== confirma){
        alert('A senhas não coincidem.');
        return false;
    }
        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:8080/projeto-login/php/inclui.php?user="+user+"&pass="+pass+"&email="+email;
        xmlhttp.onreadystatechange = function () 
        {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            {
                ConectaServidor(xmlhttp.responseText);
            }
        }
            
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        alert("Usuário cadastrado com sucesso!");
        window.location.href = 'index.html';
    
}