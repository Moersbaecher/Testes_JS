let referencia = document.getElementById("referencia");
let mostrar = document.getElementById("mostrar");
let certo = document.getElementById("certo");
let errado = document.getElementById("errado");

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
            var win = window.open("img/certo.gif", "myWindow", "height = 350, width = 350, resizable = 0");
            setTimeout(function () {
                win.close();
            }, 1000);
        }
    
        function errdoPopup() {
            var win = window.open("img/nope.gif", "myWindow", "height = 350, width = 350, resizable = 0");
            setTimeout(function () {
                win.close();
            }, 1000);
        }
    
        cell.addEventListener("click", function () {
            var add = 1;
    
            if (square == referencia.innerHTML) {
                certo.innerHTML = parseInt(certo.innerHTML) + add;
                certoPopup()
            } else {
                errado.innerHTML = parseInt(errado.innerHTML) + add;
                errdoPopup()
            }
    
            referencia.innerHTML = "";
            //console.log(certo.innerHTML);
            //console.log(add);
    
            setTimeout(function () {
                referencia.innerHTML = getRandomSquare();
            }, 1000);
    
    
        })
    }
    row = tabuleiro.insertRow();
}

document.getElementById("container").appendChild(tabuleiro);