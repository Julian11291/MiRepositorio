
//Receta de cocina
function hamburguesa(callback1,callback2,callback3,callback4,callback5,callback6,callback7,callback8){
    setTimeout(() => {
        callback1();
    }, 2000);
    setTimeout(() => {
        console.log('Frita la carne de hamburguesa en la parrilla, ten en cuenta de estar pendiente a su textura...')
    }, timeout);
}

function fritarTocineta(){
    console.log('Frite la tocineta por unos 5 minutos, procure no dejar que se toste demasiado...')
}

function fritarJamon(){
    console.log('Frite el jamon,tenga en cuenta en no dejarlo tanto tiempo en el sarten para que no se queme...')
}

function queso(){
    console.log('Proceda a colocar la tajada de queso encima de la carne de hamburguesa...')
}

function papaFosforito(){
    console.log('Agregue papa fosforito a la carne para darle buena forma y sabor a la hamburguesa...')
}

function salsas(){
    console.log('Agregue salsas a gusto a la carne para darle buen sabor a la hamburguesa')
}

function vegetales(){
    console.log('Agregue el tomate,la cebolla, y la lechuga a la hamburguesa...')
}

function armarHamburguesa(){
    console.log('Finalmente arme la hamburguesa con su respectivo pan, felicidades, ya habras terminado,disfrutala:3')
}
