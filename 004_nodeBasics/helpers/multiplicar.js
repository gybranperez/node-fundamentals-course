

// Generamos un arreglo con el rango dado, en este caso 1 al 10
const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
}
// Con un for imprimimos la tabla
const tabla = (num) => { 
    let salida ='';
    for(i of range(1, 10)) {
        salida += `${i} x ${num} = ${i*num}\n`;
    } 
    return salida;
}
// Versión recursiva para imprimir tablas de multiplicar
const tablaRecursiva = (num, index, rango) => {
    if (rango == index) {
        return `${num} x ${index} = ${num * index}\n`;
    }else{
        return `${num} x ${index} = ${num * index}\n` + tablaRecursiva(num, index+1, rango);
    }
}

module.exports = {
    tabla,
    tablaRecursiva
}