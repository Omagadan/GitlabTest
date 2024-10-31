const { generarCadenasAleatorias } = require("./funcion");
describe("Pruebas para generarCadenasAleatorias", () => {
  test("debe generar la cantidad correcta de cadenas", () => {
    const cantidad = 5;
    const longitud = 10;
    const cadenas = generarCadenasAleatorias(cantidad, longitud);

    expect(cadenas.length).toBe(cantidad);
  });

  test("cada cadena generada debe tener la longitud correcta", () => {
    const cantidad = 3;
    const longitud = 7;
    const cadenas = generarCadenasAleatorias(cantidad, longitud);

    cadenas.forEach((cadena) => {
      expect(cadena.length).toBe(longitud);
    });
  });

  test("las cadenas generadas deben ser aleatorias", () => {
    const cantidad = 10;
    const longitud = 5;
    const cadenas1 = generarCadenasAleatorias(cantidad, longitud);
    const cadenas2 = generarCadenasAleatorias(cantidad, longitud);

    const sonIguales = cadenas1.every(
      (cadena, index) => cadena === cadenas2[index]
    );
    expect(sonIguales).toBe(false);
  });
});
