const arr = [5, 10, 15, 20];
const array = [5, 10, 15, 20];
const array2 = [5, 10, 15, 20];

// const promedio = (arr) => {
//   let suma = 0;
//   for (const i in arr) {
//     suma = suma + arr[i];
//   }
//   let promedio = suma / arr.length;
//   return promedio;
// };

// console.log(promedio(arr));

// const calcularPromedio = (array) => {
//   function sumarTodosElementos(valorAcumulado, nuevoValor) {
//     return valorAcumulado + nuevoValor;
//   }

//   const sumaArray = array.reduce(sumarTodosElementos);
//   console.log(sumaArray);

//   const promedio = sumaArray / array.length;
//   return promedio;
// };

// console.log(calcularPromedio(valorAcumulado, nuevoValor));

//METODO REDUCE
const sumaElementos = (array2) => {
  const sumaArray = array2.reduce((a, b) => a + b);
  //   console.log(sumaArray);
  const promedio = sumaArray / array2.length;
  return promedio;
};
// console.log(sumaElementos(array2));

// ENCONTRAR SI UNA LISTA ES PAR O IMPAR Y CALCULAR LA MEDIANA
function esPar(lista) {
  return !(lista.length % 2);
}
function esImpar(lista) {
  return lista.length % 2;
}

function calcularModa(lista) {
  const listaCount = {};
  for (let i in lista) {
    const element = lista[i];

    if (listaCount[element]) {
      listaCount[element] += 1;
    } else {
      listaCount[element] = 1;
    }
  }

  const listaArray = Object.entries(listaCount); // convertir object en array
  const listaBidimensionalOrdenada = listaArray.sort((a, b) => a[1] - b[1]);
  const listaMaxNumber =
    listaBidimensionalOrdenada[listaBidimensionalOrdenada.length - 1];
  const moda = listaMaxNumber[0];

  //   console.log({
  //     listaCount,
  //     listaArray,
  //     listaBidimensionalOrdenada,
  //     listaMaxNumber,
  //   });

  //   console.log(` La moda es: ${moda}`);

  return moda;
}

function calcularMediana(listaDesordenada) {
  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    // const indexMitad1ListaPar = lista.length / 2 - 1;
    // const indexMitad2ListaPar = lista.length / 2;

    const mitad1ListaPar = lista[lista.length / 2 - 1];
    const mitad2ListaPar = lista[lista.length / 2];

    const listaMitades = [
      //   lista[indexMitad1ListaPar],
      //   lista[indexMitad2ListaPar],
      mitad1ListaPar,
      mitad2ListaPar,
    ];
    const medianaListaPar = sumaElementos(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    // console.log(indexMitadListaImpar);
    // console.log(lista[indexMitadListaImpar]);
    return medianaListaImpar;
  }
}

//METODO SORT (ordenar lista de menor a mayor)

function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    // if (valorAcumulado > nuevoValor) {
    //   return 1;
    // } else if ((valorAcumulado = nuevoValor)) {
    //   return 0;
    // } else if (valorAcumulado < nuevoValor) {
    //   return -1;
    // }
    // return 1; significa que nuestro nuevoValor no esta ordenado(se debe hacer el flip para ponerlo en la posicion que es) nuevoValor seria menor que el valorAcumulado por eso se debe hacer el flip.
    // return 0;  nuestra lista se queda igual, los valores son iguales, no hay que hacer flip
    // return -1; significa que tampoco vamos a hacer flip ya que el nuevoValor es mayor que el anterior.

    return valorAcumulado - nuevoValor;
    //return 5 - 10 -> -5 (seria lo mismo que hacer un return de -1 o un # negativo, no hace el flip los deja igual)
    //return 5 - 5 -> 0 (seria lo mismo que hacer un return de 0, los deja igual y no los mueve)
    //return 10 - 5 -> 5 (seria lo mismo que hacer un return de 1, debe hacer el flip para poner el nuevoValor primero que el valor acumulado)
  }
  const lista = listaDesordenada.sort(ordenarListaSort);
  // const lista = listaDesordenada.sort((a,b) => a-b); Esta arroy function resume todo lo de arriba.

  return lista;
}

// const pruebaOrdenarLista = (listaParaOrdenar) => {
//   return listaParaOrdenar.sort((a, b) => a - b);
// };

// console.log(
//   pruebaOrdenarLista([4, 5, 6, 3, 12, 5, 90, 56, 80, 12345, 54, 76, 19])
// );

function solution(obj) {
  const arrObj = Object.entries(obj);

  const arrNew = [];

  for (let i = 0; i < arrObj.length; i++) {
    const element = arrObj[i];
    arrNew.push({
      id: element[0],
      name: element[1],
    });
  }
  return arrNew;
}

// console.log(solution({ 123: "Juanito Alcachofa", 456: "Juanita Alcaparra" }));

/* MEDIA ARITMETICA NOTAS Y CREDITOS
const notes = [
  {
    course: "Educación Física",
    note: 10,
    credit: 2,
  },
  {
    course: "Programación",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas personales",
    note: 7,
    credit: 5,
  },
];


const notesWithCredit = notes.map(function (noteObject) {
  return noteObject.note * noteObject.credit;
});
const sumOfNotesWithCredit = notesWithCredit.reduce(function (sum = 0, newVal) {
  return sum + newVal;
});
const credits = notes.map(function (noteObject) {
  return noteObject.credit;
});

const sumOfCredits = credits.reduce(function (sum = 0, newVal) {
  return sum + newVal;
});

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

console.log(promedioPonderadoNotasConCreditos);
*/
