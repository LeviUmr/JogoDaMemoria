const cardBoard = document.querySelector("#cardBoard")

const images = [
    ''
];

let HTML = '';

images.forEach(img =>{
    HTML += `
    <div>
        <img src= " Imag/${img}">
        <img src= " Img/">

    <div>
    `
})

cardBoard.innerHTML = HTML;

//Ícones feitos por <a href="https://www.flaticon.com/br/autores/dighital" title="Dighital">Dighital</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>