function probarValidarNombre() {
    console.assert(validarNombre("") === "Este campo debe tener al menos un caracter",
        "Validar nombre no validó que el nombre no sea vacío"
    );

    console.assert(validarNombre("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") ===
        "Este campo debe tener menos de 50 caracteres",
        "Validar nombre no validó que el nombre sea menor a 50 caracteres"
    );

    console.assert(validarNombre("Rocio") === "",
        "validarNombre falló con un nombre válido"
    );
}

function probarValidarCiudad() {
    console.assert(validarCiudad("Tucumán") === "",
        "validarCiudad falló con un nombre de ciudad válido"
    );

    console.assert(validarCiudad("") === "El campo ciudad no puede estar vacío",
        "validar ciudad no mostró un error cuando la ciudad es vacía"
    );
}

function probarValidarDescripcion() {
    console.assert(validarDescripcionRegalo("") === "El campo no puede estar vacío",
        "La función validar descripción regalo no validó que el campo no esté vacío"
    );

    console.assert(validarDescripcionRegalo("sjfdsjfsfskjfhskjfhsjkhsjhfjdshfjsdhfjskhfkjdsfjshjkfhsuiwhiuehiushfsdfhbshdbfshdfbdgfhbdsjbfsdhbfsdjhbjdbsfhsfhsbs") === "El campo es demasiado largo",
        "La función validar descripción regalo no validó que el campo no sea muy largo"
    );

    console.assert(validarDescripcionRegalo("Regalo") === "",
        "La función validar descripción regalo no funcionó con una descripción correcta"
    );

    console.assert(validarDescripcionRegalo(",.,.,.,.,.,.") === "Este campo debe tener solo letras y números",
        "La función validar descripción regalo no validó que solo sea números y letras");
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcion();
