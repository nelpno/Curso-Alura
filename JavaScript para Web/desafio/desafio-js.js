
const listaDeTeclas = document.querySelectorAll('input[type=button]');
const numeroTelefone = document.querySelector('input[type=tel]');

for (element of listaDeTeclas){
    const tecla = element;

    tecla.onclick = function () {
        numeroTelefone.value += tecla.value
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classlist.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classlist.add('ativa');
    }
}


