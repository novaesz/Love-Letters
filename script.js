function encryptBinary(text) {
    let binaryText = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const binary = charCode.toString(2); // Converte o caractere para binário
        binaryText += binary + ' '; // Adiciona espaço para separar os caracteres binários
    }
    return binaryText;
}

function decryptBinary(binaryText) {
    const binaryArray = binaryText.trim().split(' '); // Divide os caracteres binários
    let decryptedText = '';
    for (const binary of binaryArray) {
        const charCode = parseInt(binary, 2); // Converte o binário de volta para o código de caractere
        decryptedText += String.fromCharCode(charCode);
    }
    return decryptedText;
}

document.getElementById("encryptButton").addEventListener("click", function () {
    const plaintext = document.getElementById("plaintext").value;
    const encryptedText = encryptBinary(plaintext);
    document.getElementById("encryptedText").textContent = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function () {
    const ciphertext = document.getElementById("ciphertext").value;
    const decryptedText = decryptBinary(ciphertext);
    document.getElementById("decryptedText").textContent = decryptedText;
});
