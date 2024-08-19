/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const enviarInformacion = document.querySelector("#enviar-informacion");

enviarInformacion.onclick = function(event) {
    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
    
    document.querySelector(".calcular").classList.remove("oculto");

    event.preventDefault();
};

document.querySelector(".calcular").onclick = function(event) {
    event.preventDefault();

    const inputsEdades = document.querySelectorAll(".integrantes input");
    const edades = [];

    for (let i = 0; i < inputsEdades.length; i++) {
        const edad = parseInt(inputsEdades[i].value);
        edades.push(edad);
    }

    const mayorEdad = calcularEdadMayor(edades);
    const menorEdad = calcularEdadMenor(edades);
    
    const promedioEdad = calculaPromedio(edades);

    document.querySelector("#edad-mayor").textContent = mayorEdad;
    document.querySelector("#edad-menor").textContent = menorEdad;
    document.querySelector("#edad-promedio").textContent = promedioEdad.toFixed(2);

    mostrarElemento("analisis");
};

document.querySelector("#empezar-de-nuevo").onclick = function(event) {
    const formulario = document.querySelector("#calcular-edades");
    formulario.reset();

    borrarIntegrantesAnteriores();

    document.querySelector("#edad-mayor").textContent = '';
    document.querySelector("#edad-menor").textContent = '';
    document.querySelector("#edad-promedio").textContent = '';
    
    ocultarElemento("analisis");
    ocultarElemento("calcular");

    document.querySelector(".calcular").classList.add("oculto");

    event.preventDefault();
};

function crearIntegrantes(cantidadIntegrantes) {
    const contenedor = document.querySelector(".integrantes");
    contenedor.classList.add("d-flex", "flex-column", "align-items-center"); 

    for (let i = 0; i < cantidadIntegrantes; i++) {
        const div = document.createElement("div");
        div.classList.add("mb-3", "w-50", "input-container"); 

        const label = document.createElement("label");
        label.textContent = `Edad del integrante ${i + 1}: `;
        label.classList.add("form-label");

        const input = document.createElement("input");
        input.type = "number";
        input.classList.add("form-control");

        div.appendChild(label);
        div.appendChild(input);
        contenedor.appendChild(div);
    }
}

function borrarIntegrantesAnteriores() {
    const contenedorIntegrantes = document.querySelector(".integrantes");
    const integrantes = contenedorIntegrantes.querySelectorAll(".input-container"); 

    integrantes.forEach(function(integrante) {
        contenedorIntegrantes.removeChild(integrante);
    });
}


function ocultarElemento(clase) {
    document.querySelector("." + clase).classList.add("oculto");
}

function mostrarElemento(clase) {
    document.querySelector("." + clase).classList.remove("oculto");
}

function calcularEdadMayor(numeros) {
    let mayorEdad = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayorEdad) {
            mayorEdad = numeros[i];
        }
    }
    return mayorEdad;
}
  
function calcularEdadMenor(numeros) {
    let menorEdad = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorEdad) {
            menorEdad = numeros[i];
        }
    }
    return menorEdad;
}

function calculaPromedio(numeros) {
    let promedio = 0;
    for (let i = 0; i < numeros.length; i++) {
        promedio += numeros[i];
    }
    promedio = promedio / numeros.length;

    return promedio;
}

