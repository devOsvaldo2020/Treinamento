const btns = document.querySelectorAll("input"); // pega do html todos os inputs/botoes

// loop para escolher o botao selecionado
btns.forEach((element) => { // faz um for em todos os botoes
    element.addEventListener("click", () => { // inicia o teste só no click
        if (element.getAttribute('id') == 'btn1') { // verifica qual é o id selecionado
            btn1(); // chama a funcao abaixo
        }
        if (element.getAttribute('id') == 'btn2') { // verifica qual é o id selecionado
            btn2(); // chama a funcao abaixo
        }
        if (element.getAttribute('id') == 'btn3') { // verifica qual é o id selecionado
            btn3(); // chama a funcao abaixo
        }
    });
});

// funcoes
let btn1 = function () {
    document.getElementById('btn1').setAttribute('style', 'background: red'); // atribui um stylo
    document.getElementById('btn2').removeAttribute('style'); // remove o stylo
    document.getElementById('btn3').removeAttribute('style'); // remove o stylo   
}

let btn2 = function () {
    document.getElementById('btn2').setAttribute('style', 'background: red'); // atribui um stylo
    document.getElementById('btn1').removeAttribute('style'); // remove o stylo
    document.getElementById('btn3').removeAttribute('style'); // remove o stylo
}
let btn3 = function () {
    document.getElementById('btn3').setAttribute('style', 'background: red'); // atribui um stylo    
    document.getElementById('btn1').removeAttribute('style'); // remove o stylo
    document.getElementById('btn2').removeAttribute('style'); // remove o stylo
    
}