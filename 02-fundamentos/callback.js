// setTimeout(() => {
//     console.log('Hola Mundo');
// },2000)

let getUserById = (id, callback) => {
    let user = {
        name: 'David',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la BD`);
    } else {
        callback(null, user);
    }
}

getUserById(10, (err, user) => {
    if(err){
        return console.log(err);
    }
    console.log('Usuario de base de datos', user);
})