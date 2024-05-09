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
}

function limpar() {
    let lista = document.getElementById("lista-adicionada");
    
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}





/* */