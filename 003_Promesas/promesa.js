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

let myId = 2;

const getEmployee = (id) => {
    return new Promise ( (resolve, reject) => {
        const employee = employees.find(emp => emp.id === id);
        (employee) 
            ? resolve(employee) 
            : reject(`User with id: ${id} not found.`);
    });
}

getEmployee(myId).then(
    employee => console.log(employee)
).catch(
    err => console.error(err)
).finally(
    console.log("ALWAYS")
);