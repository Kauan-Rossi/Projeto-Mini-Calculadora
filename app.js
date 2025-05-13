let conta;
let num1, num2;
let imagemSinais


function botoesConta(){
    num1 = parseInt(document.getElementById("primeiro-numero").value);
    num2 = parseInt(document.getElementById("segundo-numero").value); 
}   

function botaoAdicao(){
    botoesConta()
    conta= num1+num2;
    document.getElementById("mostrar-numero").value = conta;
    imagemSinais = document.getElementById("imagem-sinais")
    imagemSinais.src="./imagens/imagemAdição.png"
}
function botaoSubtracao(){
    botoesConta()
    conta= num1-num2;
    document.getElementById("mostrar-numero").value = conta;
    imagemSinais = document.getElementById("imagem-sinais")
    imagemSinais.src="./imagens/imagemSubtração.png"
}
function botaoMultiplicacao(){
    botoesConta()
    conta= num1*num2;
    document.getElementById("mostrar-numero").value = conta;
    imagemSinais = document.getElementById("imagem-sinais")
    imagemSinais.src="./imagens/imagemMultiplicação.png"
}
function botaoDivisao(){
    botoesConta()
    conta= num1/num2;
    document.getElementById("mostrar-numero").value = conta;
    imagemSinais = document.getElementById("imagem-sinais")
    imagemSinais.src="./imagens/imagemDivisão.png"
}


