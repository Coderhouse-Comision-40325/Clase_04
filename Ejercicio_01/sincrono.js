// Ejemplo de una operación sincrona
console.log('¡Iniciando tarea!')
console.log('Realizado operacion')
console.log('Continuando operacion')
console.log('¡Tarea finalizada!')

/*
    Orden de salida:
        - ¡Iniciando tarea!
        - Realizando operación
        - Continuando operación
        - ¡Tarea finalizada!
*/

// Hasta aca todo en orden, cada tarea va detras de la otra
// ¿Qué pasaria si esto usara una funcion asincrona?