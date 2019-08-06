const fs = require('fs');


let listarTabla = (base,limite)=>{
    for(let i = 1; i <= limite; i++){
        console.log(`${base} x ${i} = ${i*base}`)
    }
}

let crearArchivo = (base,limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base '${base}' no es un número`)
            return;
        } else {
            let data = ''
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`
            }
            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) reject(err);
                resolve(`tabla-${base}.txt`)
            });
        }
    })

}


module.exports = {
    crearArchivo,
    listarTabla
}