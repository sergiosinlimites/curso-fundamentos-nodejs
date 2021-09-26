// console.log y console.info en el caso más básico son iguales, pero más avanzado se puede usar
// log para guardar cosas en la consola
// info para guardar información sobre cosas menos relevantes

console.log('Algo')
console.info('Algo')

// console.error y console.warn

console.error(new Error('Error'));
console.warn('Advertencia de potencial error');

// console.table
// muestra datos en forma de tablas
let tabla = [
    {
        nombre: 'Sergio',
        apellido: 'Bolaños'
    },
    {
        nombre: 'Andrés',
        apellido: 'Penagos'
    }
]

console.table(tabla);

// console.group
// agrupar varios logs que tengan relación

function funcion1(){
    console.group('funcion 1');
    console.log('Inicio de funcion 1');
    funcion2();
    console.log('Fin de funcion 1');
    console.groupEnd('funcion 1');
}

function funcion2(){
    console.group('Conversacion');
    console.log('Inicia funcion 2');
    console.log('Bla');
    console.log('Bla');
    console.log('Bla');
    console.log('Bla');
    console.log('Finaliza funcion 2');
    console.groupEnd('Conversacion');
}

funcion1();

// console.count
// para contadores

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');

// para limpiarlo

console.countReset('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');

// timers

console.time('cronometro');
console.timeEnd('cronometro');

// limpiar consola

// console.clear();