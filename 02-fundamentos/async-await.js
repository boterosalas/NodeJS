/*
*Async Await
*/

let getNombre = (name) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('David')
        }, 3000);
    })
}

let saludo = async()=>{
    let nombre = await getNombre('David');
    return `Hola ${nombre}`
}

saludo().then(mensaje=>{
    console.log(mensaje)
})
.catch(err=>{
    console.log(err)
})