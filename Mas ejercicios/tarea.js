class cuentaBancaria {
    constructor (noCuenta, noTarjeta, nombreTitu, saldo) {
        this._noCuenta= noCuenta;
        this._noTarjeta = noTarjeta;
        this._nombreTitu = nombreTitu;
        this._saldo = saldo;
    }
            set noCuenta (noCuenta) {
                this._noCuenta = noCuenta
        }
            set noTarjeta (noTarjeta) {
                this._noTarjeta = noTarjeta
            }
            set nombreTitu (nombreTitu) {
                this._nombreTitu = nombreTitu
            }
            set saldo (saldo) {
                this._saldo = saldo
            }
            get noCuenta (){
                return this.noCuenta
            }
            get noTarjeta (){
                return this.noTarjeta
            }
            get nombreTitu (){
                return this.nombreTitu
            }
            get saldo () {
                return this._saldo
            }
}

let miCuenta = new cuentaBancaria (31254, 223344, `Nicolas Escolar`, 10 ) 

class cuentaDeAhorros extends cuentaBancaria {
    constructor (noCuenta, noTarjeta, nombreTitu, saldo, tasaInter) {
        super (noCuenta, noTarjeta, nombreTitu, saldo)
        this._tasaInter = tasaInter 

    }
    set tasaInter (tasaInter) {
        this._tasaInter = tasaInter
    }

    get tasaInter (){
        return this._tasaInter
    }


    cuentaNueva (){
        return `${this._tasaInter},
                ${this._noCuenta}, ${this._noTarjeta}, ${this._nombreTitu}, ${this._saldo}, ${this._cobrarCuotaManejo}`
    }

    cobrarCuotaManejo (){
     this._saldo -= (this.saldo*this.tasaInter) 
     
    }
}

const cH = new cuentaDeAhorros (3125, 2233, `Adriano Corleone`, 70000, 0.03)
console.log (cH)
console.log (cH.saldo)
cH.cobrarCuotaManejo()
console.log(cH.saldo)

class miCuenta2 extends cuentaBancaria {
    constructor (noCuenta, noTarjeta, nombreTitu, saldo, credito, interes) {
        super (noCuenta, noTarjeta, nombreTitu, saldo)
        this._credito = credito
        this._interes = interes
    }

    set credito (credito){
        this._credito = credito 
    }

    get credito () {
        return this._credito
    }

    set interes (interes){
        this._interes = interes 
    }

    get interes () {
        return this._interes
    }

    calcularCredito() {
        if (this._credito <=0 && this._saldo <= 0) {
            console.log(false)
        }else (this._credito >= 150000 && this._saldo >= 10000)
            this._credito += (this._credito * this._interes)
    }
}

const cc = new miCuenta2 (9874, 8877, "Andrea Villalba", 70000, 80000, 0.05)
console.log(cc)
console.log(cc._credito)
cc.calcularCredito()
console.log(cc._credito)

// POLIGONOS 


class Poligonos {
    constructor (lados, base, altura){
    this._lados=lados;
    this._base=base;
    this._altura=altura;
    }

    set lados(lados){
        this._lados=lados;
    }

    set base(base){
        this._base=base;
    }
    set altura(altura){
        this._altura=altura
    }

    get lados (){
        return this._lados;
    }
    get base(){
        return this._base;
    }

    get altura(){
        return this._altura;
    }
}
const fig= new Poligonos(1,2,3);
console.log(fig)

class Triangulo extends Poligonos {
    constructor (altura, base){
        super (lados, base, altura)

    }
    area (){
        
    }
}



    

