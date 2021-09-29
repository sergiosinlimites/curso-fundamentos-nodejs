const os = require('os');
const SIZE = 1024;

function kb(bytes) { return bytes / SIZE };
function mb(bytes) { return kb(bytes) / SIZE };
function gb(bytes) { return mb(bytes) / SIZE };
function tb(bytes) { return gb(bytes) / SIZE };

// Arquitecture
console.log('Architecture:');
console.log(os.arch()); // x64

// Platform
console.log('Platform:');
console.log(os.platform()); // para ver plataforma, estadísticas

// CPUs
console.log('CPUs length:');
console.log(os.cpus().length);
console.table(os.cpus());

// Errors and signals
console.log('Errors and signals:');
// console.log(os.constants);

// Memory
console.log('Free Memory:');
console.log('KB: ' + kb(os.freemem()));
console.log('MB: ' + mb(os.freemem()));
console.log('GB: ' + gb(os.freemem()));
console.log('TB: ' + tb(os.freemem()));

console.log('Total Memory:');
console.log(gb(os.totalmem()));

// Root directory
console.log('Root directory:');
console.log(os.homedir());
console.log('Temp directory:');
console.log(os.tmpdir());

// Host
console.log('Host name:');
console.log(os.hostname());

// Network interfaces
console.log('Network interfaces:');
// console.log(os.networkInterfaces());