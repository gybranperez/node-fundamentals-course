

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
const tablaRecursiva = (num, multiplicador) => {
    if (multiplicador == 1) {
        console.log(num);
    }else{
        console.log(multiplicador * num);
        tablaRecursiva(num, multiplicador-1);
    }
}

module.exports = {
    tabla,
    tablaRecursiva
}