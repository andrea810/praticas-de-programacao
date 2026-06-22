function alterarQtd(produto, acao){

    const qtd = document.getElementById('qtd_' + produto)
    const preco = document.getElementById('preco-' + produto)
    const total = document.getElementById('total_' + produto)

    if(acao == '-' && qtd.innerHTML == 0){
        alert('A quantidade do produto selecionado não pode ser menor que 0!')
    }else{
      acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
      const valorTotal = qtd.innerHTML * somenteNumeros(preco.innerHTML)
      total.innerHTML = formatarValor(valorTotal)
      soma()
    }

}

function soma(){

    let soma = 0

    for(let i = 1; i < 4; i++){
        let numero = somenteNumeros(document.getElementById('total_' + i).innerHTML)
        soma += Number(numero)
    }
    document.getElementById('subtotal').innerHTML = formatarValor(soma)

}

function somenteNumeros(n){
    return n.replace(/\D/g, '')

}

function formatarValor(n){
    return 'R$' + n.toLocaleString('pt-BR')
}
    
    
