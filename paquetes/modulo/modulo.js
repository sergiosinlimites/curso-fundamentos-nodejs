function saludar(){
    console.log('Hola mundo');
}

// tenemos que exportarlo

// module.exports = saludar;

module.exports = {
    saludar,
    prop1: 'Hola qué tal'
}