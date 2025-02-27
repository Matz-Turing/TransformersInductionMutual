function calcular() {
    let vp = parseFloat(document.getElementById("vp").value);
    let np = parseFloat(document.getElementById("np").value);
    let ns = parseFloat(document.getElementById("ns").value);

    if (isNaN(vp) || isNaN(np) || isNaN(ns) || np === 0) {
        document.getElementById("resultado").innerHTML = "Insira valores válidos!";
        return;
    }

    let vs = (vp * ns) / np;
    document.getElementById("resultado").innerHTML = `Tensão de saída (Vs): <b>${vs.toFixed(2)}V</b>`;
}
