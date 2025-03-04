import saludar from "./saludador.js";

document.querySelector("#saludar-btn").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
    const genero = document.querySelector("#genero").value;
    const edad = parseInt(document.querySelector("#edad").value);

    const saludo = saludar(nombre, genero,edad);
    document.querySelector("#resultado").innerText = saludo;
});
