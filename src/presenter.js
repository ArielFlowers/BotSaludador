import saludar from "./saludador.js";

document.querySelector("#saludar-btn").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
    const genero = document.querySelector("#genero").value;

    const saludo = saludar(nombre, genero);
    document.querySelector("#resultado").innerText = saludo;
});
