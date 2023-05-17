let campo1 = document.getElementById("campo1");
let campo2 = document.getElementById("campo2");
let botaoSoma = document.getElementById("botao-somar");
let botaoSubtrai = document.getElementById("botao-subtrair");
let botaoMultiplica = document.getElementById("botao-multiplicar");
let botaoDivide = document.getElementById("botao-dividir");
let resultado = document.querySelector('.area-resposta');


botaoSoma.addEventListener('click', () => {
    let soma = +campo1.value + +campo2.value;
    let resposta = `O Resultado = ${soma}`;
    resultado.innerHTML = resposta;
    resultado.style.display = 'block';

    campo1.value = "";
    campo2.value = "";
});

botaoSubtrai.addEventListener('click', () => {
    let sub = +campo1.value - +campo2.value;
    let resposta = `O Resultado = ${sub}`;
    resultado.innerHTML = resposta;
    resultado.style.display = 'block';

    campo1.value = "";
    campo2.value = "";
});

botaoMultiplica.addEventListener('click', () => {
    let multi = +campo1.value * +campo2.value;
    let resposta = `O Resultado = ${multi}`;
    resultado.innerHTML = resposta;
    resultado.style.display = 'block';

    campo1.value = "";
    campo2.value = "";
});

botaoDivide.addEventListener('click', () => {
    let div = +campo1.value / +campo2.value;
    if(+campo1.value == 0 || +campo2.value == 0) {
       let resposta = `Não podemos divir por 0`;
       resultado.innerHTML = resposta;
       resultado.style.display = 'block';
    } else {
        resposta = `O Resultado = ${div}`;
        resultado.innerHTML = resposta;
        resultado.style.display = 'block';

    }  

    campo1.value = "";
    campo2.value = "";
});