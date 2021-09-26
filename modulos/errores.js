// en síncrono

function otraFuncion(){
    seRompe();
}

function seRompe(){
    return 3 + z;
}

try {
    console.log('node propaga el error hacia arriba, hasta que esta es capturado. si el error no se captura node se detiene.')
    otraFuncion();
} catch (err) {
    console.log('Algo se ha roto');
    console.error(err.message);
}
console.log('Esto es lo último')

// en asíncrono

function seRompeAsincrono(cb){
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            console.log('Funcion asíncrona:')
            cb(err.message);
        }
    }, 1000);
}
// esto no funciona para capturar errores con funciones asíncronas, lo que se hace es meter el try catch dentro de la funcion asíncrona:

// try {
//     seRompeAsincrono();
// } catch (err) {
//     console.error(err.message);
// }

// esto si funciona

seRompeAsincrono(console.error);