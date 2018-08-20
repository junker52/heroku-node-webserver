const hbs = require('hbs');

//HBS helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (text) => {
    let textArray = text.split(' ');
    textArray.forEach((palabra, idx) => {
        textArray[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return textArray.join(' '); 
})