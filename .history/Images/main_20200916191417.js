const cardBoard = document.querySelector("#cardBoard")

const images = [
    ''
];

let HTML = '';

images.forEach(img =>{
    HTML += `
    <div>
        <img src= " img/${img}">
        <img src= " img/">

    <div>
    `
})

cardBoard.innerHTML = HTML;

//Minha coleção de ícones