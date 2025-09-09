
 let nomes=[]
 let precos=[]
 let quantidades=[]
 let valorTotal = []





function cadastroProduto(){''

   

    document.getElementById('tabela').classList.add('hidden')
   document.getElementById('cadastro').classList.remove('hidden')

   



}


function salvar(){

    let nome = document.getElementById('nome')

    let preco = document.getElementById('preco')
   
   
    let quantidade = document.getElementById('quantidade')
   

nomes.push(nome.value)
precos.push(parseFloat(preco.value))
quantidades.push(parseInt(quantidade.value))

let total = parseFloat(preco.value) * parseInt(quantidade.value)
valorTotal.push(total)

alert("Cadastro realizado com sucesso!")

}

function cancelar(){

}