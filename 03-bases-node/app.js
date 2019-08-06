//requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    })
    .command('crear','Crea una tabla de multiplicar',{
        base:{
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    })
    .help()
    .argv;

let comando = argv._[0];
switch (comando) {
    case 'listar': {
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break;
    }
    case 'crear': {
        crearArchivo( argv.base, argv.limite )
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
        break;
    }
    default:
        console.log('Comando no reconocido')
}


// let parametro = argv[2];
// let base = parametro.split("=")[1]

// console.log('Límite: ',argv.limite);


