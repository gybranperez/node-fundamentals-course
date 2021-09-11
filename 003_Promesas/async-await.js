const employees =[
    { id:1 , name: "alex"}, { id:2 , name: "leni"}, { id:3 , name: "dani"}
];
const salaries =[
    { id:1 , salary: 1000}, { id:2 , salary: 1500}, { id:4 , salary: 2000}
];

const getEmployee = (id) => {
    return new Promise ( (resolve, reject) => {
        const employee = employees.find(emp => emp.id === id)?.name;
        (employee) ? resolve(employee) : reject(`User with id: ${id} not found.`);
    });
}

const getSalary = (id) => {
    return new Promise (  (resolve,reject) => {
        const salary = salaries.find(salary => salary.id === id)?.salary;
        (salary) ? resolve(salary) : reject (`salary not found.`)
    });
}

const myId = 1;
// async convierte la función en una promesa
const getUserInformation = async( id ) => {
    try {   // Try es como el resolve de la promesa
        /*  En lugar del metodo then podemos obtener los resultados directamente
            colocando await antes de la promesa 
            En lugar del metodo catch podemos utilizar la sintaxis try-catch*/
        const name = await getEmployee( id );
        const salary = await getSalary( id );
        return `The user ${name} gets a salary of ${salary}`;

    } catch (error) {   // Catch es el reject de la promesa
        throw error;
    }
}


getUserInformation(myId)
    .then( response => console.log(response))
    .catch( error => console.log(error));