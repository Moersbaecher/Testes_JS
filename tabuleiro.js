let referencia = document.getElementById("referencia");
let mostrar = document.getElementById("mostrar");
let certo = document.getElementById("certo");
let errado = document.getElementById("errado");
let gif = document.getElementById("gif");

const files = ["A", "B", "C", "D", "E", "F", "G", "H"];

function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomSquare() {
    return files[getRandomNumber(0, 7)]+getRandomNumber(1, 8);
}

mostrar.addEventListener("click", function () {
    referencia.innerHTML = getRandomSquare();
})


let tabuleiro = document.createElement("table"),
    row = tabuleiro.insertRow(), cell;

for(let i = 8; i > 0; i--) {
    for(const file of files) {
        const square = file+i;
        cell = row.insertCell();
        cell.innerHTML = "";
    
    
        function certoPopup() {
            gif.style.backgroundImage = "url(img/certo.gif)";
            setTimeout(function () {
                gif.style.backgroundImage = "";
            }, 1000);
        }
    
        function erradoPopup() {
            gif.style.backgroundImage = "url(img/nope.gif)";
            setTimeout(function () {
                gif.style.backgroundImage = "";
            }, 1000);
        }
    
        cell.addEventListener("click", function () {
            var add = 1;
    
            if (square == referencia.innerHTML) {
                certo.innerHTML = parseInt(certo.innerHTML) + add;
                certoPopup()
            } else {
                errado.innerHTML = parseInt(errado.innerHTML) + add;
                erradoPopup()
            }
    
            referencia.innerHTML = "";
    
            setTimeout(function () {
                referencia.innerHTML = getRandomSquare();
            }, 100);
    
    
        })
    }
    row = tabuleiro.insertRow();
}

document.getElementById("container").appendChild(tabuleiro);