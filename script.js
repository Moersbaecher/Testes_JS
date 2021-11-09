let tabela = document.getElementById('tabela');
let linha = document.getElementsByTagName('tr')

console.log(linha.length)

for(i=0;i<linha.length;i++){
    if(i%2==0) linha[i].style.backgroundColor = 'lightgrey';
}