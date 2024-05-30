/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const agregarIntegrantes = document.querySelector("#enviar-informacion");
const eliminarIntegrantes = document.querySelector("#eliminar");
const calcularSalarios = document.querySelector("#calcular");

agregarIntegrantes.onclick = function(event) {
    event.preventDefault();
    crearIntegrantes();
    mostrarBtnCalculo();
};

eliminarIntegrantes.onclick = function(event) {
    event.preventDefault();
    eliminarUltimoIntegrante();
};

calcularSalarios.onclick = function(event) {
    event.preventDefault();
    calcular();
};

function crearIntegrantes() {
    const contenedor = document.querySelector("#integrantes");

    const div = document.createElement("div");
    div.className = "integrante";

    const label = document.createElement("label");
    label.textContent = `Salario anual: `;

    const input = document.createElement("input");
    input.type = "number";
    input.className = "salario-anual";

    div.appendChild(label);
    div.appendChild(input);
    contenedor.appendChild(div);
}

function mostrarBtnCalculo() {
    const btnCalcular = document.querySelector("#calcular");
    btnCalcular.classList.remove("oculto");
}

function eliminarUltimoIntegrante() {
    const contenedor = document.querySelector("#integrantes");
    if (contenedor.lastElementChild) {
        contenedor.removeChild(contenedor.lastElementChild);
    }

    if (contenedor.children.length === 0) {
        const btnCalcular = document.querySelector("#calcular");
        btnCalcular.classList.add("oculto");
    }
}

function calcular() {
    const salarios = document.getElementsByClassName("salario-anual");
    let totalSalarios = 0;
    let numSalarios = 0;
    let maxSalario = -Infinity;
    let minSalario = Infinity;

    for (let i = 0; i < salarios.length; i++) {
        const salario = salarios[i].value.trim();
        if (salario !== '') {
            const salarioNum = parseFloat(salario);
            if (salarioNum !== 0) {
                totalSalarios += salarioNum;
                numSalarios++;
                if (salarioNum > maxSalario) maxSalario = salarioNum;
                if (salarioNum < minSalario) minSalario = salarioNum;
            }           
        }
    }

    if (numSalarios === 0) {
        alert("Por favor, ingrese al menos un salario válido.");
        return;
    }

    const promedioSalariosAnual = totalSalarios / numSalarios;
    const promedioSalariosMensual = promedioSalariosAnual / 12;

    document.getElementById("salario-mayor-anual").value = maxSalario.toFixed(2);
    document.getElementById("salario-menor-anual").value = minSalario.toFixed(2);
    document.getElementById("promedio-salarios-anual").value = promedioSalariosAnual.toFixed(2);
    document.getElementById("promedio-salarios-mensual").value = promedioSalariosMensual.toFixed(2);

    document.getElementById("salarios").classList.remove("oculto");
}
