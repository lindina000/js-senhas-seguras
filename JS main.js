consst numeroSenha = document.querySelectorAll('.paramento-senha__texto');
const botoes = document. querySelectorAll('.paramentro-senha__botao');

let tamanhoSenha = 12;

botoes[0].onclick = diminui Tamanho;
botoes[1].onclick = aumenta Tamanho;

function diminue Tamanho() {
    if (tamanhoSenha > 1) {
    tamanhoSenha = tamanhoSenha - 1;
}
numeroSenha.textcontent = tamanhoSenha  
}
        
    function aumentaTamanho() {
        if (tamanhoSenha > 20) {
        tamanhoSenha = tamanhoSenha + 1;
    }
numeroSenha.textcontent = tamanhoSenha
}