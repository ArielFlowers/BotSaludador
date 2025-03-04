import saludar from "./saludador.js";

document.querySelector("#saludar-btn").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;

    const saludo = saludar(nombre);
    document.querySelector("#resultado").innerText = saludo;
});
