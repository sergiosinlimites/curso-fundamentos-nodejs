const fs = require('fs'); // viene instalado por defecto en el core de node
// TODO LO QUE SE HAGA CON FS SE HARÁ DE MANERA ASÍNCRONA

// todos los métodos tienen una alternativa sincrona pero no es recomendable ya que bloquea el hilo principal

function leer(ruta, callback){
    fs.readFile(ruta, (err, data) => {
        // leído
        callback(data.toString()); // por defecto lo manda en buffer
    })
}

function escribir(ruta, contenido, callback){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error('No se ha podido escribir' + err);
        } else {
            callback('Se ha creado el archivo');
        }
    });
}

function borrar(ruta, callback){
    fs.unlink(ruta, function(err){
        if(err){
            console.log('Hubo un error');
        } else {
            callback('Se eliminó correctamente');
        }
    })
}

// leer(__dirname + '/leer.txt', console.log);
// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// borrar(__dirname + '/archivo1.txt', console.log);

// USANDO PROMESAS
const fsprom = require('fs').promises;

const read = async (path, callback) => {
    try {
        const file = await fsprom.readFile(path, {encoding: 'utf-8'});
        callback(file);
    } catch (err) {
        console.error(err);
    }
}


const write = async (path, content, callback) => {
    try {
        const file = await fsprom.writeFile(path, content);
        callback('Creado correctamente');
    } catch (err) {
        console.error(err);
    }
}

const deleteFile = async (path, callback) => {
    try {
        fsprom.unlink(path);
        callback('Eliminado correctamente')
    } catch (err) {
        console.error(err);
    }
}

// read(__dirname + '/leer.txt', console.log);
// write(__dirname + '/archivo1.txt', 'Soy un nuevo archivo', console.log);
// deleteFile(__dirname + '/archivo1.txt', console.log);