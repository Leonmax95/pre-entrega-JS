
let prendas = [
    { nombre: "Vestidos", precio: 12000, cantidad: 50 },
    { nombre: "Calzados", precio: 9000, cantidad: 30 },
    { nombre: "Pantalones", precio: 13500, cantidad: 40 },
    { nombre: "Remeras", precio: 18000, cantidad: 20 },
    { nombre: "Mochilas", precio: 23000, cantidad: 15 }
];


function buscarPrenda(nombre) {
    return prendas.find(prenda => prenda.nombre.toLowerCase() === nombre.toLowerCase());
}


function filtrarPorPrecioMaximo(precioMaximo) {
    return prendas.filter(prenda => prenda.precio <= precioMaximo);
}

let usuario = {
    nombre: "",
    registrado: false
};

function registrarUsuario() {
    let nombre;
    let regex = /^[a-zA-Z\s]*$/; 

    do {
        nombre = prompt("Ingrese su nombre por favor:");
        if (!regex.test(nombre) || nombre.trim() === "") {
            alert("Por favor, ingrese un nombre válido. No se permiten números ni caracteres especiales.");
        }
    } while (!regex.test(nombre) || nombre.trim() === "");

    usuario.nombre = nombre;
    usuario.registrado = true;
    alert("¡Bienvenido " + usuario.nombre + "! Gracias por registrarte.");
}


if (!usuario.registrado) {
    registrarUsuario();
}


function obtenerPresupuesto() {
    while (true) {
        const presupuesto = prompt("Ingrese su presupuesto máximo para la compra, mínimo $9000:");

        
        const monto = parseFloat(presupuesto);
        if (!isNaN(monto) && monto >= 9000) {
            alert(`¡Excelente! Su presupuesto es de $${monto}. ¡A comprar se ha dicho!`);
            return monto;
        } else {
            alert("Por favor, ingrese un monto válido mayor o igual a 9000.");
        }
    }
}

// obtener el presupuesto
let presupuestoMaximo = obtenerPresupuesto();

// Función para determinar el nombre de la prenda elegida
function determinarPrenda(opcion) {
    switch (opcion) {
        case 1:
            return "Vestidos";
        case 2:
            return "Calzados";
        case 3:
            return "Pantalones";
        case 4:
            return "Remeras";
        case 5:
            return "Mochilas";
        default:
            alert("Opción inválida. Por favor, seleccione una opción válida.");
            return null;
    }
}

let prendasDisponibles = filtrarPorPrecioMaximo(presupuestoMaximo);
let mensajePrendas = "Prendas disponibles dentro de su presupuesto máximo de $" + presupuestoMaximo + ":\n";

for (let i = 0; i < prendasDisponibles.length; i++) {
    mensajePrendas += "- " + prendasDisponibles[i].nombre + " - Precio: $" + prendasDisponibles[i].precio + " - Cantidad disponible: " + prendasDisponibles[i].cantidad + "\n";
}

alert(mensajePrendas);

let continuar;

do {
    let opcion;
    do {
        opcion = parseInt(prompt("Seleccione la prenda que desea comprar: \n1. Vestidos \n2. Calzados \n3. Pantalones \n4. Remeras \n5. Mochlas"));
        
        if (isNaN(opcion) || opcion < 1 || opcion > 5) {
            alert("Por favor, ingrese un número válido entre 1 y 5, acorde a la opción de prenda");
        }
    } while (isNaN(opcion) || opcion < 1 || opcion > 5);
    
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingrese la cantidad de prendas que desea comprar:"));
    
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingrese una cantidad válida y mayor que cero.");
        } else if (cantidad > 20) { // límite 20 unidades
            let confirmarCantidad = confirm(`Ha ingresado una cantidad muy alta (${cantidad} unidades). ¿Desea continuar de todas formas?`);
            if (!confirmarCantidad) {
                continue; // vuelve al inicio del bucle para seleccionar nuevamente
            }
        }
    } while (isNaN(cantidad) || cantidad <= 0);

    let prendaElegida = determinarPrenda(opcion);

    if (prendaElegida) {
        let prendaEncontrada = buscarPrenda(prendaElegida);
        if (prendaEncontrada) {
            if (cantidad <= prendaEncontrada.cantidad) {
                // Calcular el subtotal de la compra
                let subtotal = prendaEncontrada.precio * cantidad;
                alert(`Ha seleccionado ${cantidad} ${prendaElegida}(s). Subtotal: ${subtotal.toFixed(2)}`);
            } else {
                alert(`Lo sentimos, solo hay ${prendaEncontrada.cantidad} ${prendaElegida}(s) disponibles en stock.`);
            }
        } else {
            alert("La prenda seleccionada no está disponible.");
        }
    }

    // Preguntar si desea seleccionar otras prendas aquí, fuera del bloque anterior
    do {
        continuar = prompt("¿Desea seleccionar otras prendas? (Si/No)").toLowerCase();
    } while (continuar !== "si" && continuar !== "no");
} while (continuar === "si");

// mostrar el total de la compra
alert("¡Gracias por su compra!");





