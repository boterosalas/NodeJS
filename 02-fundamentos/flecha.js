let sumar = (a,b) => a + b;

let saludar = name => `Hola ${name}`

let deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'Regeneración',
    getNombre(){
        return `${this.nombre} ${this.apellido} - ${this.numero} ${this.poder}`
    },
    numero : 3
}

console.log(deadpool.getNombre());