function promptInt(mensagem, tenteNovamente) {
    var msg = mensagem;
    while (true) {
        var ret = parseInt(prompt(msg));
        if (!isNaN(ret)) return ret;
        msg = tenteNovamente;
    }
}

var valorRandom = Math.floor(Math.random() * 10);
console.log(valorRandom);

var count = promptInt("Qual é seu chute de 0 a 10?", "Por favor, digite um número.\nChute um número de 0 a 10.");

for (var tentativa = 1; tentativa < 3; tentativa++){
    if (valorRandom == count){
        alert("Parabéns, você acertou!");
        break;
    } else {
        alert("Errou! Tente novamente.");
        promptInt("Qual é seu chute de 0 a 10?", "Por favor, digite um número.\nChute um número de 0 a 10.");
    }
}

if (valorRandom != count) {
    alert(`Acabaram as tentativas. O número sorteado foi ${valorRandom}`+".");
}
