const temporizador = (callback) => {
    setTimeout(() => {
        callback();
    }, 10000)
}

let operacion = () => console.log('Realizando operación')

console.log("Iniciando tarea") // 1
temporizador(operacion) // 2
console.log("¡Tarea finalizada!") // 3

/*
    Nuestro orden de salida va a ser:
        - 1
        - 3
        - 2

    ¿Por qué pasa esto?

    Porque nuestra función temporazador debe esperar 5000 milisegundos de forma asincrona mientras continuan ejecutandose las demas tareas.
*/