const fs = require('fs');
const stream = require('stream');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/archivo.txt')
readableStream.setEncoding('utf-8');
readableStream.on('data', (chunk) => {
    // console.log(chunk); // en lugar de poner .toString() se le puede decir que decodificación va a tener
    data += chunk;
});

// readableStream.on('end', () => {
//     console.log(data);
// })

// STREAM DE ESCRITURA

// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');

// BUFFER DE DOBLE SENTIDO, LEER UN DATO, MODIFICARLO Y ESCRIBIRLO
// vamos a tener que transformarlo

class Mayus extends stream.Transform{
    constructor(){
        super();
    }
    _transform(chunk, codif, cb){
        let chunkMayus = chunk.toString().toUpperCase()
        this.push(chunkMayus); // envía a donde se necesite
        cb()
    }
}

let mayus = new Mayus();
let readableStream = fs.createReadStream(__dirname + '/archivo.txt')

readableStream
    .pipe(mayus)
    .pipe(process.stdout);