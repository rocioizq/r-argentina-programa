function probarValidarNombre() {
    console.assert(validarNombre("") === "Este campo debe tener al menos un caracter",
      "Validar nombre no validó que el nombre no sea vacío");

  console.assert(validarNombre("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") ===
      "Este campo debe tener menos de 50 caracteres",
      "Validar nombre no validó que el nombre sea menor a 50 caracteres");

  console.assert(validarNombre("Rocio") === "",
      "validarNombre falló con un nombre válido");
};

function probarValidarCiudad() {
    console.assert(validadCiudad("Tucumán") === "",
        "validarCiudad falló con un nombre de ciudad válido"
    );
};

function probarValidarDescripcion() {
    console.assert(validadDescripcionRegalo("") === "El campo no puede estar vacío",
    "La función validar descripción regalo no validó que el campo no esté vacío");

    console.assert(validadDescripcionRegalo("sjfdsjfsfskjfhskjfhsjkhsjhfjdshfjsdhfjskhfkjdsfjshjkfhsuiwhiuehiushfsdfhbshdbfshdfbdgfhbdsjbfsdhbfsdjhbjdbsfhsfhsbs") === "El campo es demasiado largo",
    "La función validar descripción regalo no validó que el campo no sea muy largo");

    console.assert(validadDescripcionRegalo("Regalo") === "",
    "La función validar descripción regalo no funcionó con una descripción correcta");
}

probarValidarNombre();
probarValidarCiudad();