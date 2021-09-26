function soyAsincrona(myCallback){
    setTimeout(() => {
        console.log('Estoy siendo asíncrona');
        myCallback()
    }, 2000);
}

console.log('Iniciando proceso...');
soyAsincrona(function(){
    console.log('Terminando proceso')
})

// otro ejemplo

function hola(nombre, callback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        callback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log(`Adios ${nombre}`)
        otroCallback();
    }, 1500);
}

hola('Sergio', function(nombre){
    adios(nombre, function(){
        console.log('Terminando proceso');
    });
});