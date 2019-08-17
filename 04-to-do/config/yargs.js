const argv = require('yargs')
    .command('create', 'Create a task to do', {
        name: {
            demand: true,
            alias: 'n'
        },
        description: {
            alias: 'd',
            demand: false,
            default:'task description',
            desc: 'Task description to do'
        }
    })
    .command('list', 'List all tasks to do')
    .command('delete','Delete an element from the tasks to do',{
        description:{
            demand: true,
            alias: 'd'
        }
    })
    .command('update', 'Update a task to do',{
        description: {
            demand: true,
            alias: 'd'
        },
        completed: {
            alias: 'c',
            demand: false,
            default: true,
            desc: 'Mark the task as completed'
        }
    })
    .help()
    .argv


module.exports = {
    argv
}