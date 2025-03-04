import saludar from "./saludador.js";

document.querySelector("#saludar-btn").addEventListener("click", () => {

    const saludo = saludar();
    document.querySelector("#resultado").innerText = saludo;
});
