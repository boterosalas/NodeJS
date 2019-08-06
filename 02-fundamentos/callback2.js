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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback('No existe un empleado con el id: ' + id)
    } else {
        callback(null,empleadoDB)
    }
}


let getSalary = (emp,callback) => {
    let salaryDB = salarios.find( salary => salary.id === emp.id)
    if(!salaryDB){
        callback('El empleado con el id: '+emp.id+' no tiene salario')
    }else{
        callback(null,{
            nombre: emp.name,
            salario: salaryDB.salary
        })
    }
}


getEmpleado(3,(err,emp)=>{
    if(err){
        return console.log(err);
    }else{
        getSalary(emp,(err,salary)=>{
            if(err){
                console.log(err)
            }else{
                console.log(`El salario de ${salary.nombre} es ${salary.salario}`)
            }
        })
    }
})