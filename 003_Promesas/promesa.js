const employees =[
    { id:1 , name: "alex"},
    { id:2 , name: "leni"},
    { id:3 , name: "dani"}
];
const salaries =[
    { id:1 , salary: 1000},
    { id:2 , salary: 1500},
    { id:4 , salary: 2000}
];


const getEmployee = (id) => {
    return new Promise ( (resolve, reject) => {
        const employee = employees.find(emp => emp.id === id)?.name;
        (employee) 
            ? resolve(employee) 
            : reject(`User with id: ${id} not found.`);
    });
}
const getSalary = (id) => {
    return new Promise (  (resolve,reject) => {
        const salary = salaries.find(salary => salary.id === id)?.salary;
        (salary)
            ? resolve(salary)
            : reject (`User's salary not found.`)
    });
}

let myId = 3;
/*
getEmployee(myId).then(
    employee => console.log(employee)
).catch(
    err => console.error(err)
).finally(
    console.log("ALWAYS")
);

getSalary(myId).then(
    salary => console.log(salary)
).catch(
    err => console.error(err)
).finally(
    console.log("ALWAYS salary")
);
*/

let name;   // Variable auxiliar para acceder a un valor en diferentes scope
getEmployee(myId)   // Promesa para obtener el nombre del empleado
    .then( employee => {    // Si encomtramos el id del empleado en el arreglo...
        name = employee;    // Asignacion de nombre
        return getSalary(myId) // se ejecuta la busqueda del salario
    })
    .then( salary => console.log(`${name} has a salary of ${salary}`) )
    .catch( err => console.error(`ERROR!\n\t${err}\n`));