
let produtos = []

function cadastroProduto() {

    document.getElementById('tabela').classList.add('hidden')
    document.getElementById('cadastro').classList.remove('hidden')


}


function salvar() {
    let nome = document.getElementById('nome')
    let preco = document.getElementById('preco')
    let quantidade = document.getElementById('quantidade')

    // Criando um objeto
    let produto = {
        nome: nome.value,
        preco: parseFloat(preco.value),
        quantidade: parseInt(quantidade.value),
        valortotal: parseFloat(preco.value) * parseInt(quantidade.value)
    }

    produtos.push(produto) //pegando o vetor e adicionando as informações do cadastro

    alert("Cadastro realizado com sucesso!")

    atualizarTabela()

}

function atualizarTabela() {
    cancelar()

    const corpo = document.getElementById('corpo')


    corpo.innerHTML= "" //ele está garantindo que as informações não se dupliquem.

    
    for (let i = 0; i < produtos.length ; i++) {
    const linha = document.createElement("tr")
    linha.innerHTML = `  
        <td>${produtos[i].nome}</td> 
        <td>${produtos[i].preco}</td> 
        <td>${produtos[i].quantidade}</td> 
        <td>${produtos[i].valortotal}</td> 
        <button onclick="excluir(${i})">excluir</button>  
    `// button para excluir
    corpo.appendChild(linha)

}
   

}

function excluir(i) {

    produtos.splice(i,1) //apagando no indice i na posição 1.
    atualizarTabela()


}



function cancelar() {

    document.getElementById('cadastro').classList.add('hidden')
    document.getElementById('tabela').classList.remove('hidden')
   

}