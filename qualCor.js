let referencia = document.getElementById("referencia");
let mostrar = document.getElementById("mostrarBtn");
let certo = document.getElementById("certo");
let errado = document.getElementById("errado");
let gif = document.getElementById("gif");
let inverter = document.getElementById("inverter");
let selecionaCor = document.getElementById("color");
let mostraCor = document.getElementById("mostraCor");
let blackBtn = document.getElementById("pretaBtn");
let whiteBtn = document.getElementById("brancaBtn");

const files = ["A", "B", "C", "D", "E", "F", "G", "H"];

let tabuleiro = document.createElement("table"),
    row = tabuleiro.insertRow(), cell;

//======================================================   FUNCTIONS   ======================================================\\

function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomSquare() {
    return files[getRandomNumber(0, 7)]+getRandomNumber(1, 8);
}

let show = function show() {
    referencia.innerHTML = getRandomSquare();
}();


//======================================================   FOR   ======================================================\\

for(let i = 8; i >= 1; i--) {
    for(let j = 0; j <= 7; j++) {
        const square = files[7 - j] + (9-i);
        cell = row.insertCell();
        cell.innerHTML = files[j] + i;

       /* function showSquare() {
            if(document.getElementById("showSquare").checked === true){
                cell.innerHTML = '';
              }
        }*/


        function certoPopup() {
            gif.style.backgroundImage = "url(img/certo.gif)";
            setTimeout(function () {
                gif.style.backgroundImage = "";
            }, 1500);
        }
    
        function erradoPopup() {
            gif.style.backgroundImage = "url(img/nope.gif)";
            setTimeout(function () {
                gif.style.backgroundImage = "";
            }, 1000);
        }

        let blacks = (i % 2 == 1 && j % 2 == 0 || i % 2 == 0 && j % 2 == 1);

    //=================================================   BTNs   =================================================\\
       
        pretaBtn.addEventListener("click", function () {
            let add = 1;

            const square = files[j] + i;
            console.log("clique / " + (files[j] + i ));

              if (square == referencia.innerHTML && blacks) {
                certo.innerHTML = parseInt(certo.innerHTML) + add;
               // console.log("if " + square);
                certoPopup();
            } else {
                //console.log("if " + square);
                erradoPopup();
            };

            setTimeout(function () {
                referencia.innerHTML = getRandomSquare();
            }, 100);    
        });

        brancaBtn.addEventListener("click", function () {
            let add = 1;

              if ((files[j] + i) == referencia.innerHTML && !blacks) {
                certo.innerHTML = parseInt(certo.innerHTML) + add;
                certoPopup();
            }/* else {
                erradoPopup();
            };  */         
        
            setTimeout(function () {
                referencia.innerHTML = getRandomSquare();
            }, 100);    
        });
    //=================================================   BTNs fim  =================================================\\

    }
    row = tabuleiro.insertRow();    
};

//======================================================   FOR fim   ======================================================\\

document.getElementById("container").appendChild(tabuleiro);

//===========================================================================================================================================\\

