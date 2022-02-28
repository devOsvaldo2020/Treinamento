const allButons = document.querySelectorAll("input"); // pega do html todos os inputs/botoes

allButons.forEach(button => button.addEventListener('click', (e) => {
    clearActiveButton(); // func apagar a class active
    e.target.classList.add('active'); // evento de add a class active
}));

const clearActiveButton = () => allButons.forEach(button => button.classList.remove('active'));
