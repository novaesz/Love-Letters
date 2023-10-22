function encryptCesar(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (char === char.toLowerCase()) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
        }
        result += char;
    }
    return result;
}

function decryptCesar(text, shift) {
    return encryptCesar(text, 26 - shift);
}

document.getElementById("encryptButton").addEventListener("click", function () {
    const plaintext = document.getElementById("plaintext").value;
    const shift = 3; // O valor de deslocamento da cifra de César
    const encryptedText = encryptCesar(plaintext, shift);
    document.getElementById("encryptedText").textContent = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function () {
    const ciphertext = document.getElementById("ciphertext").value;
    const shift = 3; // O mesmo valor de deslocamento usado para criptografar
    const decryptedText = decryptCesar(ciphertext, shift);
    document.getElementById("decryptedText").textContent = decryptedText;
});
