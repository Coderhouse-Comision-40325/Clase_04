// Instanciamos nuestra dependencia
const fs = require('fs')

// Creamos una constante a la cual le asignamos la funcion de fecha de Javascript
const fecha = new Date();

fs.writeFileSync('./fecha.txt', JSON.stringify(fecha))
fs.appendFileSync('./fecha.txt', '\n'+JSON.stringify(fecha))