
function perguntas () {

var pergunta1 = prompt("1 - Seguir para área de Front-End \n2 - Seguir para a área de Back- End", ["1 ou 2"]);

if (pergunta1 == 1) {
	var pergunta2FrontEnd = prompt("1 - Seguir para área de React \n2 - Seguir para a área de Vue", ["1 ou 2"]);
} else {
var pergunta3BackEnd = prompt("1 - Seguir para área de C# \n2 - Seguir para a área de Java", ["1 ou 2"]);
}
var pergunta4Area = prompt("1 - Seguir se especializando na área escolhida \n2 - Seguir se desenvolvendo para se tornar Fullstack", ["1 ou 2"]);

var pergunta5Area = prompt("Quais são as tecnologias nas quais você gostaria de se especializar?", ["Responda uma por vez"]);

while (pergunta5Area) {
	pergunta5Area = prompt("Tem mais alguma tecnologia que você gostaria de aprender?", ["Responda uma por vez"]);
}

}

perguntas();