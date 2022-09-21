var vec = [];
var suma = 0;

for (let i = 0; i <= 19; i++) {
  vec[i] = Math.round(Math.random() * 100);
}
console.log(vec);

for (let s = 0; s < vec.length; s++) {
  suma += vec[s];
}

console.log("La suma del arreglo es " + suma);

var prom = suma / vec.length;
console.log("El promedio del arreglo es " + prom);

console.log(Math.max(...vec) + " es el numero mayor");
console.log(Math.min(...vec) + " es el numero menor");


med = 0 
for (m = 0; m < vec[i]; m++) {

}