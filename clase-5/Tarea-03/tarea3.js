//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


function calcularTiempo() {
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;

    const cantidadHoras = document.querySelectorAll(".horas");
    const cantidadMinutos = document.querySelectorAll(".minutos");
    const cantidadSegundos = document.querySelectorAll(".segundos");

    for (let i = 0; i < cantidadHoras.length; i++) {
        totalHoras += Number(cantidadHoras[i].value);
        totalMinutos += Number(cantidadMinutos[i].value);
        totalSegundos += Number(cantidadSegundos[i].value);
    }

    totalMinutos += Math.floor(totalSegundos / 60);
    totalSegundos %= 60;
    totalHoras += Math.floor(totalMinutos / 60);
    totalMinutos %= 60;

    const tiempoTotal = `Horas: ${totalHoras}, Minutos: ${totalMinutos}, Segundos: ${totalSegundos}`;

    document.querySelector('#duracionTotal').value = tiempoTotal;
}

document.querySelector("#btn-calcular").addEventListener('click', calcularTiempo);

