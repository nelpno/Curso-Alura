let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];

var compra = confirm("Deseja adicionar uma comida na sua lista de compras?");

while (compra == true) {
    var produto = prompt("Qual a comida que quer inserir na lista?");
    var categoria = prompt("Digite o número da categoria:.\n1-Frutas, 2-laticínios, 3-Congelados, 4-Doces")
    if (categoria == 1) {
        frutas.push(produto)
    }  
    if (categoria == 2) {
        laticínios.push(produto)
    }
    if (categoria == 3) {
        congelados.push(produto)
    }
    if (categoria == 4) {
        doces.push(produto)
    }

    compra = confirm("Deseja adicionar uma comida na sua lista de compras?");
}
document.write(`Frutas: ${frutas}.<br>Laticínios: ${laticínios}.<br>Congelados: ${congelados}.<br>Doces: ${doces}.`);
