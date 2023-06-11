
const select = document.querySelector("#select");
const parrafoTotal = document.querySelector(".parrafoTotal");
const cantidad = document.querySelector(".cantidad");
const botonResumen = document.querySelector(".resumen");
const botonBorrar = document.querySelector(".borrar");

descuento = [1, 1, 0.2, 0.5, 0.85];

let total = (cantidad, categoria, texto) => {
    texto.textContent = `Total a pagar: $ ${200 * cantidad * descuento[parseInt(categoria)]}`;
};

select.addEventListener("change", () => {
  parrafoTotal.innerHTML = `Total a pagar: $ `;
});

cantidad.addEventListener("input", () => {
  parrafoTotal.innerHTML = `Total a pagar: $ `;
});

botonBorrar.addEventListener("click", () => {
   parrafoTotal.innerHTML = `Total a pagar: $ `;
});

botonResumen.addEventListener("click", (e) => {
  e.preventDefault();
  if (parseInt(cantidad.value) > 0) {total(cantidad.value, select.value, parrafoTotal)};
});

// validacion de formularios ver→ (funciona cambiando la clase)
// https://getbootstrap.com/docs/5.3/forms/validation/#how-it-works

