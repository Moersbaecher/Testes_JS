let referencia = document.getElementById("referencia");
let mostrar = document.getElementById("mostrar");
let certo = document.getElementById("certo");
let errado = document.getElementById("errado");
let gif = document.getElementById("gif");
let inverter = document.getElementById("inverter");
let selecionaCor = document.getElementById("color");
let mostraCor = document.getElementById("mostraCor");

const files = ["A", "B", "C", "D", "E", "F", "G", "H"];

//======================================================   FUNCTIONS   ======================================================\\

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
       

//======================================================   FOR   ======================================================\\

for(let i = 8; i >= 1; i--) {
    for(let j = 0; j <= 7; j++) {
        const square = files[7 - j] + (9-i);
        cell = row.insertCell();
        cell.innerHTML = '';

        

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

    //=================================================   click   =================================================\\
    
        cell.addEventListener("click", function () {
            let add = 1;

           const square = selecionaCor.value == 'brancas'?files[j] + i:files[7 - j] + (9 - i);            

           console.log("clique / " + files[j] + i);

            if (square == referencia.innerHTML) {
                certo.innerHTML = parseInt(certo.innerHTML) + add;
                console.log("if " + square);
                certoPopup()
            } else {
                errado.innerHTML = parseInt(errado.innerHTML) + add;
                console.log("else " + square);
                erradoPopup()
            }


            if(i % 2 == 1 && j % 2 == 0 || i % 2 == 0 && j % 2 == 1){
                document.getElementById('mostraCor').style.backgroundColor = 'black';
            } else{
                document.getElementById('mostraCor').style.backgroundColor = 'white';
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

//===========================================================================================\\

