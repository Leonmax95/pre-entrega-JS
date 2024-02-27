// nombre 
let nombreUsuario = prompt("Ingrese su nombre por favor:");
alert("Bienvenido " + nombreUsuario + ".");

// precios prendas
const precios = {
    vestido: 12000,
    blusa: 9000,
    pantalón: 13500,
    remera: 18000,
    cartera: 23000
};

let totalCompra = 0; // almacenar compra

do {
    let opcion = parseInt(prompt("Seleccione la prenda que desea comprar: \n1. Vestidos \n2. Blusas \n3. Pantalones \n4. Remeras \n5. Carteras"));

    // almacenar el nombre de la prenda que se selecciona
    let prendaElegida;

    /// determinar la prenda seleccionada
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

    // ver si se seleccionó una prenda válida
    if (prendaElegida) {
        // Agregar el precio de la prenda seleccionada al total de la compra
        totalCompra += precios[prendaElegida];
        alert("Ha seleccionado " + prendaElegida + ". Precio: $" + precios[prendaElegida]);
      }

    var continuar = prompt("¿Desea seleccionar otras prendas? (Si/No)").toLowerCase();

} while (continuar === "si");

// Mostrar toda la compra
alert("El total de su compra es: $" + totalCompra  + ". Gracias por su compra!");