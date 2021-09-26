function hola(nombre, callback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        callback(nombre);
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(()=>{
        console.log('Bla bla bla...');
        callbackHablar();
    }, 1500)
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log(`Adios ${nombre}`)
        otroCallback();
    }, 1500);
}

function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(()=>{
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
    
}
/* 
console.log('Iniciando proceso...');
hola('Sergio', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado...');
    });
});
 */

/*
hola('Sergio', function(nombre){
    adios(nombre, function(){
        console.log('Terminamos');
    });
});
*/

/* 
hola('Sergio', function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function(){
                    console.log('Terminando proceso...');
                });
            });
        });
    });
}); 
*/

// Esto de aqui arriba no se ve muy bien ni muy legible
//TIPS PARA EVITAR EL CALLBACK HELL
// 1. Crear funciones y no dejarlo dentro del callback hell, ahí solo se llama
// 2. Usar funciones intermedias que hagan funcionalidades más grandes.

function entrar(nombre, callback){
    console.log('Has entrado');
    callback(nombre);
}

function presentarse(nombre, tema, callback){
    console.log('Buenas tardes a todos, mi nombre es ' + nombre);
    console.log('El día de hoy les estaré hablando sobre ' + tema);
    callback(nombre);
};

entrar('Sergio', function(nombre){
    presentarse(nombre, 'Critica al planeta de los simios', function(nombre){
        conversacion(nombre, 4, function(){
            console.log('*Sale del escenario*');
        });
    });
});
