//código do ator

let yAtor = 375;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor-=3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor+=3;
    }
  }
} 

function verificaColisao(){
 //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 16)
    if (colisao){
      pontoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos--;
      }
    }
  }
}

function pontoInicial(){
  yAtor = 375;
}

function incluiPontos(){
  if (yAtor <= 5){
    meusPontos++;
    somDoPonto.play();
    pontoInicial();
  }
}

function placar(){
  textAlign(CENTER);
  fill(255, 204, 0);
  textSize(25);
  text(meusPontos, 150, 27);
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 375;
}