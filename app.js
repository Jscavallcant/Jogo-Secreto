alert('Boas vindas ao jogo do número secreto');

// let = variavél
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// while = enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);



// if = se (verdadeiro)
    if (chute == numeroSecreto) {
        break;

    // else = senão (Falso)        
    } else {
        if (chute > numeroSecreto ) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        // tentativa = tentativa + 1;
        tentativas++;
    }
}   

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa.';
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
