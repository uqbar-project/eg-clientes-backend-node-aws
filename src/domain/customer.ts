export default class Customer {
    id : number = 0
    name : string = ""

    constructor(_id: number, _nombre: string) {
        this.id = _id
        this.name = _nombre
    }

    validar() {
        if (!this.name) throw "Debe ingresar nombre"
    }

}