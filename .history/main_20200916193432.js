const cardBoard = document.querySelector("#cardBoard")

const images = [
    '001-cat',
    
];

let HTML = '';

images.forEach(img =>{
    HTML += `
    <div>
        <img src= " Images/${img}">
        <img src= " Img/">

    <div>
    `
})

cardBoard.innerHTML = HTML;

//Ícones feitos por <a href="https://www.flaticon.com/br/autores/dighital" title="Dighital">Dighital</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>