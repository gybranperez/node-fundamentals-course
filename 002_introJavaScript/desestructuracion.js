const deadpool = {
    name: "Wade",
    lastname: "Winston",
    power: "Regeneration",
    getName(){
        return `${nombre} ${this.lastname}`;
    }
}
function imprimirHeroe ( heroe ) {
    const {name, lastname, power, edad=50} = heroe;
    console.log(name, lastname, power, edad);
}

imprimirHeroe(deadpool);

