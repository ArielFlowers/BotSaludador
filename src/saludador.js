function saludar(nombre) {
    let saludo = "Hola";

    const hora = new Date().getHours();
    if (hora < 12) saludo = "Buenos días";
    else if (hora < 18) saludo = "Buenas tardes";
    else saludo = "Buenas noches";
    
    if (nombre) {
        saludo += `, ${nombre}`;
    }

    return saludo + "!";
}
export default saludar;
