## Promesas
En JavaScript, podemos crear una nueva Promise con new Promise(), que toma una función como argumento:(resolve, reject) => {}.

En esta función, resolve(resolver) y reject(rechazar) son funciones callback, que se proporcionan de forma predeterminada en JavaScript. Ejemplo:

```javascript
const getEmployee = (id) => {
    return new Promise ( (resolve, reject) => {
        const employee = employees.find(emp => emp.id === id)?.name;
        (employee) 
            ? resolve(employee) 
            : reject(`User with id: ${id} not found.`);
    });
}
```

## Async & await
Async / await es un conjunto de palabras clave que permite escribir código asíncrono de manera procesal sin tener que depender de devoluciones de llamada ( infierno de devolución de llamada ) o encadenamiento de promesa ( .then().then().then() ).

Esto funciona utilizando la palabra clave await para suspender el estado de una función  asíncrona, hasta la resolución de una promesa, y usando la palabra clave async para declarar tales funciones asíncronas, que devuelven una promesa. Ejemplo:

```javascript
const getUserInformation = async( id ) => {
    try {
        const name = await getEmployee( id );
        const salary = await getSalary( id );
        return `The user ${name} gets a salary of ${salary}`;
    } catch (error) { throw error; }
}


getUserInformation(myId)
    .then( response => console.log(response))
    .catch( error => console.log(error));
```