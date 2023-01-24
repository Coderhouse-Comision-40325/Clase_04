const fs = require("fs");
fs.writeFile("./ejemplo.txt", "Hola desde un callback", (error) => {
  if (error) return console.log("Error al escribir el archivo");
    fs.readFile("./ejemplo.txt", "utf-8", (error, resultado) => {
        if (error) return console.log("Error al leer el archivo");
            console.log(resultado);
                fs.appendFile("./ejemplo.txt", "Otro cotenido", (error) => {
                    if (error) return console.log("Error al actualizar el archivo");
                        fs.readFile("./ejemplo.txt", "utf-8", (error, resultado) => {
                            if (error) return console.log("Error al leer el archivo");
                                console.log(resultado);
                                });
                            });
                        });
                    });