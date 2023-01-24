// Instanciar la dependenci de FileSystem
const fs = require('fs');

fs.writeFileSync('./ejemplo.txt', "¡Hola Coders, estoy en un archivo!")
/*
    - Primera operación, para escribir un archivo el primero argumento es la ruta y el nombre de nuestro archivo
    - Segunda operación, es el contenido de nuestro archivo
*/

// Antes de leer un archivo, tenemos que verificar que exista
if(fs.existsSync('./ejemplo.txt')){
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido)
    /* 
        readFileSync va a leer el contenido del archivo y es importante que en el segundo parametro de la función, coloquemos el tipo de codificación que utilizaremos para leerlo.
    */
   fs.appendFileSync('./ejemplo.txt', 'Mas contenido')
   contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
   console.log(contenido)
   /*
        appendFileSync, primero va a buscar la ruta del archivo y si no la encuentra lo va a crear y en caso de que si exista, en lugar de pisar o sobreescribir el archivo solo colocara el contenido al final
   */
   fs.unlinkSync('./ejemplo.txt')
}