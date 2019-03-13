let deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'Regeneración',
    getNombre(){
        return `${this.nombre} ${this.apellido} - ${this.numero} ${this.poder}`
    },
    numero : 3
}
let {nombre:primerNombre, apellido, poder} = deadpool;
console.log(primerNombre, apellido, poder);