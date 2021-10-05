// Utileria para desacoplar funcionalidad
// para procesar la tabla de multiplicar y grabarla en un archivo
const { crearArchivoTabla, crearTablaConRango } = require("./helpers/toolsFiles");
//const argv = require("yargs").argv;
const argv = require("./config/yargs")
//Limpiando consola
console.clear();
//Calculo de tabla de multiplicar
crearTablaConRango(base = argv.base, rango = argv.rango , list = argv.list)
    .then((result) => { 
        console.log(result);
    }).catch(err => console.error(err));
