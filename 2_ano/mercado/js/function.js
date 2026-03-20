let produtos = [];
let totalAtual = 0;
let valoresRecebidos = [];

function montaData() {
	const dataAtual = new Date();

	const dia = String(dataAtual.getDate()).padStart(2, '0');
	const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
	const ano = dataAtual.getFullYear();
	const horas = String(dataAtual.getHours()).padStart(2, '0');
	const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
	const segundos = String(dataAtual.getSeconds()).padStart(2, '0');

	document.getElementById('data').innerHTML = `${dia}/${mes}/${ano}`;
	document.getElementById('hora').innerHTML = `${horas}:${minutos}:${segundos}`;
}

function verificaEnter(event) {
    if (event.key === "Enter") {
		adicionarProduto();
    }
}

function adicionarProduto() {
    const produtoId = document.getElementById("produto").value;
    const qtde = parseInt(document.getElementById("qtde").value);
    const item = document.getElementById("foto");

    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:8080/ProjetoMercado/php/lista.php?produto=" + produtoId;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ConectaServidor(xmlhttp.responseText);
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function ConectaServidor(response) {
        var dados = JSON.parse(response); 

        for (let i = 0; i < dados.length; i++) {
            if (dados[i].tb01_id == "vazio") {
                alert("Produto não encontrado, tente novamente");
            } else {
                let imageicon = "img/" + produtoId + ".jpg"; 
                if (imageicon != "") {
                    item.innerHTML = `<img src="${imageicon}" alt="Produto" style="width: 100%; height: 100%;">`;
                }

                document.getElementById('barra').innerHTML = dados[i].tb01_id;
            }
        }
    }

    fetch("http://localhost:8080/ProjetoMercado/php/lista.php?produto=" + produtoId)
        .catch(() => alert('Deu erro.'))
        .then(response => response.json())
        .then(data => {
            if (data[0].tb01_id === "vazio") {
                alert("Produto não encontrado");
                return;
            }

            const produto = data[0];
            const precoTotal = produto.tb01_preco * qtde;

            // armazena as informações no LocalStorage
            const index = localStorage.length + 1;
            localStorage.setItem("produto" + index, produto.tb01_nome);
            localStorage.setItem("preco" + index, produto.tb01_preco);
            localStorage.setItem("qtde" + index, qtde);

            // atualiza a tabela
            const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
            const novaLinha = tabela.insertRow();
            novaLinha.innerHTML = `
                <td>${produto.tb01_nome}</td>
                <td>R$ ${parseFloat(produto.tb01_preco).toFixed(2)}</td>
                <td>${qtde}</td>
                <td>R$ ${precoTotal.toFixed(2)}</td>
            `;

            totalAtual += precoTotal;
            document.getElementById("total").value = `R$ ${totalAtual.toFixed(2)}`;

            let valorRecebido = parseFloat(document.getElementById("recebido").value) || 0;
            adicionarRecebido(valorRecebido);

            const troco = valorRecebido - totalAtual;
            document.getElementById("troco").value = `R$ ${troco.toFixed(2)}`;

            atualizarQuantidade(produtoId, qtde);
        })
        .catch(error => {
            console.error("Erro ao buscar o produto:", error);
        });
}


function atualizarQuantidade(produtoId, qtde) {
    fetch("http://localhost:8080/ProjetoMercado/php/atualiza.php?produto=" + produtoId + "&qtde=" + qtde)
}

function adicionarRecebido(novoValor) {
    let totalRecebido = parseFloat(localStorage.getItem("recebido")) || 0;
    totalRecebido += novoValor;
    localStorage.setItem("recebido", totalRecebido);
}

function gerarNotaFiscal() {
    var geral = 0.00;
    var conteudo = "";

    for (var i = 1; i <= 99; i++) {
        var prod = localStorage.getItem("produto" + i);
        if (prod != null) {
            var vl = parseFloat(localStorage.getItem("preco" + i));
            var qt = parseInt(localStorage.getItem("qtde" + i));

            // Verifica se a quantidade é válida (maior que 0)
            if (qt > 0) {
                var totalProduto = vl * qt;
                geral += totalProduto;

                conteudo += "<br><h1 style='text-align: left; margin-left: 5%; font-size: 20px; line-height: 3px'>" + prod + "  " + "</h3>";	
                conteudo += "<h1 style='margin-left: 20%; text-align: left; font-size: 15px; line-height: 3px'>" + qt + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(vl.toFixed(2)) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalProduto.toFixed(2)) + "</h3>";	
            }
        }
    }

    const totalRecebido = parseFloat(localStorage.getItem("recebido")) || 0;
    const totalTroco = totalRecebido - geral;

    conteudo += "<br><br><br><p style='text-align: right; margin-right: 5%; font-size: 15px; line-height: 3px'>TOTAL: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(geral.toFixed(2)) + "</p>";
    conteudo += "<p style='text-align: right; margin-right: 5%; font-size: 15px; line-height: 3px'>RECEBIDO: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalRecebido.toFixed(2)) + "</p>";
    conteudo += "<p style='text-align: right; margin-right: 5%; font-size: 15px; line-height: 3px'>TROCO: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalTroco.toFixed(2)) + "</p>";

    document.querySelector('.ticket').innerHTML = conteudo;

    document.getElementById("produto").value = "";
    document.getElementById("qtde").value = "";
    document.getElementById("total").value = "";
    document.getElementById("recebido").value = "";
    document.getElementById("troco").value = "";
}

function finalizarCompra() {
    // Limpa o localStorage
    localStorage.clear();

    document.getElementById("foto").innerHTML = "";
    document.getElementById("barra").innerHTML = "";
    document.getElementById("produto").value = "";
    document.getElementById("qtde").value = "";
    document.getElementById("total").value = "";
    document.getElementById("recebido").value = "";
    document.getElementById("troco").value = "";

    totalAtual = 0;

    // Limpa a tabela
    const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    while (tabela.rows.length > 0) {
        tabela.deleteRow(0);
    }

    document.querySelector('.ticket').innerHTML = "";

    alert("Compra finalizada!");
}