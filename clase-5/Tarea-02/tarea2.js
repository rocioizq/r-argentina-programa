//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

document.querySelector("#mostrar-info-usuario").onclick = function() {
    const primerNombreUsuario = document.querySelector("#primer-nombre").value;
    const segundoNombreUsuario = document.querySelector("#segundo-nombre").value;
    const apellidosUsuario = document.querySelector("#apellidos-usuario").value;
    const edadUsuario = Number(document.querySelector("#edad-usuario").value);

    document.querySelector("#info-usuario").value =  `${primerNombreUsuario} ${segundoNombreUsuario} ${apellidosUsuario} ${edadUsuario}`;

    document.querySelector("h1").innerText = `Bienvenido ${primerNombreUsuario} ${segundoNombreUsuario}`;
    return false;
}