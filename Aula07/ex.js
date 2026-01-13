function retornaMaior(x, y){ //Retornar o maior
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
//let result = (retornaMaior(3, 2));
//console.log(result);
//===============================
//retornar se a imagem é horizontal ou vertical
function eHorizontal(width, height){
    if (width > height) {
        return true;
    } else { 
        return false;
    }   
}
//let resultado = eHorizontal(400, 300);
//console.log(resultado);
//==============================
// saber se um número é impar ou par
function ParouImpar(valor){
    if ( valor % 2 == 0 ) {
        return ("É par");
    } else { 
        return ("É impar");
    }
}
//let result = ParouImpar(9);
//console.log(result);
//=======================================
//Se input for divisivel por 3 = Fizz
//Se input for divisivel por 5 = Buzz
//Se input for divisivel por 3 e por 5 = fizzBuzz
//Se input não for divisivel por 3 e 5 = input
//Se input não for número = Not a number
function fizzBuzz(input) {
    if (typeof input !== "number") return "Não é um número"; 
    if (input % 3 === 0 && input % 5 === 0) return "fizzBuzz"
    if (input % 3 === 0) return "Fizz";
    if (input % 5 === 0) return "Buzz";
    return input;
}

//let result = fizzBuzz(11);
//console.log(result);
//======================================
const names = [
    "Hole-in-one!", //1
    "Eagle", // <= par - 2
    "Birdie", //par -1
    "Par", //par = par
    "Bogey", //par + 1
    "Double Bogey", // par + 2
    "Go home", // >= par + 3
];

function golfScore(Par, strokes) {
    if (strokes === 1) return /*acessar elementos dentro do array*/ names[0];
    if (strokes <= Par - 2) return names[1];
    if (strokes === Par - 1) return names[2];
    if (strokes === Par) return names[3];
    if (strokes === Par + 1) return names[4];
    if (strokes === Par + 2) return names[5];
    if (strokes >= Par + 3) return names[6];
}

//let result = golfScore(6, 10);
//console.log(result);
//=====================================
/*Construir radar
Limite 60km/h tolerancia 5km/h
66 recebe 1 ponto ate 70km/h
Dentro do limite: .velocidade
66 -90 .Pontos: pontos
Mais que 5 pontos carteira suspensa*/
function checarVelocidade(velocidade) {
    if (velocidade === 65) {
        console.log(velocidade);
    } else if (velocidade >= 66 && velocidade <= 70) {
        console.log("Pontos: 1");
    } else if (velocidade > 70 && velocidade <= 75) {
        console.log("Pontos: 2");
    } else if (velocidade > 75 && velocidade <= 80) {
        console.log("Pontos: 3");    
    } else if (velocidade > 80 && velocidade <= 85) {
        console.log("Pontos: 4");
    } else if (velocidade > 85 && velocidade <= 90) {
    } else if (velocidade > 90) {
        console.log("Carteira suspensa");
    

    //if (velocidade === 70) return "Pontos: 1";
    //if (velocidade === 75) return "Pontos: 2";
    //if (velocidade === 80) return "Pontos: 3";
    //if (velocidade === 85) return "Pontos: 4";
    //if (velocidade === 90) return "Pontos: 5";
    //if (velocidade > 90) return "Carteira suspensa";
}
}
checarVelocidade(76);

