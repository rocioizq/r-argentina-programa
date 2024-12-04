const tablero = document.querySelector(".tablero");
const cuadros = document.querySelectorAll(".item");
const finDeJuego = document.querySelector(".finDeJuego");
const turnosTexto = document.querySelector("#turnos");
const btnReinicio = document.querySelector(".btn-reinicio");
const emojis = ["🗼", "🗿", "🗽", "🌉", "🕌", "⛩️", "✈️", "🏞️", "🗼", "🗿", "🗽", "🌉", "🕌", "⛩️", "✈️", "🏞️"];
let turnos = 0;
let primerCuadro = null;
let cuadrosDesactivados = 0;

function emojisRandoms() {
    emojis.sort(function() {
        return Math.random() - 0.5;
    });

    return emojis;
}

function iniciarJuego() {
    const emojisAleatorios = emojisRandoms();
    cuadros.forEach(function (cuadro, index) {
        cuadro.querySelector(".back").textContent = emojisAleatorios[index];
    });
}

cuadros.forEach(function(cuadro) {
    cuadro.onclick = function() {
        mostrarCuadro(cuadro);
        compararCuadros(cuadro);
    }
});

function mostrarCuadro(cuadro) {
    cuadro.classList.toggle("flip");
}

function compararCuadros(cuadro){
    if (primerCuadro === null) {
        primerCuadro = cuadro;
    } else {
        turnos++;

        if (emojisIguales(primerCuadro, cuadro)) {
            desactivarCuadro(primerCuadro);
            desactivarCuadro(cuadro);
            primerCuadro = null;
        } else {
            setTimeout(function() {
                primerCuadro.classList.toggle("flip");
                cuadro.classList.toggle("flip");
                primerCuadro = null;
            }, 1000);
        }
    }   
}

function emojisIguales(cuadro1, cuadro2) {
    return cuadro1.querySelector(".back").textContent === cuadro2.querySelector(".back").textContent;
}

function desactivarCuadro(cuadro) {
    cuadro.classList.add("desactivado");
    cuadro.style.pointerEvents = "none";
    cuadrosDesactivados++;
    finalizarJuego();
}

function finalizarJuego() {
    if (cuadrosDesactivados === cuadros.length) {
        setTimeout(function () {
            tablero.style.display = "none";
            finDeJuego.style.display = "block";
            turnosTexto.textContent = turnos;
        }, 1000);
    }
}

btnReinicio.onclick = function() {
    turnos = 0;
    cuadrosDesactivados = 0;
    primerCuadro = null;

    setTimeout(function() {
        cuadros.forEach(function(cuadro) {
            cuadro.classList.remove("flip", "desactivado");
            cuadro.style.pointerEvents = "auto";
        });
    
    
    
        tablero.style.display = "flex";
        finDeJuego.style.display = "none";
        iniciarJuego();
    }, 500);
}

iniciarJuego();
