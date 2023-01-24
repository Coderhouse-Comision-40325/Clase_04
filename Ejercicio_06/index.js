const fs = require('fs')

const operacionesAsincronas = async() => {
    // Creamos nuestro archivo
    await fs.promises.writeFile('./ejemplo.txt', '¡Hola desde una promesa!')
    // Leemos nuestro archivo y lo mostramos en consola
    let resultado = await fs.promises.readFile('./ejemplo.txt', 'utf-8')
    console.log(resultado)
    // Modificamos nuestro archivo
    await fs.promises.appendFile('./ejemplo.txt', '\n Contenido adicional')
    // Releemos nuestro archivo
    resultado = await fs.promises.readFile('./ejemplo.txt', 'utf-8')
    console.log(resultado)
}

operacionesAsincronas()