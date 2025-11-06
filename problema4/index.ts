const lista: ReadonlyArray<string> = [
  "rojo", "verde", "azul", "amarillo", "gris", "blanco", "negro", "naranja", "cafe", "morado",
] as const;

const borrar: ReadonlyArray<string> = [
  "rojo", "blanco", "naranja", "morado", "celeste",
] as const;

const removeAll = <T>(xs: ReadonlyArray<T>, rm: ReadonlyArray<T>): T[] => {
  const rmSet = new Set(rm);
  return xs.filter(x => !rmSet.has(x));
};

const resultado = removeAll(lista, borrar);
console.log(JSON.stringify(resultado, null, 2));
