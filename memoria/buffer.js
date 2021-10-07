// let buffer = Buffer.alloc(4); // manda los espacios de bytes en memoria, en este caso 4 bytes
// let buffer = Buffer.from([111, 112, 113, 114]);
let buffer = Buffer.from('hola');

console.log(buffer);
console.log(buffer.toString());

// -- buffer desde posicion

let abc = Buffer.alloc(26);
console.log(abc);

for(let i = 0; i < 26; i++){
    abc[i] = i + 97;
}
console.log(abc);
console.log(abc.toString());

console.log("☃".charCodeAt()) // nos da el resultado en hexadecimal, puede ser 1, d, x, `, ?, ☃