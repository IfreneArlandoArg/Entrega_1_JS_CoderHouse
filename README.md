# Entrega_1_JS_CoderHouse
Entrega correspondiendo a la 1ra entrega para el curso de javaScript CoderHouse.

## Enunciado.

Objetivos generales : 

* Armar la estructura base del simulador

* Integrar las herramientas JS aprendidas hasta aquí

Objetivos específicos :

* Declara variables, constantes y arrays

* Crea una o más funciones JS que generen interacción

* Agrega los ciclos de iteración y/o condicionales necesarios, para que tu proyecto funcione correctamente

* Integra el uso de la Consola JS y de los cuadros de diálogo Prompt, Confirm, Alert.

Se debe entregar

Documento HTML (al menos uno)

Archivo JS referenciado en el HTML


## Propusta de Resolución.

Un programa qué emula (simula), un sistema de compra de indumentarias para hombre.

Esto implica :
* Interface Menu (Elegir productos, Hacer Check-out, Salir). 
* Interface para elegir producto(s).
* Interface Hacer Check-out.  

## Menu.

Loop While para que el usuario pueda elegir entre las opciones del Menu.
* Cantidad productos elegidos y total a pagar.
* Elegir Producto (redirrecciona a interface correspondiente).
* Hacer Check-out (redirrecciona a interface correspondiente).
* Salir (cerrar el loop y renderizar HTML).

## Elegir Producto.
* El sistema muestra un listado de productos con precios.
* El usuario selecciona un producto y confirma (Ok).
* El sistema pregunta talla del producto seleccionado.
* El usuario elige talla y confirma (Ok).
* El sistema pregunta por color del producro seleccionado.
* El usuario elige color y confirma (Ok).
* El sistema pregunta si quiere seguir comprando.
* El usuario elige si quiere seguir comprando o no.
* Si el usuario elige seguir comprando, el sistema redirige a la interfaz inicial de Elegir Producto.
* Si el usuario elige no seguir comprando, el sistema redirige a la interfaz principal (menu).

## Hacer Check-out.
* En el caso de no tener productos en el carrito, el sistema muestra un mensaje de error y agradece.

Caso contrario :

* El sistema pide al usuario de ingresar su nombre completo para la facturación.
* El usuario ingresa su nombre completo y confirma (Ok).
* El sistema pide a qué el usuario (cliente) ingresé su DNI.
* El usuario ingresa su DNI y confirma (Ok).
* El sistema pide dirección de entrega.
* El usuario ingresa dirección de entrega y confirma (Ok).
* El sistema pregunta telefono de contacto.
* El usuario ingresa telefono de contacto y confirma (Ok).
* El sistema informa de la cantidad qué está a punto de pagar.
* El usuario confirma (Ok).
* El sistema confirma el pago.
* El sistema muestra la factura con nombre, dni del cliente, listado de productos comprados, total venta.
* El sistema muestra un mensaje de agradecimiento.
* El sistema guarda la venta (cliente + carrito), resetea carrito (para la próxima venta), y redirige a la interfaz principal (menu).

Observación después del check-out se resetea el carrito, por lo tanto en menu principal cant. productos elegido(s) y total = 0. 


# Salir
* El sistema cierra el loop y renderiza HTML.