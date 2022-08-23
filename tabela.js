//let tabela = document.getElementById('tabela');
let quadro = document.getElementsByTagName('td');




function alterar(){
    let color = ["lightgrey", "pink", "green", "red", "blue", 
    "orange", "purple", "darkblue", "lightgreen"];

    color = color.sort(() => Math.random() - 0.5);

        for(i=0;i<quadro.length;i++){            
            quadro[i].style.backgroundColor = color[i%9];
        }
        console.log(quadro.length);
}
