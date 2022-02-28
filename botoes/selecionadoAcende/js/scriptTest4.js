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
    document.getElementById('btn1').classList.add('active'); // atribui um class
    document.getElementById('btn2').classList.remove('active'); // remove o class
    document.getElementById('btn3').classList.remove('active'); // remove o class   
}

let btn2 = function () {
    document.getElementById('btn2').classList.add('active'); // atribui um class
    document.getElementById('btn1').classList.remove('active'); // remove o class
    document.getElementById('btn3').classList.remove('active'); // remove o class
}
let btn3 = function () {
    
    document.getElementById('btn3').classList.add('active'); // atribui um class
    document.getElementById('btn1').classList.remove('active'); // remove o class
    document.getElementById('btn2').classList.remove('active'); // remove o class
    
}