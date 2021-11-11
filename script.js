let tabela = document.getElementById('tabela');
let linha = document.getElementsByTagName('tr')

console.log(linha.length)


color = ["lightgrey", "pink", "green", "red", "blue", "orange", "purple", "lightblue", "lightgreen"];
for(i=0;i<linha.length;i++){
        linha[i].style.backgroundColor = color[i%9];
}