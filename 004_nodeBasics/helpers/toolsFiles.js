//Importacion de paquetes necesarios de node para sistema de archivos
const fs = require("fs");
const {tabla, tablaRecursiva} = require("./multiplicar");
colors = require('colors');


const crearArchivoTabla = async( base = 5 , list = false , nombre = `impresion-tabla.txt` ) => {
    try {
        const salida = await tabla(base);
        fs.writeFileSync(nombre,salida);
        const msg = "El archivo se creo correctamente".green;
        return (list) ? `\nTabla de ${base}\n${salida}\n\t${msg}` : msg;
    } catch (err) {
        throw err.red;
    } 
};

const crearTablaConRango = async( base = 5 , rango = 10, list = false ,nombre = `./salida/impresion-tabla.txt` ) => {
    try {
        const salida = await tablaRecursiva(base,1,rango);
        fs.writeFileSync(nombre,salida);
        const msg = "El archivo se creo correctamente".green;
        return (list) ? `\n-- Tabla de ${base} --\n${salida}\n\t${msg}` : msg;
    } catch (err) {
        throw err.red;
    } 
};

module.exports = {
    crearArchivoTabla,
    crearTablaConRango
}