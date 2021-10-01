const process = require('process'); // No hace falta traerlo porque ya viene dentro de los globales

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ya he salido, ahora solo funciono de manera sincrona y en el hilo principal, no en secundarios');
    setTimeout(() => {
        console.log('Esto NO se verá nunca');
    }, 0);
    console.log('Esto SÍ se verá');
});

// cuando hay excepciones que nadie ha capturado:

process.on('uncaughtException', (err, origin) => {
    console.log('Vaya, ha habido un error');
    // console.error(err);
})

hacerAlgo();

// process.on('unhandleRejection', () => {}) para promesas que se han rechazado pero no se capturan