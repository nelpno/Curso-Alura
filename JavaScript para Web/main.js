function tocaSom (seletorAudio){
   const elemento = document.querySelector(seletorAudio);

   if (elemento && elemento.localName === 'audio') {
        elemento.play()
   }    
   else {
            alert('Elemento não encontrado ou seletor inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (element of listaDeTeclas) {

    const tecla = element;
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa'); 
        }
        
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa'); 
    } 
}
