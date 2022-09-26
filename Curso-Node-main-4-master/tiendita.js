// BOTONES 
let pagina = 1 
const btnAnt = document.getElementById(`btnAnterior`)
const btnSig = document.getElementById(`btnSiguiente`)

btnSig.addEventListener(`click`, ()=>{
    if (pagina < 10 ){
        pagina += 1 
        listProducts()
    } 
   
})

btnAnt.addEventListener(`click`, ()=>{
    if (pagina > 1 ){
        pagina -= 1
        listProducts()
    }
})


const listProducts = async () => {
  const response = await fetch(`http://localhost:3000/api/v1/products${pagina}`);

  let tableBody = ``;
  const products = await response.json();
  products.forEach((products, index) => {
    tableBody += `<tr>
      <td>${products.id}</td>
      <td>${products.name}</td>
      <td>${products.price}</td>
      <td>${products.image}</td>
    </tr>`;
  });
  // document.getElementById("tableBody_Products").innerHTML = tableBody

  

  tableBody_Products.innerHTML = tableBody
}

window.addEventListener("load",  function () {
  listProducts();
})




