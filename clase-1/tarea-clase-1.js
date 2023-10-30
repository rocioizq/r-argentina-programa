//CALCULAR EDAD USUARIO
/*
    const anioActual = Number(prompt("Cual es el año actual?"));
    const anioNacimiento = Number(prompt("Cual es tu año de nacimiento?"));

    function calcularEdadUsuario(anioActual, anioNacimiento) {
        return anioActual - anioNacimiento;
    }

    console.log("Tu edad es de " + calcularEdadUsuario(anioActual,anioNacimiento) + " años");
*/
//PREGUNTAR SALARIO ANUAL  Y CLACULAR EL MENSUAL
/*
    const salarioAnual = Number(prompt("Cual es tu salario anual?"));

    function calcularSalarioMensual(salarioAnual) {
        const mesesAnio = 12;
        return salarioAnual / mesesAnio;
    }

    console.log("Tu salario mensual es de " + calcularSalarioMensual(salarioAnual));

    
*/

//PREGUNTAR SALARIO MENSUAL Y CALCULAR EL SALARIO ANUAL
/*
    const salarioMensual = Number(prompt("Cual es tu salario mensual?"));

    function calcularSalarioAnual(salarioMensual) {
        const mesesAnio = 12;
        return salarioMensual * mesesAnio;
    }

    console.log("Tu salario anual es de " + calcularSalarioAnual(salarioMensual));

*/

//PREGUNTAR CUANTAS HORAS TRABAJA Y CUANTO COBRA Y CALCULAR SALARIO DIARIO
/*
    const horasTrabajadas = Number(prompt("Cuantas horas trabajas al día?"));
    const salarioPorHora = Number(prompt("Cual es tu salario por hora?"));

    function calcularSalarioDiario(horasTrabajadas, salarioPorHora) {
        return horasTrabajadas * salarioPorHora;
    }

    console.log("Tu salario diario es de " + calcularSalarioDiario(horasTrabajadas, salarioPorHora));

*/

//PREGUNTAR SALARIO DIARIO Y CALCULAR SALARIO SEMANAL
/*
    const salarioDiario = Number(prompt("Cual es tu salario diario?"));

    function calcularSalarioSemanal(salarioDiario) {
        diasDeTrabajo = 5;
        return salarioDiario * diasDeTrabajo;
    }

    console.log("Tu salario semanal es de " + calcularSalarioSemanal(salarioDiario));
*/

// PREGUNTAR HORAS TRABAJADAS Y CALCULAR SUELDO POR HORA
/*
    const horasTrabajadas = Number(prompt("Cuantas horas trabajas al día?"));
    const salarioDiario = Number(prompt("Cual es tu salario diario?"));

    function calcularSalarioPorHora(horasTrabajadas, salarioDiario) {
        return salarioDiario / horasTrabajadas;
    }

    console.log("Tu sueldo por hora es de " + calcularSalarioPorHora(horasTrabajadas, salarioDiario));

*/    
///////////////////////////////////

/// SCOPE

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
//pruebaHoisting();
*/
/*

var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);


console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
*/

///Practica///
/*
let anioNacimiento = Number(prompt("En que año naciste?"));
let mesNacimiento = Number(prompt("En que mes naciste?"));
let anioActual = Number(prompt("Cual es el año actual?"));

function calcularMesesVividos(anioActual, anioNacimiento, mesNacimiento) {
    return (anioActual - anioNacimiento) * 12 + mesNacimiento;
}

console.log("Tenes " + calcularMesesVividos(anioActual, anioNacimiento, mesNacimiento) + " meses vividos");
*/
///////////