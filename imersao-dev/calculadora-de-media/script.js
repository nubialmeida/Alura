var nome = "Nubia";
var notaDoPrimeiroBimestre = 9.4355;
var notaDoSegundoBimestre = 7.234;
var notaDoTerceiroBimestre = 4.234;
var notaDoQuartoBimestre = 2.183;

var notaFinal =
    (notaDoPrimeiroBimestre +
        notaDoSegundoBimestre +
        notaDoTerceiroBimestre +
        notaDoQuartoBimestre) /
    4;

var notaFixada = notaFinal.toFixed(1);

console.log("Bem vindo " + nome);
console.log(notaFixada);
