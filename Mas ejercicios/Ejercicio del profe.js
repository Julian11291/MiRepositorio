const exercise2 = new Promise((resolve, reject) => {
    if (true){
        let x=1;
        //resolve ("start counting!!!",x);
        setTimeout(() => {
            resolve(x);
        }, 1000);
    }
    else {
        reject("fail");
    }
   });
   exercise2
.then((value) => {
//console.log(value);
console.log(value);
return ++value;
    })

.then ((value) => {
    console.log(value);
    return ++value;
})
.then ((value) => {
    console.log(value);
    return ++value;
})
.then ((value) => {
    console.log(value);
    return ++value;
})
.then((value) => {
    console.log(value);
})
.catch((value) => {
    console.log("...................", value);
});
    
//ejercicio2
function pruebaCallback(callback1,callback2,name){ 
    setTimeout(() => {
        callback1(name);   
    }, 5000);
        
    setTimeout(() => {             
        console.log('Dentro de pruebaCallback')                
    }, 1000);  
    
    setTimeout(() => {
        callback2(name);
    }, 3000);
   
}
function saludo(nombre){
    console.log(`Hola ${nombre}`)
}

function cuentaLetras(nombre){
    console.log(nombre.length);
}
pruebaCallback(cuentaLetras,saludo,'Ana');
//pruebaCallback(cuentaLetras,'Soacha Cundinamarca');

//Ejercicio3
const counter = new Promise((resolve) => {
    let x = 1
    resolve(x);
    
})
.then(value => {
    let y = setInterval(() => console.log (++value), 500);
    setTimeout(() => {
        clearInterval(y);
    }, 10000);
    return value;
})

.then(value => {
    console.log(value)
});
//Receta hamburguesa

