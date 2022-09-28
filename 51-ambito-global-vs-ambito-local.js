/*

Tema: Ámbito global vs. ámbito local en funciones.
*/

var miNombre = "Nora";

function mostrarMiNombre() {
  var miNombre = "Gino";
  console.log(miNombre);
}

mostrarMiNombre();

console.log(miNombre);
