<?php
//Operadores de atribuição
$name = 'Gustavo'; //Atribuindo a string Gustavo para a variável name. Sinal de atribuição "='.

echo 'Gustavo' . 'Dias'; //Concatenando, juntando. O "." junta as strings.

$name = $name . 'Dias';
echo $name;
//============================================
//Se for usar a variável novamente para outra coisa com outro valor:
$name = 'Gustavo';
$name .= ' Dias';
echo $name;
//============================================
$number = 30;
$number += 20;
echo $number; //Mostra 50
//===========================================
$number = 30;
$number -= 20;
echo $number; //Mostra 10
//============================================
$number = 30;
$number *= 20;
echo $number; //Mostra 600
//============================================
$number = 30;
$number /= 20;
echo $number; //Mostra 1.5
//============================================
$number = 30;
$number %= 20;
echo $number; //Mostra 10
//============================================
//Operadores de Incremento/Decremento

$numero = 10;
echo ++$numero; //Pré incremento: ++ antes de chamar a variável - Somar +1

$numero = 10;
echo $numero++; //Pós incremento: vai pegar o valor atribuido na próxima x que chamar a variável.

$numero = 10;
echo --$numero; //Pré decremento - Subtrai 1

$numero = 10;
echo $numero--; //Pós decremento - Valor subtraído na próxima x que chamar a variável
?>