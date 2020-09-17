const cardBoard = document.querySelector("#cardBoard")

const images = [
    '001-cat.svg','002-horse.svg','003-gorilla.svg','004-snake.svg','005-toucan.svg', '006-jaguar.svg',
    
];

let HTML = '';

images.forEach(img =>{
    HTML += `
    <div class="memory-card" data-card="${img}">
        <img class="front" src= "images/${img}">
        <img class="back" src= "images/molecula.svg">
    </div>
    `
})

cardBoard.innerHTML = HTML + HTML;

/** Fim da renderização */

const cards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let lockCard = false;

function flipCard(){
    if(lockCard) return false;
    this.classList.add("flip");
    
    if(!firstCard){
    firstCard = this;
    return false
    }

    secondCard = this;

    checkForMatch();

}

function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card    
    !isMatch ? disableCards():true;
}

function disableCards(){
    lockCard = true;

    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        [firstCard, secondCard, lockCard ] = [null, null false]
        lockCard = false;
    }, 1000)
    
}

cards.forEach(card => card.addEventListener('click' , flipCard ));