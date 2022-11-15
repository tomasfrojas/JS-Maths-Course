console.group("Cuadrado y Triangulo");

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetroTriangulo: lado1 + lado2 + base,
    areaTriangulo: (base * altura) / 2,
  };
}

function calcularAlturaTriangulo(lado1, base) {
  if (lado1 == base) {
    console.warn("Este no es un triangulo isosceles");
  } else {
    // h = raizcuadrada (lado1**2 - (b**2)/4)
    return Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2) / 4);
  }
}
console.log(calcularAlturaTriangulo(6, 4));

function calcularCuadrado(lado) {
  return {
    perimetroCuadrado: lado * 4,
    areaCuadrado: lado * lado,
  };
}

console.log(calcularTriangulo(6, 6, 4, 5.5));
console.log(calcularCuadrado(5));

console.groupEnd("Cuadrado y Triangulo");

console.group("Circle");

function calcularCircle(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);

  return {
    circunferencia: diametro * Math.PI,
    areaCircle: radioAlCuadrado * Math.PI,
  };
}
console.log(calcularCircle(3));

console.groupEnd("Circle");
