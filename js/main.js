// arrays para almacenar informacion de las prendas
let prendas = [
    { nombre: "Vestidos", precio: 12000, cantidad: 50 },
    { nombre: "Blusas", precio: 9000, cantidad: 30 },
    { nombre: "Pantalones", precio: 13500, cantidad: 40 },
    { nombre: "Remeras", precio: 18000, cantidad: 20 },
    { nombre: "Carteras", precio: 23000, cantidad: 15 }
];

// funcion para buscar una prenda por nombre
function buscarPrenda(nombre) {
    return prendas.find(prenda => prenda.nombre.toLowerCase() === nombre.toLowerCase());
}

// función para filtrar prendas por precio máximo
function filtrarPorPrecioMaximo(precioMaximo) {
    return prendas.filter(prenda => prenda.precio <= precioMaximo);
}

// objeto para almacenar la información del usuario
let usuario = {
    nombre: "",
    registrado: false
};

// funcion para registrar al usuario
function registrarUsuario() {
    usuario.nombre = prompt("Ingrese su nombre por favor:");
    usuario.registrado = true;
    alert("¡Bienvenido " + usuario.nombre + "! Gracias por registrarte.");
}

// verificar si el usuario está registrado
if (!usuario.registrado) {
    registrarUsuario();
}

// solicitar al usuario que indique su presupuesto máximo
let presupuestoMaximo = parseInt(prompt("Ingrese su presupuesto máximo para la compra:"));

// Filtrar las prendas disponibles según el presupuesto máximo
let prendasDisponibles = filtrarPorPrecioMaximo(presupuestoMaximo);

// verificar si hay prendas disponibles después del filtro
if (prendasDisponibles.length === 0) {
    alert("Lo sentimos, no hay prendas disponibles dentro de su presupuesto máximo.");
} else {
    // Mostrar las prendas disponibles dentro del presupuesto máximo en un listado
    let mensajePrendas = "Prendas disponibles dentro de su presupuesto máximo de $" + presupuestoMaximo + ":\n";
    for (let prenda of prendasDisponibles) {
        mensajePrendas += "- " + prenda.nombre + " - Precio: $" + prenda.precio + " - Cantidad disponible: " + prenda.cantidad + "\n";
    }
    alert(mensajePrendas);
}

// Función para determinar el nombre de la prenda elegida
function determinarPrenda(opcion) {
    switch (opcion) {
        case 1:
            return "Vestidos";
        case 2:
            return "Blusas";
        case 3:
            return "Pantalones";
        case 4:
            return "Remeras";
        case 5:
            return "Carteras";
        default:
            alert("Opción inválida. Por favor, seleccione una opción válida.");
            return null;
    }
}

let continuar;

do {
    let opcion = parseInt(prompt("Seleccione la prenda que desea comprar: \n1. Vestidos \n2. Blusas \n3. Pantalones \n4. Remeras \n5. Carteras"));
    let cantidad = parseInt(prompt("Ingrese la cantidad de prendas que desea comprar:"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese una cantidad válida y mayor que cero.");
        continue; // vuelve al inicio del bucle para seleccionar nuevamente
    } else if (cantidad > 10) { // limite 10 unidades
        let confirmarCantidad = confirm("ha ingresado una cantidad muy alta. ¿Desea continuar con " + cantidad + " unidades de todas formas?");
        if (!confirmarCantidad) {
            continue; // vuelve al inicio del bucle para seleccionar nuevamente
        }
    }

    if (cantidad < 0) {
        alert("no se pueden seleccionar cantidades negativas.");
        continue; // vuelve al inicio del bucle para seleccionar nuevamente
    }

    let prendaElegida = determinarPrenda(opcion);

    if (prendaElegida) {
        // Calcular el subtotal de la compra
        let subtotal = 0;
        let prendaEncontrada = buscarPrenda(prendaElegida);
        if (prendaEncontrada) {
            subtotal = prendaEncontrada.precio * cantidad;
            alert("Ha seleccionado " + cantidad + " " + prendaElegida + "(s). Subtotal: $" + subtotal.toFixed(2));
        } else {
            alert("La prenda seleccionada no está disponible.");
        }
    }

    continuar = prompt("¿Desea seleccionar otras prendas? (Si/No)").toLowerCase();

} while (continuar === "si");

// mostrar el total de la compra
alert("¡Gracias por su compra!");
