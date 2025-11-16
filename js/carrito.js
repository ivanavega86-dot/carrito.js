
//  productos disponibles 
const producto1 = "BODY MICROFIBRA CON PUNTILLA";
const producto2 = "CROP ALGODON DISORDER";
const producto3 = "TOP ALGODON SHELL";
const producto4 = "TOP ENCAJE";

const precio1 = 7500;
const precio2 = 8400;
const precio3 = 8000;
const precio4 = 8000;

//  variables para el carrito
let total = 0;
let cantidadProductos = 0;

//  Mostrar productos 
function mostrarProductos() {
  console.log(" PRODUCTOS DISPONIBLES:");
  console.log("1 - " + producto1 + " ($" + precio1 + ")");
  console.log("2 - " + producto2 + " ($" + precio2 + ")");
  console.log("3 - " + producto3 + " ($" + precio3 + ")");
  console.log("4 - " + producto4 + " ($" + precio4 + ")");
}

// Agregar productos al carrito 
function agregarAlCarrito() {
  let continuar = true;

  while (continuar) {
    let opcion = prompt(
      `Ingrese el número del producto que desea comprar:\n1. ${producto1}\n2. ${producto2}\n3. ${producto3}\n4. ${producto4}`
    );

    if (opcion == "1") {
      total = total + precio1;
      cantidadProductos++;
      alert("Agregaste: " + producto1);
    } else if (opcion == "2") {
      total = total + precio2;
      cantidadProductos++;
      alert("Agregaste: " + producto2);
    } else if (opcion == "3") {
      total = total + precio3;
      cantidadProductos++;
      alert("Agregaste: " + producto3);
    } else if (opcion == "4") {
      total = total + precio4;
      cantidadProductos++;
      alert("Agregaste: " + producto4);
    } else {
      alert("Opción incorrecta. Intente nuevamente.");
    }

    continuar = confirm("¿Querés agregar otro producto?");
  }
}

//  Mostrar el total 
function mostrarTotal() {
  alert(
    "Agregaste " + cantidadProductos + " productos al carrito.\n" +
    "El total a pagar es: $" + total
  );

  console.log("Productos comprados: " + cantidadProductos);
  console.log("Total: $" + total);
}

alert("Bienvenida a la tienda");
mostrarProductos();
agregarAlCarrito();
mostrarTotal();
alert("¡Gracias por tu compra!");
