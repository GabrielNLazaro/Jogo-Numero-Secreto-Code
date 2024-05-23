let listaDeNumerosSorteados =[];
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function mostrarTexto(tag , texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
mostrarTexto('h1', "jogo do número secreto");
mostrarTexto('p', "Escolha um numero entre 1 e 10");
}
mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto);
    if (chute == numeroSecreto){
        mostrarTexto('h1', 'Você acertou!');
        let palavratentativa = tentativas > 1 ? ' tentativas!' : ' tentativa!';
        let mensagemTentativa = 'Você descobriu o número secreto! Com ' + tentativas + palavratentativa;
        mostrarTexto('p', mensagemTentativa );
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else {
        if(chute < numeroSecreto){
            mostrarTexto('p', 'O numero secreto é maior!');
        }else {
            mostrarTexto('p', 'O numero secreto é menor!');
        }
        tentativas++;
        limparCampo();
    }
}
function numeroAleatorio () {
   numeroEscolhido = parseInt(Math.random() *10 + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == 10){
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return numeroAleatorio();
   }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}