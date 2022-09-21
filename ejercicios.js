//hacer una funcion Usar un arreglo para settimeout que dure 3 segundos,mientrtas trasncurren esos 3 seg, llenar un vector con numneros 1 atravez de una funcion


x=Math.round(Math.random() * (25-5) +5)


function numerosAleatorios (limite) {
    var numeros = [];
    for (let i =0; i < limite; i++) {
        numeros[i]=Math.round(Math.random() *(100 -20) + 20);
}
console.log(numeros)
}

function numerosUno(limite) {
    var numeros1 =[]
    for (let i = 0; i < limite; i++) {
        numeros1[i]=1

}
console.log(numeros1)
}

setTimeout( numerosAleatorios,3000,x)
numerosUno(x)

// mision: porquw cambia con let y var
for (let j = 0; j < 10; j++) {
    setTimeout(() => {
        console.log(j)
    }, (1000*j));
}

//repetir con el intervalo de 2 segundos
let timerId = setInterval(() => console.log('tick'), 2000);

//despues de 5 segundos parar
setTimeout(() => {
   cleanInterval(timerId); 
//console.log('stop');
}, 5000);


//un arreglo se llene aleatoriamente de 15 elementos, se imprima infinitamente y a lo ultimo se reinicie

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            console.log(i)
        }, (1000*i));
    }

    let timerId = setInterval(() => console.log('tick'), 2000);

    //condicional ternario

var vec=[];
for (let i = 0; i < 10; i++) {
    vec[i]=Math.round(Math.random()*100);

}

var k=0;
setInterval(()=>{
    console.log(vec[k])
    k++;
    k==10?k=0:k=k
}, (1000));


//ejemplo 
function pruebaCallback(callback1,callback2,name){
    callback1(name);
    setTimeout(() => {
     console.log('dentro de pruebaCallback')
}, 2000);
    callback2(name);
}
function saludo(nombre){
    console.log(`hola ${nombre}`)

}

function cuentaletras(nombre){
    console.log(nombre.lenght);
}
pruebaCallback(cuentaletras,saludo, 'Ana');
//pruebaCallback(cuentaletras,'Soacha Cundinamarca');
