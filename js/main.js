// ## Propusta de Resolución.

// Un programa qué emula (simula), un sistema de compra de indumentarias para hombre.

// Esto implica :
// * Interface Menu (Elegir productos, Hacer Check-out, Salir). 
// * Interface para elegir producto(s).
// * Interface Hacer Check-out.




//Fn Schemas
function schemaProducto(nombre, categoria, talla, color, precio){
  return {nombre, categoria, talla, color, precio};
}

function schemaCliente(nombreCompleto, DNI, direccion, telefono){
    return {nombreCompleto, DNI, direccion, telefono};
}

function schemaVenta(cliente, carrito){
 return {cliente, carrito};
}

//Fn Interface Menu...
function opcionMenu(cantidadProductos, total){
    return parseInt(prompt(`Indumentaria Galeano para hombre.\nCantidad productos elegidos : ${cantidadProductos}  - total : ${total} \n\n1 - Elegir producto.\n2 - Hacer Check-out.\n3 - Salir.`));
}


//Fn Interface elegir producto(s)...
function elegirTallaColor(indiceProducto, productosDisponible){
   let productoElegido = productosDisponible[indiceProducto];
   
   //Elegir una talla...
   let opcionTallaElegida = parseInt(prompt(`Elegir una talla :\n1 - S.\n2 - M.\n3 - L.\n4 - XL.\n\nIndumentaria Galeano para hombre.`));

   let tallaElegida = "M"; //por defecto...
   switch(opcionTallaElegida){
    case 1:
        tallaElegida = "S";
        break;

    case 2:
        tallaElegida = "M";
        break;

    case 3:
        tallaElegida = "L";
        break;

    case 4:
        tallaElegida = "XL";
        break;

    default:
        console.log("No se ha elegido ninguna talla.\nPor lo tanto asignamos tamaño M por defecto.");
        break;

   }

   //Elegir un color...
   let opcionColorElegido = parseInt(prompt(`Elegir un color :\n1 - Negro.\n2 - Azul.\n3 - Blanco \n4 - Marrón.\n\nIndumentaria Galeano para hombre.`));

   let colorElegido = "Azul"; //por defecto...

   switch(opcionColorElegido){
    case 1:
        colorElegido = "Negro";
        break;
    
    case 2:
        colorElegido = "Azul";
        break;

    case 3:
        colorElegido = "Blanco";
        break;
    
    case 4:
        colorElegido = "Marrón";
        break;

    default:
        console.log("No se ha elegido ningún color.\nPor lo tanto asignamos color Azul por defecto...");
        break;

    
   }

   //"customize" producto elegido...
   productoElegido.talla = tallaElegida;
   productoElegido.color = colorElegido;


   return productoElegido;


}

function mostrarNombrePrecioProducto(arrProductos){

    let stringPrompt = "";

    for(let i = 0; i < arrProductos.length; i++){
        stringPrompt += `${i+1} - ${arrProductos[i].nombre} - ARG$ ${arrProductos[i].precio}\n`;
   }

   stringPrompt += `\n\nIndumentaria Galeano para hombre...`;

   return stringPrompt;

}

//Elige producto, personaliza, y pushea a un carrito...
function elegirProducto(productosDisponible, carrito){

    

    let stringPrompt = `Productos disponibles.\n\nElegir producto :\n\n`
    // for(let i = 0; i < productosDisponible.length; i++){
    //      stringPrompt += `${i+1} - ${productosDisponible[i].nombre} - ARG$ ${productosDisponible[i].precio}\n`;
    // }

    // stringPrompt += `Indumentaria Galeano para hombre...`;

    stringPrompt += mostrarNombrePrecioProducto(productosDisponible);

    let opcion = parseInt(prompt(stringPrompt));

    if (opcion >= 1 && opcion <= productosDisponible.length) {

        carrito.push(elegirTallaColor(opcion - 1, productosDisponible));
    }
    else{
        alert(`La opción ${opcion} no está dentro de lo qué se propone...\nOperación cancelada...`);
    }

    
    
}



//Fn Interface check-out...
function calcularTotalPrecio(carrito){
    let total = 0;

    for(const producto of carrito){
        total += producto.precio;
    }

    return total;
}


function checkOut(ventas, carrito){
    let total = calcularTotalPrecio(carrito);

    let cliente;

    let nombreCompleto = prompt(`Ingrese su nombre completo: `);
    let dni = prompt(`Ingrese su DNI: `);
    let direccion = prompt(`Ingrese su dirección: `);
    let telefono = prompt(`Ingrese su teléfono: `);

    if(nombreCompleto.length === 0){
        alert(`No ingresó su nombre`);
        nombreCompleto = prompt(`Ingrese su nombre completo: `);
    }

    if(dni.length === 0){
        alert(`No ingresó su DNI`);
        dni = prompt(`Ingrese su DNI: `);
    }

    if(direccion.length === 0){
        alert(`No ingresó su dirección`);
        direccion = prompt(`Ingrese su dirección: `);
    }

    if(telefono.length === 0){
        alert(`No ingresó su teléfono`);
        telefono = prompt(`Ingrese su teléfono: `);
    }

    //Registrar Cliente...
    cliente = schemaCliente(nombreCompleto,dni,direccion,telefono);

    //Simular pago...
    alert(`Está a punto de pagar un total de ARG$${total}...`);
    alert(`¡ Pago confirmado !`);

    //Guardar en ventas
    ventas.push(schemaVenta(cliente, carrito));

    console.log(ventas);

    let stringFactura = `Factura N° ${ventas.length}\n\nCliente : ${cliente.nombreCompleto} - DNI : ${cliente.DNI}\n\n`;
    
    stringFactura += mostrarNombrePrecioProducto(carrito); 


    stringFactura += `\n\nTotal pagó: ARG$${total}`;

    alert(stringFactura);
    console.log(stringFactura);
    
     
    
}


let ventas = [];



// Lista de productos disponibles
const productosDisponible = [
    schemaProducto("Camisa Formal", "Camisas", "M", "Blanco", 29990),
    schemaProducto("Pantalón de Vestir", "Pantalones", "L", "Negro", 49990),
    schemaProducto("Chaqueta de Algodón", "Chaquetas", "XL", "Gris", 79990),
    schemaProducto("Suéter de Algodón", "Suéteres", "M", "Azul Marino", 45500),
    schemaProducto("Chaleco de Invierno", "Chalecos", "L", "Negro", 69990),
    schemaProducto("Jeans Clásico", "Pantalones", "M", "Azul", 39990),
    schemaProducto("Polera Deportiva", "Poleras", "XL", "Rojo", 29990),
    schemaProducto("Camisa a Cuadros", "Camisas", "L", "Verde", 25990),
    schemaProducto("Polo de Algodón", "Polos", "M", "Gris", 19990),
    schemaProducto("Bermuda Casual", "Pantalones", "M", "Beige", 29990)
];

  
  console.log(productosDisponible);

  let carrito = [];

  let menu = opcionMenu(carrito.length, calcularTotalPrecio(carrito));


  while(menu !== 3){

    switch(menu){
        case 1:
            //fn elegirProducto()
            elegirProducto(productosDisponible, carrito);
            console.log(carrito);
            break;
        case 2:
            //fn checkOut()
            //Registrar cliente, simular pago, guardar venta en ventas, 
            // zerar carrito(setear o vaciar)...
            checkOut(ventas, carrito);
            carrito = [];
            break;
        default:
            console.log("Opción no válida");
            break;

    }

    menu = opcionMenu(carrito.length, calcularTotalPrecio(carrito));
  }