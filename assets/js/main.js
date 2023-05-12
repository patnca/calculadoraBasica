let campo1 = parseInt(document.getElementById("campo1").value);
let campo2 = parseInt(document.getElementById("campo2").value);
let botaoSoma = document.getElementById("botao-somar");
let resultado = document.querySelector('.area-resposta');


botaoSoma.addEventListener('click', () => {
    let soma = campo1 + campo2;
    let resposta = `O Resultado = ${soma}`;
    resultado.innerHTML = resposta;
    resultado.style.display = 'block';

    campo1 = "";
    campo2 = "";
});