function asincrono(callback){
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (err) {
            callback(err); // se puede dejar el segundo vacio o como null
        }
    }, 1000);
}

asincrono(function(err, data){
    if(err){
        // console.error('Tenemos un error');
        // console.error(err);
        // return false;
        throw err; // este sirve para funciones síncronas, para asíncrona no.
    }
    console.log('Todo ha salido perfecto', data);
});

console.log('Esto sucede al final');