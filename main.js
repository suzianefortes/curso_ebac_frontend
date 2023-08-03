document.getElementById("form").addEventListener("submit" , function(event) {
    event.preventDefault();
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        document.getElementById("resultado").textContent = "Formulário válido!";
        } else {
        document.getElementById("resultado").textContent = "Formulário inválido! O número B deve ser maior que o número A.";
    }
});
 