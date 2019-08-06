let empleados = [{
    id: 1,
    name: 'David'
},
{
    id: 2,
    name: 'Karen'
},
{
    id: 3,
    name: 'Samuel'
}];
let salarios = [{
    id: 1,
    salary: 1000
},
{
    id: 2,
    salary: 2000
}];

let getEmpleado = (id) => {

    return new Promise((resolve,reject)=>{

        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject('No existe un empleado con el id: ' + id)
        } else {
            resolve(empleadoDB)
        }

    });

}

let getSalary = (emp,callback) => {

    return new Promise((resolve,reject)=>{
        let salaryDB = salarios.find( salary => salary.id === emp.id)
        if(!salaryDB){
            reject('El empleado con el id: '+emp.id+' no tiene salario')
        }else{
            resolve({
                nombre: emp.name,
                salario: salaryDB.salary
            })
        }
    })
}

getEmpleado(5).then(empleado=>{
    return getSalary(empleado);
})
.then(resp=>{
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`)
})
.catch(err=>{
    console.log(err)
})