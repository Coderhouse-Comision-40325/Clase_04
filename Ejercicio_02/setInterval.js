// Ejemplo de setInterval
let contador = () =>{
    let counter = 1;
    console.log('Realizando operación');
    let timer = setInterval(() => {
        console.log(counter++);
        if(counter > 5) {
            clearInterval(timer)
        }
    }, 1000)
}

// Al ser un intervalo la variable counter se ejecutara cada 1000 milisegundos (1 segundo)

console.log("¡Iniciando tarea!")
contador();
console.log("Finalizando tarea")