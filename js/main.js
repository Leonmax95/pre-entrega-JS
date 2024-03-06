// nombre 
let nombreUsuario = prompt("Ingrese su nombre por favor:");
alert("Bienvenido " + nombreUsuario + ".");

// precios de prendas
const precioVestido = 12000;
const precioBlusa = 9000;
const precioPantalon = 13500;
const precioRemera = 18000;
const precioCartera = 23000;

let totalCompra = 0; // almacenar el total de la compra

// función para determinar el nombre de la prenda seleccionada
function determinarPrenda(opcion) {
    let prendaElegida;
    switch (opcion) {
        case 1:
            prendaElegida = "vestido";
            break;
        case 2:
            prendaElegida = "blusa";
            break;
        case 3:
            prendaElegida = "pantalón";
            break;
        case 4:
            prendaElegida = "remera";
            break;
        case 5:
            prendaElegida = "cartera";
            break;
        default:
            alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
    return prendaElegida;
}

let continuar 

do {
    let opcion = parseInt(prompt("Seleccione la prenda que desea comprar: \n1. Vestidos \n2. Blusas \n3. Pantalones \n4. Remeras \n5. Carteras"));
    let cantidad = parseInt(prompt("Ingrese la cantidad de prendas que desea comprar:"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese una cantidad válida y mayor que cero.");
        continue; // vuelve al inicio del bucle para seleccionar nuevamente
    } else if (cantidad > 50) { // limite 50 unidades
        let confirmarCantidad = confirm("Ha ingresado una cantidad muy alta. ¿Desea continuar con " + cantidad + " unidades?");
        if (!confirmarCantidad) {
            continue; // vuelve al inicio del bucle para seleccionar nuevamente
        }
    }

    if (cantidad < 0) {
        alert("No se pueden seleccionar cantidades negativas.");
        continue; // vuelve al inicio del bucle para seleccionar nuevamente
    }

    let prendaElegida = determinarPrenda(opcion);

    if (prendaElegida) {
        // calcular el subtotal de la compra
        let subtotal = 0;
        switch (prendaElegida) {
            case "vestido":
                subtotal = precioVestido * cantidad;
                break;
            case "blusa":
                subtotal = precioBlusa * cantidad;
                break;
            case "pantalón":
                subtotal = precioPantalon * cantidad;
                break;
            case "remera":
                subtotal = precioRemera * cantidad;
                break;
            case "cartera":
                subtotal = precioCartera * cantidad;
                break;
        }
        totalCompra += subtotal; // agregar el subtotal al total de la compra
        alert("Ha seleccionado " + cantidad + " " + prendaElegida + "(s). Subtotal: $" + subtotal);
    }

    continuar = prompt("¿Desea seleccionar otras prendas? (Si/No)").toLowerCase();

} while (continuar === "si");

// mostrar el total de la compra
alert("El total de su compra es: $" + totalCompra + ". ¡Gracias por su compra!");

