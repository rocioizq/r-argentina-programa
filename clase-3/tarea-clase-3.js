// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


const miNombre = "rocio";
const nombreAmigo = "lucas";
const nombreUsuario = (prompt("Escribe tu nombre") || "").toLowerCase();

if (nombreUsuario === miNombre) {
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`);

} else if (nombreUsuario === nombreAmigo) {
    console.log(`Hola ${nombreUsuario} te llamas igual que mi amigo`)

} else if (nombreUsuario.trim().length === 0) {
    console.log("No ingresaste ningún nombre");
    
} else {
    console.log(`Hola ${nombreUsuario}`);
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.


const miEdad = 24;
const edadUsuario = Number(prompt("Cual es tu edad?"));

if (edadUsuario === miEdad) {
    console.log("Tenemos la misma edad");

} else if (edadUsuario > miEdad) {
    console.log("Sos mayor que yo");

} else if (edadUsuario < miEdad) {
    console.log("Yo soy mayor que vos");

} else {
    console.log("No entendi tu respuesta");
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const mayoriaDeEdad = 18;
const respuestaSi = "si";
const respuestaNo = "no";

const usuarioTieneDocumento = prompt("Tienes documento?").toLowerCase();

if (usuarioTieneDocumento === respuestaSi) {
    const edad = Number(prompt("Cual es tu edad?"));

    if(edad >= mayoriaDeEdad) {
        console.log("Puedes entrar al bar");

    } else {
        console.log("No puedes pasar al bar");
    }

} else if (usuarioTieneDocumento === respuestaNo) {
    console.log("No puedes pasar al bar");

} else {
    console.log("No entendi tu respuesta");
}
