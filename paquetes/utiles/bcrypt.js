const bcrypt = require('bcrypt');

const password = '1234hola0101';

// bcrypt.hash(password, 5, function(err, hash){// el segundo parametro es el numero de rondas para aplicar el hash, es decir, para aplicar el algoritmo
//     console.log(hash);
//     // ¿Cómo comprobar que el hash realmente sea la password cifrada?
//     bcrypt.compare(password, hash, function(err, res){
//         console.log(res); // return true
//     })
// });

// CON PROMESAS

function encriptar(){
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 5, (err, hash) => {
            if(err){
                reject(err);
            }
            resolve(hash);
        })
    })
}

function comparar(data){
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, data, (err, res) => {
            if(err){
                reject(err);
            }
            resolve(res);
        })
    })
}

encriptar()
    .then(data => {
        console.log('La contraseña generada es: ' + data);
        return comparar(data); // para continuar con la promise chain se necesita un return
    })
    .then(data => {
        console.log('¿La contraseña es igual al hash? ' + data);
    })
    .finally(() => {
        console.log('gracias');
    })
    .catch(err => console.error(err));