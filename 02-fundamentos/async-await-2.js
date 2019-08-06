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

let getEmpleado = async (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error('No existe un empleado con el id: ' + id)
    } else {
        return empleadoDB
    }

}

let getSalary = async(emp) => {
    let salaryDB = salarios.find( salary => salary.id === emp.id)
    if(!salaryDB){
        throw new Error('El empleado con el id '+emp.id+' no tiene salario')
    }else{
        return {
            name: emp.name,
            salario: salaryDB.salary
        }
    }
}


let getInformacion = async (id) =>{
    let empleado = await getEmpleado(id);
    let salario = await getSalary(empleado);

    return `${empleado.name} tiene un salario de ${salario.salario}`
}

getInformacion(30).then(mensaje=>{
    console.log(mensaje)
}).catch(err=>{
    console.log(err.message)
})