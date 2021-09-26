console.log('Hola mundo');

let i = 0;
setInterval(() => {
    console.log(i);
    i++;
    /* if(i === 5){
        let a = 3 + z;
    } */
    // en lugar de hacer eso de arriba se puede usar un try catch
    try {
        if(i === 5){
            let a = 3 + z;
        }
    } catch (err) {
        console.error(err);
    }

}, 1000);

console.log('Segunda instrucción');