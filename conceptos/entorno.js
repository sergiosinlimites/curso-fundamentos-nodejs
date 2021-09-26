// así sería normalmente:

let saludo = 'Hola';

console.log(saludo);

// si quiero usar valores que no estén dentro del software: peticiones a API, claves, tokens. Para eso están las variables de entorno, donde se accede a un proceso.

let nombre = process.env.NOMBRE || "Sin nombre";// esto último es el por defecto
let apellido = process.env.APELLIDO || "Sin apellido";

console.log('Hola ' + nombre + " " + apellido);

// usando dotenv (ya preinstalado con npm)

let NODE_ENV = process.env.NODE_ENV || 'development';

require("dotenv").config({
    path: `.env.${NODE_ENV}`
});

let name = process.env.NOMBRE;
let lastName = process.env.LAST_NAME;
console.log('Hola ' + name + " " + lastName);