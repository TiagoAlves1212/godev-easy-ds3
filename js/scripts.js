function verificarQuantidadeCaracteres(string) {
    const contador = {};

    for (const char of string) {
        if (contador[char]) {
            contador[char]++;
        } else {
            contador[char] = 1;
        }
    }

    const frequencia = contador[string[0]];

    for (const chave in contador) {
        if (contador[chave] !== frequencia) {
            return false;
        }
    }

    return true;
}

function verificar() {
    const inputString = document.getElementById('text').value;
    const resultado = verificarQuantidadeCaracteres(inputString);
    const resultDiv = document.getElementById('result');

    if (resultado) {
        resultDiv.textContent = "Todos os caracteres têm a mesma quantidade.";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Os caracteres não têm a mesma quantidade.";
        resultDiv.style.color = "red";
    }
}