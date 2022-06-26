//código do carro

let xCarros = [530, 530, 530, 530, 530, 530];
let yCarros = [45, 100, 155, 215, 265, 325];
let velocidadeCarros = [2, 4, 5, 3, 2, 3.5];
let comprimentoCarro = 50;
let alturaCarro = 30;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 550;
    } 
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50
}