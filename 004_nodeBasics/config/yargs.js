const argv = require("yargs")
    .option('b',{
        alias: "base",
        type: 'number',
        describe: "Número del cual se calculará la tabla",
        demandOption: true
    }).option('r',{
        alias: "rango",
        type: 'number',
        describe: "Número que se calcularan en la tabla",
        default: 10
    })
    .option('l',{
        alias: "list",
        type: "boolean",
        describe: "Mostrar tabla en consola",
        demandOption: false,
        default: false
    })
    .check( (argv, options ) => {
        if (isNaN(argv.b)) {
            throw "La base debe ser un número";
        }
        if (isNaN(argv.r)) {
            throw "El rango debe ser un número";
        }
        return true;
    })
    .argv;
module.exports=argv;