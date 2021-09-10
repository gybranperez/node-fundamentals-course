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

const getEmployee = (id , callback) => {
    const employee = employees.find(e => e.id === id);
    if (employee) {
        callback(null, employee.name)
    } else {
        callback(`${id} not found`)
    }
}

const getSalary = ( id , callback ) => {
    const user = salaries.find( e => e.id === id );
    if (user) {
        callback(null, user.salary)
    } else {
        callback(`Could find the salary of the user with id: ${id}.`)
    }
}

const myId = 3;

getEmployee(myId, (err, employee) => {
    if(err){
        console.log("ERROR!");
        return console.log(err);
    }
    console.log(employee);
});

getSalary(myId, (err, salary) => {
    if (err) {
        return console.log(err);
    }
    console.log(`User gets ${salary} monthly`);
});
