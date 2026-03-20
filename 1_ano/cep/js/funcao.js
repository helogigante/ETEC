    async function buscaCEP()
    {
        console.log('entrou')
		var valor = document.getElementById("nro").value;

        var cep = valor.replace(/\D/g, '');

        if (cep != "") {

            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {
                try {
                    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    
                    const responseJson = await response.json()
    
                    console.log(responseJson)
                    document.querySelector('#cidade').textContent = responseJson.localidade
                    document.getElementById('rua').innerHTML=(responseJson.logradouro);
                    document.getElementById('bairro').innerHTML=(responseJson.bairro);
                    document.getElementById('uf').innerHTML=(responseJson.uf);
                } catch (err) {
                    console.log(err)
                    alert('Algo deu errado. Tente novamente.')
                }

            }
            else {
                alert("Formato de CEP inválido.");
				limpaCEP();
            }
        }
        else {
            alert("Formato de CEP inválido.");
			limpaCEP();
        }
    }

    function limpaCEP()
    {
        document.querySelector('#cidade').textContent = "";
        document.getElementById('rua').innerHTML= "";
        document.getElementById('bairro').innerHTML= "";
        document.getElementById('uf').innerHTML= "";
    }

	function meu_callback(conteudo)
    {
        if (!("erro" in conteudo)) {
            document.getElementById('rua').innerHTML=(conteudo.logradouro);
            document.getElementById('bairro').innerHTML=(conteudo.bairro);
            document.getElementById('cidade').innerHTML=(conteudo.localidade);
            document.getElementById('uf').innerHTML=(conteudo.uf);
        } 
        else {
            alert("CEP não encontrado.");
			limpaCEP();
        }
    }

function idioma(tipo)
{
    if(tipo == 1){
        document.getElementById('Buscar').innerHTML="Buscar";
        document.getElementById('Rua').innerHTML="Rua:";
        document.getElementById('Bairro').innerHTML="Bairro:";
        document.getElementById('Cidade').innerHTML="Cidade:";
        document.getElementById('Estado').innerHTML="Estado:";
    }

    if(tipo == 2){
        document.getElementById('Buscar').innerHTML="Search";
        document.getElementById('Rua').innerHTML="Street:";
        document.getElementById('Bairro').innerHTML="District:";
        document.getElementById('Cidade').innerHTML="City:";
        document.getElementById('Estado').innerHTML="State:";
    }    
}