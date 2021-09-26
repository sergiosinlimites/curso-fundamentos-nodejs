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

async function main(){
    try{
        const nombre = await saludar('Sergio');
        await hablar();
        await hablar();
        await hablar();
        await despedirse(nombre);
        console.log('Terminando ejecución');
    } catch (err) {
        console.error(err);
    }
    
}

console.log('Iniciando ejecución');
main();
console.log('Segunda instrucción');