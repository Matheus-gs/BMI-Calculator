
function calcularImc(){

    var peso = window.document.getElementById('peso');
    var altura = window.document.getElementById('altura');
    var result = window.document.getElementById('result');
    var box = window.document.getElementById('boxresultado');

    var p = Number(peso.value);
    var a = Number(altura.value);

    var imc = p / (a * a);

    if(imc <= 18.5){
        result.innerHTML = `Abaixo do Peso, Seu IMC é de ${imc.toFixed(2)}!`
        box.style.backgroundColor = 'red';
    } else if (imc >= 18.6 && imc <= 24.9){
        result.innerHTML = `Peso Ideal, Seu IMC é de ${imc.toFixed(2)} parabéns!`
        box.style.backgroundColor = 'rgb(0,300,0)';
    } else if(imc >= 25.0 && imc <= 29.9 ) {
        result.innerHTML = `Levemente Acima do Peso, Seu IMC é de ${imc.toFixed(2)}!`
        box.style.backgroundColor = 'gold';
    } else if(imc >= 30.0 && imc <= 34.9){
        result.innerHTML = `Obesidade de nível 1, Seu IMC é de ${imc.toFixed(2)}!`
        box.style.backgroundColor = 'orange';
    } else if(imc >= 35.0 && imc <= 39.9){
        result.innerHTML = `Obesidade de nível 2, Seu IMC é de ${imc.toFixed(2)}!`
        box.style.backgroundColor = 'brown';
    } else if(imc>= 40.0){
        result.innerHTML = `Obesidade de Nível 3 (Grave), Seu IMC é de ${imc.toFixed(2)}!`
        box.style.backgroundColor = 'red';
    } 
}

