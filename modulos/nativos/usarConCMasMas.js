// así es como ejecutamos modulos de c++ en nodejs

const miAddon = require('./build/Release/addon');

console.log(miAddon.holaMundo());