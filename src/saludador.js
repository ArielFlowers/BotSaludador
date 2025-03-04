function saludar(nombre) {
    let saludo = "Hola";

    if (nombre) {
        saludo += `, ${nombre}`;
    }
    return saludo + "!";
}
export default saludar;
