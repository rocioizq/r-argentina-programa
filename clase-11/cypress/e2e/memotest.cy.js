const URL = "http://127.0.0.1:5501/index.html";

context("Memotest", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Verifica que el tablero tenga 16 cuadros", () => {
    cy.get(".tablero").find(".item").should("have.length", 16);
  });

  it("Verifica que los emojis no se muestran al cargar la página", () => {
    cy.get(".tablero").find(".item.flip").should("have.length", 0);
  });

  it("Verifica que los emojis se asignan aleatoriamente", () => {
    let emojisOriginales = [];
    cy.get(".item .back").then((cuadros) => {
      cuadros.each((i, cuadro) => {
        emojisOriginales.push(cuadro.textContent.trim());
      });

      cy.visit(URL);

      let emojisNuevos = [];
      cy.get(".item .back").then((nuevosCuadros) => {
        nuevosCuadros.each((i, cuadro) => {
          emojisNuevos.push(cuadro.textContent.trim());
        });
        cy.wrap(emojisOriginales).should("not.deep.equal", emojisNuevos);
      });
    });
  });

  it("Verifica que al seleccionar dos cuadros que no coinciden se volteen de vuelta", () => {
    cy.get(".item").then((cuadros) => {
      const primerCuadro = cuadros[0];
      const segundoCuadro = cuadros[1];

      cy.wrap(primerCuadro).click();
      cy.wrap(segundoCuadro).click();

      cy.wait(1500); 
      cy.wrap(primerCuadro).should("not.have.class", "flip");
      cy.wrap(segundoCuadro).should("not.have.class", "flip");
    });
  });

  it("Verifica que al seleccionar dos cuadros que coinciden queden volteados", () => {
    let mapaPares = {};

    cy.get(".item .back").then((cuadros) => {
      cuadros.each((i, cuadro) => {
        const emoji = cuadro.textContent.trim();
        if (!mapaPares[emoji]) {
          mapaPares[emoji] = [];
        }
        mapaPares[emoji].push(cuadro.parentElement);
      });

      const pares = Object.values(mapaPares).filter((par) => par.length === 2);
      const [primerCuadro, segundoCuadro] = pares[0];

      cy.wrap(primerCuadro).click();
      cy.wrap(segundoCuadro).click();

      cy.wait(1500);
      cy.wrap(primerCuadro).should("have.class", "flip");
      cy.wrap(segundoCuadro).should("have.class", "flip");
    });
  });

  it("Verifica el juego completo y que se muestre el mensaje de fin de juego y el boton de reinicio funcione", () => {
    let mapaPares = {};

    cy.get(".item .back").then((cuadros) => {
      cuadros.each((i, cuadro) => {
        const emoji = cuadro.textContent.trim();
        if (!mapaPares[emoji]) {
          mapaPares[emoji] = [];
        }
        mapaPares[emoji].push(cuadro.parentElement);
      });

      const pares = Object.values(mapaPares).filter((par) => par.length === 2);

      pares.forEach(([primerCuadro, segundoCuadro]) => {
        cy.wrap(primerCuadro).click();
        cy.wrap(segundoCuadro).click();
        cy.wait(500);
      });

      cy.get(".item").should("have.class", "desactivado");
      cy.get(".tablero").should("not.be.visible");

      cy.get(".finDeJuego").should("be.visible");
      cy.get("#turnos").should("not.have.text", "0");
      cy.get(".btn-reinicio").should("be.visible").click();
      cy.get(".tablero").should("be.visible");


    });
  });
 
});
