console.time('programa total:');

console.time('suma 1:')
let suma = 0;
for(let i = 0; i < 1000000; i++){
    suma += (2*i);
}
console.timeEnd('suma 1:')

console.time('suma 2:')
let suma2 = 0;
for(let j = 0; j < 10000000; j++){
    suma2 += j;
}
console.timeEnd('suma 2:')

function asincrona(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Estamos dentro de la asícrona');
            resolve();
        }, 1000);
    })
}

console.time('asincrono');
asincrona()
    .then(() => { console.timeEnd('asincrono')})

console.timeEnd('programa total:');