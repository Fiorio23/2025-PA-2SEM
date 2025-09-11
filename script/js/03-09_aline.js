// Faça um programa que responda se a pessoa é menor ou maior de idade pela sua variável.
var idade=18;
if (idade<18)
    { 
        console.log("Menor de idade");
    }
else
{
    console.log("Maior de 18");
}

if (idade >=18){
    console.log("Pode dirigir");
}else
    {console.log("Não pode dirigir");
    
}
// Faça um programa que responda com "Bom dia", "Boa tarde", "Boa noite" ou "Boa madrugada" a depender do horário.
var hora=6;

if(hora>=6 && hora<12) 
    {
    console.log("Bom dia");
}
else if(hora>12 && hora<18)
    {
    console.log("Boa tarde");
}
else if(hora>18 && hora<24)
    {
    console.log("Boa noite");
}else{
    console.log("Boa madrugada")
}

// Faça um programa que te responda se é fim de semana ou um dia útil.

var dia="Sábado"


if (dia==="Domingo" || dia==="Sábado"){
    console.log("Hoje é fim de semana")
}
else{
    console.log("Dia útil")
}