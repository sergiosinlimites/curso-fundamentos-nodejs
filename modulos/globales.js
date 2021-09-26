// son módulos que ya vienen incluidos en NodeJS, ejemplo: console, setInterval, setTimeout, etc

// console.log(global);

let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    i++;
    if(i === 3){
        clearInterval(intervalo); // detiene el intervalo cuando i === 3
    }
}, 1000);
// esto sirve para por ejemplo si se quiere verificar cada cierto tiempo la conexión a una API;

setImmediate(() => { // realiza esto de una al iniciar el programa
    console.log('De una');
});

// TODO EL SISTEMA DE MÓDULOS

// require(modulo)
// export.modules
console.log(process);

// ACCEDER AL LUGAR DONDE ESTAMOS Y AL ARCHIVO
console.log(__dirname);
console.log(__filename); // esto sirve mucho para acceder a archivos

// VARIABLES GLOBALES
// SI PUEDES NO USARLAS, NO LAS USES, SON UN FOCO DE PROBLEMAS.

global.miVariable = 'elValorEsEste';
console.log(miVariable);