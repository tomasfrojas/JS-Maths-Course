const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const pResult = document.querySelector("#result");
const borrarDatos = document.querySelector("#borrar");

btn.addEventListener("click", calcularPrecioConDescuento);
borrarDatos.addEventListener("click", borrarCampos);

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);

  if (!price || !discount) {
    pResult.innerText = `Debes completar todos los campos`;
    return;
  }
  if (discount > 100) {
    pResult.innerText = `El descuento no puede ser mayor a 100%`;
    return;
  }
  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = `El nuevo precio con descuento es $${newPrice}`;
}

function borrarCampos() {
  pResult.innerText = "";
  inputPrice.value = "";
  inputDiscount.value = "";
}
