/* Funções
É um bloco de código projetado para executar uma tarefa específica.

Uma função javascript é executada quando "algo" a invoca (chama-a). */

//Função de soma
function soma(valor1, valor2){ //colocar parâmetros dentro dos parenteses(ou não)
    return valor1 + valor2;
}
//Função de cotação do dolar
function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;
var total = realParaDolar(valorReal, cotacao);
alert("O valor em real é R$: " + valorReal + " o valor em dolar U$ é : " + total);

function alertaHello(){
    alert("Olá pessoal");
}

alertaHello(); //Chamando a função

function paraCelcius(valorFahreinheit){
    return(5/9) * (valorFahreinheit - 32);
}

var x = paraCelcius(77);
alert("A temperatura é de " + x +" graus celsius");
//Para chamar uma função é só colocar o nome dela ();