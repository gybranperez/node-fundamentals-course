// Utileria para desacoplar funcionalidad
// para procesar la tabla de multiplicar y grabarla en un archivo
const { crearArchivoTabla } = require("./helpers/toolsFiles");
//Limpiando consola
console.clear();
//Calculo de tabla de multiplicar
const number = 3;
// Creacion de archivo tabla
crearArchivoTabla(number);
