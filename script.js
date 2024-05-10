let botaoLimpar = document.getElementById("botao-limpar");
botaoLimpar.addEventListener("click", limpar);

let botaoAdicionar = document.getElementById("botao-adicionar");
botaoAdicionar.addEventListener("click", adicionar);




/* FUNCOES  */


function adicionar() {
    let itemUsuario = document.getElementById("item-usuario").value
    if (itemUsuario.trim() !== ""){
        
        
        let novoItem = document.createElement("p");
        novoItem.textContent = itemUsuario;

        let botaoExcluir = document.createElement("button");
        botaoExcluir.classList.add("botao-excluir-item")
        botaoExcluir.textContent = "Excluir";

        botaoExcluir.addEventListener("click", function (){
            novoItemDiv.parentNode.removeChild(novoItemDiv);
        });

        let botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar-item")
        botaoEditar.textContent = "Editar";

        botaoEditar.addEventListener("click", function(){
            let novoTexto = prompt("Editar item:", novoItem.textContent);
            if (novoTexto !== null && novoTexto.trim() !== ""){
                novoItem.textContent = novoTexto;
            }
        });

        let novoItemDiv = document.createElement("div");
        novoItemDiv.classList.add("item-div");

        novoItemDiv.appendChild(novoItem);
        novoItemDiv.appendChild(botaoExcluir);
        novoItemDiv.appendChild(botaoEditar);
        
        let lista = document.getElementById("lista-adicionada");

        lista.appendChild(novoItemDiv);

        document.getElementById("item-usuario").value = "";
        
    }else{
        alert("Digite um item válido");
    }

    salvaItemNoHistorico(itemUsuario)
}

function limpar() {
    let lista = document.getElementById("lista-adicionada");
    
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

let botaoHistorico = document.getElementById("botao-historico");
botaoHistorico.addEventListener("click", exibirHistorico);

function salvaItemNoHistorico(novoItem){

    let historico = recuperaHistoricoDeItens ();

    historico.push(novoItem);

    localStorage.setItem("historico", JSON.stringify(historico));
}

function recuperaHistoricoDeItens() {
    let historico = localStorage.getItem("historico");

    if(!historico){
        console.log("historico está vazio")
        return [];
    }
    return JSON.parse(historico);
}

function exibirHistorico(){
    let historicoItens = recuperaHistoricoDeItens();
    let historicoString = "";
    if(historicoItens.length > 0) {
        console.log("Histórico de itens:\n");
        historicoItens.forEach(function(item) {
            historicoString += "- " + item + "\n";
        });
        alert(historicoString);
    } else {
        console.log("Nenhum item no histórico")
    }
}




/* */