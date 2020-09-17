const cardBoard = document.querySelector("#cardBoard")

const images = [
    '001-cat.svg','002-horse.svg','003-gorilla.svg','004-snake.svg','005-toucan.svg', '006-jaguar.svg',
    
];

let HTML = '';

images.forEach(img =>{
    HTML += `
    <div class="memory-card">
        <img class="front" src= "images/${img}">
        <img class="back" src= "images/molecula.svg">
    </div>
    `
})

cardBoard.innerHTML = HTML + HTML;

/** Fim da renderização */

const cards = document.querySelectorAll()