function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos un caracter";
    }

    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return "Este campo solo debe tener letras";
    }

    return "";
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "El campo ciudad no puede estar vacío";
    }

    return "";
}

function validadDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return "El campo es demasiado largo";
    } else if (descripcionRegalo.length === 0) {
        return "El campo no puede estar vacío";
    } else if (!/^[a-z0-9\s]+$/i.test(descripcionRegalo)) {
        return "Este campo debe tener solo letras y números";
    } else {
        return "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#carta-a-santa");

    function validarFormulario(event) {
        const nombre = form.nombre.value;
        const ciudad = form.ciudad.value;
        const descripcionRegalo = form["descripcion-regalo"].value;

        const errorNombre = validarNombre(nombre);
        const errorCiudad = validarCiudad(ciudad);
        const errorDescripcionRegalo = validadDescripcionRegalo(descripcionRegalo);

        const errores = {
            nombre: errorNombre,
            ciudad: errorCiudad,
            "descripcion-regalo": errorDescripcionRegalo,
        };

        const esExito = manejarErrores(errores) === 0;

        if (esExito) {
            document.querySelector("#exito").className = "";
            form.className = "oculto";
            setTimeout(function () {
                window.location.href = "wishlist.html";
            }, 5000);
        }

        event.preventDefault();
    }

    function manejarErrores(errores) {
        const keys = Object.keys(errores);
        const $errores = document.querySelector("#errores");
        let cantidadErrores = 0;

        keys.forEach(function (key) {
            const error = errores[key];
            let $campoError = document.querySelector(`.error-${key}`);
            const $campo = form[key];

            if (error) {
                $campo.className = "error";
                cantidadErrores++;

                if ($campoError === null) {
                    const $error = document.createElement("li");
                    $error.innerText = error;
                    $error.className = `error-${key}`;
                    $errores.appendChild($error);
                }
            } else {
                $campo.className = "";
                if ($campoError) {
                    $campoError.remove();
                }
            }
        });

        return cantidadErrores;
    }

    form.addEventListener("submit", validarFormulario);
});
