const http = require('http');

http.createServer(router).listen(3000) // no usar puertos que requieran administrador ya que al escalar privilegios pueden generarse problemas mayores. Normalmente se usan los 300x

function router(req, res){
    console.log('nueva petición');
    console.log(req.url);
    
    res.writeHead(201, { 'content-type': 'text/html; charset=utf-8'})
    switch(req.url){
        case '/hola':
            res.write('Hola, ¿cómo estás?');
            res.end();
            break;
        case '/blog':
            res.write('Esto es un blog');
            res.end();
            break;
        default:
            res.write('Error 404, no sé lo que quieres');
            res.end();
    }

    // escribir cabeceras
    // res.writeHead(201, { 'Content-Type': 'text/plain'})
    // res.end();
    // // escribir respuesta al usuario
    // res.write('Hola, ya sé usar http de NodeJS')

    // res.end(); // esto siempre se debe poner al final para decirle que cierre la petición
}

console.log('Escuchando http en el puerto 3000');