function saludar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla...');
            resolve(nombre);
        }, 1500);  
    })
}

function despedirse(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre);
            resolve(nombre);
            // reject(new Error('Hay un error'));
        }, 1500);
    });
}

// ejecución
console.log('Iniciando el proceso');
saludar('Sergio')
    .then(hablar) // si el parametro es el mismo no hace falta poner nombre => return console.log(nombre);
    .then(hablar)
    .then(despedirse)
    .finally(() => {
        console.log('Terminamos el proceso')
    })
    .catch(err => console.error(err));
