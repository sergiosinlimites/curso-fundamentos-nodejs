const puppeteer = require('puppeteer'); // todo funciona de manera asíncrona
// vamos a hacer una funcion autoejecutable

(async () => {
    // desde este momento podemos utilizar los await, que nos dará mucha flexibilidad para trabajar con funciones asíncronas
    console.log('Lanzamos navegador');
    const browser = await puppeteer.launch(); // no se puede usar {headless: false} en WSL2
    const page = await browser.newPage();
    await page.goto('https://www.platzi.com');

    let titulo1 = page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    })

    console.log(titulo1)
    console.log('Cerramos navegador');
    // browser.close();
    console.log('Navegador cerrado');
})();