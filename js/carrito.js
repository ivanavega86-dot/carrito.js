
//productos disponibles
const productos = [
  { id: 1, nombre: "BODY MICROFIBRA CON PUNTILLA", precio: 7500, imagen:"./assets/body.jpg" },
  { id: 2, nombre: "CROP ALGODON DISORDER", precio: 8400, imagen:"./assets/crop.jpg" },
  { id: 3, nombre: "TOP ALGODON SHELL", precio: 8000, imagen:"./assets/cropshell.jpg" },
  { id: 4, nombre: "TOP ENCAJE", precio: 8000, imagen:"./assets/encaje.jpg" },
];

let carrito = [];
let contenedor = document.querySelector("#catalogo");
contenedor.innerHTML="";
productos.forEach((prod) => {
  let div = document.createElement ("div");
  div.innerHTML = `
  <div class= "producto">
  <img src="${prod.imagen}" alt="${prod.nombre}" width="250">
  <span>${prod.id}</span>
  <h3>${prod.nombre}</h3>
  <p>${prod.precio}</p>
  <button data-id=${prod.id} class='btnAgregar'>Agregar al Carrito</button>
  </div>
  `;
  contenedor.appendChild(div);
});
let btnAgregar = document.querySelectorAll(".btnAgregar");
btnAgregar.forEach((btn) =>{
  btn.addEventListener("click", (e)=>{
  let idSelected= e.target.dataset.id;
 
  let productoSelected = productos.find((prod) => prod.id == idSelected);
  carrito.push(productoSelected);
  console.log(carrito);
  
  });
});

let h1 = document.getElementById("h1")
h1.innerHTML ="Carrito de Compras" 

let p = document.getElementById("p")
p.innerHTML = "Bienvenidos a nuestra tienda, todos nuestros productos son importados."