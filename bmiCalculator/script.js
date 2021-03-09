// 
// BMI_Function
function calculateBMI() {
    
    // bmiBase
    let weigth = window.document.getElementById('weigth');
    let heigth = window.document.getElementById('heigth');

    let w = Number(weigth.value);
    let h = Number(heigth.value);

    const imc = w / (h * h);

    // DOM
    let base = window.document.getElementById('box');
    let calculator = window.document.getElementById('calculator');

    base.removeChild(calculator);

    let title = window.document.createElement('p');
    title.setAttribute('id', 'title');
    title.innerText = 'Seu IMC é: '

    let result = window.document.createElement('h4');
    result.setAttribute('id', 'result');
    result.innerText = `${imc.toFixed(2)}`;

    let message = window.document.createElement('p');
    message.setAttribute('id', 'message');

    let advice = window.document.createElement('a');
    advice.setAttribute('id', 'advice');
    advice.innerText = 'Veja dicas: ';

    let returnButton = window.document.createElement('a');
    returnButton.setAttribute('id', 'returnButton');
    returnButton.setAttribute('href', 'index.html')
    returnButton.setAttribute('class', 'btn btn-outline-primary')
    returnButton.innerText = 'Refazer';

    base.appendChild(title);
    base.appendChild(result);
    base.appendChild(message);
    base.appendChild(advice);
    base.appendChild(returnButton);

    // Result Conditions
    if (imc <= 18.5) {

        title +
            result +
            `${message.innerText = 'Abaixo do peso'}` +
            `${advice.setAttribute('href', 'https://www.minhavida.com.br/alimentacao/tudo-sobre/17566-como-engordar')}`
                `${advice.setAttribute('target', "_blank")}`

    } else if (imc >= 18.6 && imc <= 24.9) {

        title +
            result +
            `${message.innerText = 'Peso ideal'}` +
            `${advice.setAttribute('href', 'https://www.unimedfortaleza.com.br/blog/alimentacao/dicas-praticas-para-manter-o-peso-ideal')}`
                `${advice.setAttribute('target', "_blank")}`

    } else if (imc >= 25.0 && imc <= 29.9) {

        title +
            result +
            `${message.innerText = 'Levement acima do peso'}` +
            `${advice.setAttribute('href', 'https://www.minhavida.com.br/alimentacao/materias/20614-20-dicas-para-emagrecer-rapido-e-com-saude')}`
                `${advice.setAttribute('target', "_blank")}`

    } else if (imc >= 30.0 && imc <= 34.9) {

        title +
            result +
            `${message.innerText = 'Obesidade nível I'}` +
            `${advice.setAttribute('href', 'https://www.holmesplace.com/pt/pt/blog/nutricao/obesidade-5-medidas-para-combater-a-doenca')}`
                `${advice.setAttribute('target', "_blank")}`

    } else if (imc >= 35.0 && imc <= 39.9) {

        title +
            result +
            `${message.innerText = 'Obesidade nível II'}` +
            `${advice.setAttribute('href', 'https://www.holmesplace.com/pt/pt/blog/nutricao/obesidade-5-medidas-para-combater-a-doenca')}`
                `${advice.setAttribute('target', "_blank")}`

    } else if (imc >= 40.0) {

        title +
            result +
            `${message.innerText = 'Obesidade nível III'}` +
            `${advice.setAttribute('href', 'https://www.holmesplace.com/pt/pt/blog/nutricao/obesidade-5-medidas-para-combater-a-doenca')}`
                `${advice.setAttribute('target', "_blank")}`

    } else if (imc != Number || imc == ' ') {
        `${title.innerText = ' '}` +
            `${result.innerText = ' '}` +
            `${advice.innerText = ' '}` +
            `${message.style.color = '#FF0000'}` +
            `${message.innerText = 'Insira um valor válido!'}`
    }
}
// jquery to add "." on inputs
$(function () {
    $('#weigth').maskMoney({ decimal: '.', thousands: '', precision: 2 });
});
$(function () {
    $('#heigth').maskMoney({ decimal: '.', thousands: '', precision: 2 });
})







/*
    *Fontes:
        - https://www.minhavida.com.br/ - Minha vida;
        - https://www.unimedfortaleza.com.br/ - Unimed Fortaleza;
        - https://www.holmesplace.com/pt/pt/ - Holmes Place;
 */

