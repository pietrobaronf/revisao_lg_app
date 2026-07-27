function calcular(){
    var nome = document.getElementById('nome').value 
    var nota1 = parseFloat(document.getElementById('nota1').value)
    var nota2 = parseFloat(document.getElementById('nota2').value)
    var nota3 = parseFloat(document.getElementById('nota3').value)
 
    var media = (nota1 + nota2 + nota3) / 3
 
    var res = (media * 3).toFixed(2)

    var print = `Seu nome é ${nome}, sua média foi ${media.toFixed(2)}, com a multiplicação o valor fica: ${res}.`

    document.getElementById('resposta').textContent = print
}