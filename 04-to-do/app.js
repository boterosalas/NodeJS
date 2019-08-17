const argv = require('./config/yargs').argv
const toDo = require('./to-do/to-do');
const colors = require('colors')

let comando = argv._[0]

switch (comando) {
    case 'create':
        let task = toDo.create(argv.description)
        console.log(task)
        break;
    case 'list':
        console.log('List all tasks')
        toDo.loadDB().forEach(element => {
            console.log("========To Do========".green);
            console.log(element.description);
            console.log("Completed:", element.completed);
            console.log("=====================".green);
        });
        break;
    case 'update':
        let update = toDo.updateDB(argv.description, argv.completed)
        console.log('Update a task to do')
        console.log(update)
        break;
    case 'delete':
        let deleteDB = toDo.deleteDB(argv.description);
        console.log(deleteDB)
        break;
    default:
        console.log('unkwon command')
}