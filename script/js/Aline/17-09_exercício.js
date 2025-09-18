// 1. Faça um programa que receba a idade da pessoa e informe se ela é maior ou menor de 18 anos.

var idade=18;
if (idade<18)
    { 
        console.log("Menor de idade");}
else
    {
    console.log("Maior de 18");
}

// 2. Faça um programa que receba a idade da pessoa e informe se o voto é: não pode votar, voto opcional, pode votar

if (idade >=18){
    console.log("Voto opcional.");
}else
    {console.log("Não pode votar.");
    
}

// 3.Faça um programa que receba a 3 notas do aluno, calcule a média e se a nota for maior que 6 aprovado, caso contrario reprovado.

var nota1 = 3;
var nota2 = 6;
var nota3 = 10;

var media = (nota1 + nota2 + nota3) / 3;

if (media <= 6){
    console.log("Reprovado");
}else
{
    console.log("Aprovado");
}

// 4. Faça um programa que demonstre se o número é positivo ou negativo.

var num1= -10;

if (num1 < 0){
    console.log ("Negativo");
    }
    
    else if (num1 > 0) {
        console.log("Positivo");
    } 
    else {
        ("Esse é zero.");
    }

// 5. Faça um programa que demonstre se o número é par ou impar

var resul
var num2=3

resul=(num2/2)

if (resul % 1 === 0){
    console.log ("O número é par.")
}else{
    console.log (" O número é impar.")
}

// 6. Faça um programa que classifique a pessoa: menor que 13 Criança, menor que 18 adolescente, menor que 60 adulto, maior que 60 idoso

var idade=65;

if(idade>=13 && idade<18) 
    {
    console.log("Adolescente");
}
else if(idade>=18 && idade<60)
    {
    console.log("Adulto");
}
else if(idade>=60)
    {
    console.log("Idoso");
}else{
    console.log("Criança")
}

// 7. Faça uma calculadora que faça as funções +,-,* e / . Utilizando a estrutura de decisão.

var num3 =4;
var num4 =3;
var funcao= ("/")

switch (funcao) {
    case "+":
        console.log(num3+num4);
        break;
    case "-":
        console.log(num3-num4);
        break;
    case "/":
        console.log(num3%num4);
        break;
    case "*":
        console.log(num3*num4);
        break;
}
