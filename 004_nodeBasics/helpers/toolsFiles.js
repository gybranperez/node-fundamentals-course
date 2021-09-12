//Importacion de paquetes necesarios de node para sistema de archivos
const fs = require("fs");
const {tabla} = require("./multiplicar");

const crearArchivoTabla = ( base = 5 , nombre = `impresion-tabla.txt` ) => {
    //Escribiendo en archivo la salida
    fs.writeFile( nombre , tabla(base) ,(err) => {
        if (err) throw err;
    })
}

module.exports = {
    crearArchivoTabla
}