function saludar(nombre,genero,edad,idioma) {
    let saludo = "Hola";

    const hora = new Date().getHours();
    if (hora < 12) saludo = "Buenos días";
    else if (hora < 18) saludo = "Buenas tardes";
    else saludo = "Buenas noches";

    if (edad && edad > 30) {
        if (genero === "masculino") saludo += ", señor";
        else if (genero === "femenino") saludo += ", señora";
    } else {
        if (genero === "masculino") saludo += ", joven";
        else if (genero === "femenino") saludo += ", señorita";
    }

    if (nombre) {
        saludo += ` ${nombre}`;
    }

    if (idioma === "en") {
        saludo = saludo.replace("Buenos días", "Good morning")
                       .replace("Buenas tardes", "Good afternoon")
                       .replace("Buenas noches", "Good evening")
                       .replace("joven", "Mr.")
                       .replace("señorita", "Miss.")
                       .replace("señor", "Mr.")
                       .replace("señora", "Mrs.");
    }


    return saludo + "!";
}
export default saludar;
