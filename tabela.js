let tabela = document.getElementById('tabela');
let quadro = document.getElementsByTagName('td');

console.log(quadro.length);


function alterar(){
    let color = ["lightgrey", "pink", "green", "red", "blue", 
    "orange", "purple", "lightblue", "lightgreen"];

    color = color.sort(() => Math.random() - 0.1);

        for(i=0;i<quadro.length;i++){            
            quadro[i].style.backgroundColor = color[i%9];
        }
}
