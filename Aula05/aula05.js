/*Entender melhor sobre Variáveis
Variável: Local para armazenar informações que podem variar de valores.

=============== 3 meios para declarar variáveis =====================
var
let
const
*/
var pote = "Bombom"; //Armazena o texto "Bombom" na variável pote.
alert(pote); //Mostra o conteúdo da var pote no alerta.
//======================================
//Para declarar variáveis ex: nome / data_nascimento / dataNascimento / $nome.
//Não pode começar com número e nem palavra-chave do JS, ex:let
var a, b, c; //Declarando as variáveis

//Atribuindo valores
nome = "Gustavo";
sobrenome = "Dias";
nomeCompleto = nome +" "+ sobrenome;
                    // " " e + para dar um espaço
document.getElementById("texto").innerHTML = nomeCompleto;
var a, b, c;
 a = 2; //atribuindo valores para as variáveis
 b = 3;
 c = a + b;
alert(c);
 //Pode-se reatribuir valores usando o var.
var a = 6 //Reatribuindo valor
alert(a); //Mostra 6, não 2.
//==================================
let pessoa = "Gustavo";// let não deixa redeclarar uma variável
let x = 10; //aqui é 10
{
    let x = 2 // aqui é 2
}
document.getElementById("texto").innerHTML = x;//Vai mostrar o 10 pq segue o escopo.
//==========================
//const: constante, ela nunca vai mudar, sempre vai ser aquele valor determinado.
const d = 10;