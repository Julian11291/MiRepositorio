class poligono {
    constructor(lados, base, altura, area, dibuja) {
        this._lados = lados;
        this._base = base;
        this._altura = altura;
        this._area = area;
        this._dibuja = dibuja;

    }

    set lados(lados) {
        this._lados = lados;
    }

    set base(base) {
        this._base = base;

    }

    set altura(altura) {
        this._altura = altura;

    }

    set area(area) {
        this._area = area;

    }

    set dibuja(dibuja) {
        this._dibuja = dibuja;
    }

    get lados() {
        return this._lados;
    }

    get base() {
        return this._base;
    }

    get altura() {
        return this._altura;
    }


    get area() {
        return this._area;

    }

    get dibuja() {
        return this._dibuja;
    }

}

const fig = new poligono();
console.log(typeof(ob));

class cuadrado extends poligono {
    pol(lados, base, altura, construct, area1, dibuja1, perimetro1) {
        super(lados, base, altura, construct, area, dibuja)
        this._area1 = area1;
        this._dibuja1 = dibuja1;
        this._perimetro1 = perimetro1;
    }

    set area1(area1) {
        this._area1 = area1;

    }

    set dibuja1(dibuja1) {
        this._dibuja1 = dibuja1;

    }

    set perimetro1(perimetro1) {
        this._perimetro1 = perimetro1;

    }

    get area1() {
        return this._area1;
    }

    get dibuja1() {
        return this._dibuja1;
    }

    get perimetro1() {
        return this._perimetro1;
    }


}

class triangulo extends poligono {
    pol(lados, base, altura, area2, dibuja2, perimetro2) {
        super(lados, base, altura, area, dibuja)
        this._area2 = area2;
        this._dibuja2 = dibuja2;
        this._perimetro2 = perimetro2;
    }

    set area2(area2) {
        this._area2 = area2;

    }

    set dibuja2(dibuja2) {
        this._dibuja2 = dibuja2;

    }

    set perimetro2(perimetro2) {
        this._perimetro2 = perimetro2;

    }

    get area2() {
        return this._area2;
    }

    get dibuja2() {
        return this._dibuja2;
    }

    get perimetro2() {
        return this._perimetro2;
    }


}

class rectangulo extends poligono {
    pol(lados, base, altura, area3, dibuja3, perimetro3) {
        super(lados, base, altura, area, dibuja)
        this._area3 = area3;
        this._dibuja3 = dibuja3;
        this._perimetro3 = perimetro3;
    }
    set area3(area3) {
        this._area3 = area3;

    }

    set dibuja3(dibuja3) {
        this._dibuja3 = dibuja3;

    }

    set perimetro3(perimetro3) {
        this._perimetro3 = perimetro3;

    }

    get area3() {
        return this._area3;
    }

    get dibuja3() {
        return this._dibuja3;
    }

    get perimetro3() {
        return this._perimetro3;
    }
}


const pol1 = new pol1(2, 4, 6, 8, 24, 'cuadrado');
console.log(pol1.lados);
console.log(pol1.base);
console.log(pol1.altura);
console.log(pol1.resultados);