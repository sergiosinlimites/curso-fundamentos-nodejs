const { exec, spawn } = require('child_process');
const { stderr } = require('process');
const { stdout } = require('process');
// es EXACTAMENTE EQUIVALENTE a poner:
// const exec = require('child_process).exec;

// exec('ls -la', (err, stdout, stderr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// });

// exec('node modulos/consola.js', (err, stdout, stderr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// });

let proceso = spawn('ls', ['-la']);
// console.log(proceso.pid);
// console.log(proceso.connected);

// podemos escuchar lo que pasa
// node está orientado a eventos.

proceso.stdout.on('data', function(datos){
    console.log('¿Está muerto?')
    console.log(proceso.killed); // le preguntamos si está muerto
    console.log(datos.toString());
});

proceso.on('exit', function(){
    console.log('¿Está muerto?')
    console.log(proceso.killed); // le preguntamos si está muerto
    console.log('El proceso ha terminado')
})