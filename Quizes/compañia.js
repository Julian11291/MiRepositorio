class publicacion {
    constructor (titulo, precio){
    this._titulo=titulo;
    this._precio=precio;

    }
    set titulo(titulo){
        this._titulo=titulo;
    }

    set precio(precio){
        this._precio=precio;

    }
    get titulo(){
        return this._titulo;
    }

    get precio(){
        return this._precio;
    }
}
    const lib = new publicacion();
    console.log(typeof(lib));

    class libro extends publicacion {
        lib(titulo, precio,numeroPag){
        super(titulo, precio)
        this._numeroPag = numeroPag;
    }

    set numeroPag(numeroPag){
        this._numeroPag=numeroPag;
    }

    get numeroPag(){
        return this._numeroPag;
    }
}

    const cd1 = new publicacion();
    console.log(typeof(cd1))

    class CD extends publicacion {
        cd1(titulo, precio, numeroPag, tiempoRep){
            super(titulo, precio)
            this._tiempoRep = tiempoRep;
        }

    set tiempoRep(tiempoRep){
        this._tiempoRep=tiempoRep;

    }

    get tiempoRep(){
        return this._tiempoRep;
    }

    }

    const publicacion = new pub(elPrincipito,25000,75,300)
    console.log(pub.titulo);
    console.log(pub.precio);
    console.log(lib.numeroPag);
    console.log(cd1.tiempoRep);


    























