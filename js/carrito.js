
//productos disponibles
const productos = [
  { id: 1, nombre: "BODY MICROFIBRA CON PUNTILLA", precio: 7500, imagen:"./assets/body.jpg" },
  { id: 2, nombre: "CROP ALGODON DISORDER", precio: 8400, imagen:"./assets/crop.jpg" },
  { id: 3, nombre: "TOP ALGODON SHELL", precio: 8000, imagen:"./assets/cropshell.jpg" },
  { id: 4, nombre: "TOP ENCAJE", precio: 8000, imagen:"./assets/encaje.jpg" },
{id:5, nombre:"TOP MICROFIBRA ESCOTE CON HOOK",precio:6900, imagen:"./assets/escotehook.jpg"},
{id:6, nombre:"SHORT POLLERA", precio:15000, imagen:"./assets/shortpollera.jpg"},
{id:7, nombre:"TOP DE TIRAS", precio:6900, imagen:"./assets/tiras.jpg"},
{id:8, nombre:"TOP MICROPUNTILLAS", precio:7100, imagen:"../assets/topmicropuntillas.jpg"},
];

let carrito = [];

carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let contenedor = document.querySelector("#catalogo");

function renderProductos(lista) {
  contenedor.innerHTML = "";

  lista.forEach((prod) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="producto">
        <img src="${prod.imagen}" alt="${prod.nombre}" width="250">
        <h6>${prod.nombre}</h6>
        <p>$${prod.precio}</p>
        <button data-id=${prod.id} class='btnAgregar'>Agregar al Carrito</button>
      </div>
    `;
    contenedor.appendChild(div);
  });

  actualizarBotones();
}
function actualizarBotones() {
  
let btnAgregar = document.querySelectorAll(".btnAgregar");
btnAgregar.forEach((btn) =>{
  btn.addEventListener("click", (e)=>{
    let idSelected= e.target.dataset.id;
    
    let productoSelected = productos.find((prod) => prod.id == idSelected);
    carrito.push(productoSelected);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("Carrito actualizado", carrito);
    
  });
});
}
renderProductos(productos);

//storage
localStorage.setItem("productos", JSON.stringify(productos));

const buscador = document.getElementById("buscador");

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const productosLS = JSON.parse(localStorage.getItem("productos")) || [];
  const filtrados = productosLS.filter(prod =>
    prod.nombre.toLowerCase().includes(texto)
  );

 
  renderProductos(filtrados);
});

let h3 = document.getElementById("h3")
h3.innerHTML ="Carrito de compras" 

let p = document.getElementById("p")
p.innerHTML = "Bienvenidos a nuestra tienda, todos nuestros productos son importados."

