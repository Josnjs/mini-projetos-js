function calcular() {

    nome = document.getElementById("nome").value;
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;


    imc = (peso / (altura * altura)).toFixed(2);

    situaco = "";

    if (imc < 18.5) {
        situacao = "abaixo do peso.";
    } else if (imc < 25) {
        situacao = "normal";
    } else if (imc < 30) {
        situacao = "em estado de sobrepeso.";
    } else if (imc < 40) {
        situacao = "em estado de obesidade!";
    } else {
        situacao = "com obesidade grave!";
    }

    resultadoFinal = `${nome} seu índice é ${imc}, você está ${situacao}`;

    if (nome == "" || peso == "" || altura == "") {

        document.getElementById("text").innerText = "Preencha todos os campos, por favor!";

    } else {

        document.getElementById("result").innerHTML = resultadoFinal;

    }

}








