// ## Propusta de Resolución.

// Un programa qué emula (simula), un sistema de compra de indumentarias para hombre.

// Esto implica :
// * Interface Menu (Elegir productos, Hacer Check-out, Salir). 
// * Interface para elegir producto(s).
// * Interface Hacer Check-out.


//Fn Prodiucto(s)
function schemaProducto(nombre, categoria, talla, color, precio){
  return {nombre, categoria, talla, color, precio};
}

//Fn Interface Menu...


//Fn Interface elegir producto(s)...



//Fn Interface check-out...



// Lista de productos disponibles
const productosDisponible = [
    schemaProducto("Camisa Casual", "Camisas", "M", "Azul", 25999),
    schemaProducto("Pantalón de Jean", "Pantalones", "L", "Negro", 39990),
    schemaProducto("Chaqueta de Cuero", "Chaquetas", "XL", "Marrón", 89990),
    schemaProducto("Suéter de Lana", "Suéteres", "M", "Gris", 45500),
    schemaProducto("Zapatos Deportivos", "Calzado", "42", "Blanco", 59990),
    schemaProducto("Bufanda de Algodón", "Accesorios", "Única", "Rojo", 14990),
    schemaProducto("Cinturón de Cuero", "Accesorios", "Única", "Negro", 19990),
    schemaProducto("Traje de Oficina", "Trajes", "L", "Azul Marino", 199990),
    schemaProducto("Gorra Casual", "Accesorios", "Única", "Beige", 9990),
    schemaProducto("Reloj Clásico", "Accesorios", "Única", "Plateado", 129990)
  ];
  
  console.log(productosDisponible);
