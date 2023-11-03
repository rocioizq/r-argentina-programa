//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const lista = document.querySelectorAll("li");
const numeros = [];

for (let i = 0; i < lista.length; i++) {
    numeros.push(parseInt(lista[i].innerText));
}

let sumaTotal = 0;
for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
}

const promedio = sumaTotal / numeros.length;

let numeroMasChico = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if(numeros[i] < numeroMasChico) {
        numeroMasChico = numeros[i];
    }
}

let numeroMasGrande = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i]
    }
}

const conteoNumeros = {};
let conteoMaximo = 0;
let numeroMasFrecuente;

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    conteoNumeros[numero] = (conteoNumeros[numero] || 0)+ 1;
    if (conteoNumeros[numero] > conteoMaximo) {
        conteoMaximo = conteoNumeros[numero];
        numeroMasFrecuente = numero;
    }
}

document.getElementById("promedio").innerText = `El promedio es: ${promedio}`;
document.getElementById('numero-mas-chico').innerText = `El número más pequeño es: ${numeroMasChico}`;
document.getElementById('numero-mas-grande').innerText = `El número más grande es: ${numeroMasGrande}`;
document.getElementById('numero-mas-frecuente').innerText = `El número más frecuente es: ${numeroMasFrecuente}`;