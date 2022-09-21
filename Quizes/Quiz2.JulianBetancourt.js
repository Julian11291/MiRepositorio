class Vehiculos {
    constructor (serieMotor, marca, año, precio){
        this._serieMotor = serieMotor
        this._marca = marca 
        this._año = año
        this._precio = precio
    }
    set serieMotor(serieMotor){
        this._serieMotor = serieMotor
    }
    set marca (marca){
        this._marca = marca 
    }
    set año (año) {
        this._año = año
    }
    set precio (precio) {
        this._precio = precio
    }

    get serieMotor(){
        return this._serieMotor 
    }
    get marca (){
        return this._marca 
    }

    get precio() {
        return this._precio 
    }
    get año (){
        return this._año 
    }

}

class AutosCompact extends Vehiculos {
    constructor (serieMotor, marca, año, precio, cantPasajeros) {
        super (serieMotor, marca, año, precio)
        this._cantPasajeros = cantPasajeros
    }
    set cantPasajeros (cantPasajeros){
        this._cantPasajeros = cantPasajeros
    }
    get cantPasajeros(){
        return this._cantPasajeros
    }
}

class AutosLujo extends AutosCompact{
    constructor (serieMotor, marca, año, precio, cantPasajeros) {
        super (serieMotor, marca, año, precio, cantPasajeros)
    }
}
class Camionetas extends Vehiculos {
    constructor (serieMotor, marca, año, precio, capCarga, ejes) {
        super (serieMotor, marca, año, precio)
        this._capCarga = capCarga
        this._ejes = ejes
    }
    set capCarga (capCarga){
        this._capCarga = capCarga
    }
    get capCarga(){
        return this._capCarga
    }
    set ejes(ejes){
        this._ejes = ejes 
    }
    get ejes(){
        return this._ejes
    }
}

const vcomp = new AutosCompact (3982, "Bugatti", 2016, 10986273179, 6)
console.log(vcomp)

const vlujo = new AutosLujo (3986, "Alpine", 2010, 22272219, 4)
console.log(vlujo)

const vcamion = new Camionetas (3862, "Audi", 2010, 157900000, "2 toneladas", 3)
console.log(vcamion)