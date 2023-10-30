//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const elementosLista = document.querySelectorAll("li");
const arrayDeNumeros = [];

for (let i = 0; i < elementosLista.length; i++) {
    arrayDeNumeros.push(parseInt(elementosLista[i].innerText));
}

let sumaTotal = 0;
for (let i = 0; i < arrayDeNumeros.length; i++) {
    sumaTotal += arrayDeNumeros[i];
}

const promedio = sumaTotal / arrayDeNumeros.length;

const numeroMasChico = Math.min(...arrayDeNumeros);
const numeroMasGrande = Math.max(...arrayDeNumeros);

const conteoNumeros = {};
let conteoMaximo = 0;
let numeroMasFrecuente;

for (let i = 0; i < arrayDeNumeros.length; i++) {
    const num = arrayDeNumeros[i];
    conteoNumeros[num] = (conteoNumeros[num] || 0)+ 1;
    if (conteoNumeros[num] > conteoMaximo) {
        conteoMaximo = conteoNumeros[num];
        numeroMasFrecuente = num;
    }
}

document.getElementById("promedio").innerText = `El promedio es: ${promedio}`;
document.getElementById('numeroMasChico').innerText = `El número más pequeño es: ${numeroMasChico}`;
document.getElementById('numeroMasGrande').innerText = `El número más grande es: ${numeroMasGrande}`;
document.getElementById('numeroMasFrecuente').innerText = `El número más frecuente es: ${numeroMasFrecuente}`;