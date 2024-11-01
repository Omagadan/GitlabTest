function generarCadenaAleatoria(longitud) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let resultado = "";
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres[indiceAleatorio];
  }
  return resultado;
}

function generarCadenasAleatorias(cantidad, longitud) {
  const cadenas = [];
  for (let i = 0; i < cantidad; i++) {
    cadenas.push(generarCadenaAleatoria(longitud));
  }

  return cadenas;

}

const cantidadCadenas = 20;
const longitudCadena = 10;

const cadenasAleatorias0 = generarCadenasAleatorias(
  cantidadCadenas,
  longitudCadena
);
const cadenasAleatorias1 = generarCadenasAleatorias(

console.log(cadenasAleatorias0);
console.log(cadenasAleatorias1);

module.exports = { generarCadenaAleatoria, generarCadenasAleatorias };
