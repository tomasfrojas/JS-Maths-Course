const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const pResult = document.querySelector("#result");
const borrarDatos = document.querySelector("#borrar");

btn.addEventListener("click", calcularPrecioConDescuento);
borrarDatos.addEventListener("click", borrarCampos);

// const arrCoupon = {
//   tompirojas: 30,
//   tompi: 25,
//   tomas: 20,
//   felipe: 15,
// };

// function prueba(input) {
//   if (arrCoupon[input]) {
//     console.log(`el cupon ${input} tiene un descuento de ${arrCoupon[input]}`);
//   } else {
//     console.log(`El cupon es invalido`);
//   }
// }
// prueba("felipe");

const couponList = [
  { name: "tompirojas", descuento: 30 },
  { name: "tompi", descuento: 25 },
  { name: "tomas", descuento: 20 },
  { name: "felipe", descuento: 15 },
];
// couponList.push({
//   name: "tompirojas",
//   descuento: 30,
// });
// couponList.push({
//   name: "tompi",
//   descuento: 25,
// });
// couponList.push({
//   name: "tomas",
//   descuento: 20,
// });
// couponList.push({
//   name: "felipe",
//   descuento: 15,
// });

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;
  let discount;

  if (!price || !coupon) {
    pResult.innerText = `Debes completar todos los campos`;
    return;
  }

  //   function couponFilter = () => {
  //     return couponList.find((couponElement) => couponElement.name == coupon);
  //   };
  //   console.log(couponFilter());

  function isCouponInArray(couponElement) {
    return couponElement.name == coupon;
  }

  const couponInArray = couponList.find(isCouponInArray); //{}

  if (couponInArray) {
    discount = couponInArray.descuento;
  } else {
    pResult.innerText = "El cupon no es valido!";
    return;
  }

  //   if (arrCoupon[coupon]) {
  //     discount = arrCoupon[coupon];
  //   } else {
  //     pResult.innerText = "El cupon no es valido!";
  //     return;
  //   }

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = `El nuevo precio es de $${newPrice} con un descuento del ${discount}% ya aplicado`;

  //   switch (coupon) {
  //     case "tompirojas":
  //       discount = 30;
  //       break;

  //     case "tompi":
  //       discount = 25;
  //       break;

  //     default:
  //       pResult.innerText = "El cupon no es valido!";
  //       return;
  //   }

  //   const newPrice = (price * (100 - discount)) / 100;
  //   pResult.innerText = `El nuevo precio con descuento es $${newPrice}`;
}

function borrarCampos() {
  pResult.innerText = "";
  inputPrice.value = "";
  inputCoupon.value = "";
}
