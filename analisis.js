//Analisis personal para juanita
// .find (nos devuelve el primer objeto que encuentra con la coincidencia)
// .filter => [{},{},{},{}] (nos devuelve todos los objetos con las coincidencias)

function encontrarPersona(personaEnBusqueda) {
  return salarios.find((persona) => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;
  // .map nos ayuda a recorrer todos los elementos de un array y crear otro array apartir de ese array inicial.
  const salarios = trabajos.map((elemento) => elemento.salario);

  const medianaSalarios = GeneralMath.calcularMediana(salarios);

  //   console.log(medianaSalarios);
  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajesCrecimiento = GeneralMath.calcularMediana(
    porcentajesCrecimiento
  );
  //   console.log({ porcentajesCrecimiento, medianaPorcentajesCrecimiento });

  const ultimoSalario = trabajos[trabajos.length - 1].salario;

  const nuevoSalario =
    ultimoSalario + ultimoSalario * medianaPorcentajesCrecimiento;
  return nuevoSalario;
}

// Analisis Empresarial

/* {
Industrias Mokepon:{
    2018: [ salarios, salarios, salarios]
    2019: [ salarios, salarios, salarios]
    2020: [ salarios, salarios, salarios]
},
Industrias Mokepon,
Industrias Mokepon,
Industrias Mokepon,
Industrias Mokepon,
}
*/

const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
      //   console.log(trabajo.empresa);
    }

    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}
// console.log({ empresas });

function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn("La empresa no existe");
  } else if (!empresas[nombre][year]) {
    console.warn("La empresa no dio salarios ese ano");
  } else {
    return GeneralMath.calcularMediana(empresas[nombre][year]);
  }
}

function proyeccionPorEmpresa(nombre) {
  if (!empresas[nombre]) {
    console.warn("La empresa no existe");
  } else {
    const empresaYears = Object.keys(empresas[nombre]);
    // .map nos crea un nuevo array con lo que devolvamos en cada iteracion que va a hacer el metodo map sobre el array en este caso empresaYears.
    const listaMedianaYears = empresaYears.map((year) =>
      medianaEmpresaYear(nombre, year)
    );

    let porcentajesCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioPasado = listaMedianaYears[i - 1];
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = crecimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = GeneralMath.calcularMediana(
      porcentajesCrecimiento
    );

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];

    const nuevaMediana =
      ultimaMediana + ultimaMediana * medianaPorcentajesCrecimiento;
    return nuevaMediana;
  }
}

// Analisis General

function medianaGeneral() {
  const listaMedianas = salarios.map((persona) =>
    medianaPorPersona(persona.name)
  );

  const medianaPoblacion = GeneralMath.calcularMediana(listaMedianas);
  return medianaPoblacion;
}

function medianaTop10() {
  const listaMedianas = salarios.map((persona) =>
    medianaPorPersona(persona.name)
  );

  const medianasOrdenadas = GeneralMath.ordenarLista(listaMedianas);

  const cantidad = listaMedianas.length / 10;
  const limite = listaMedianas.length - cantidad;

  //   console.log(limite); // me ubica en la posicion 18 del array

  // .slice => recibe 2 parametros y nos devuelve otro  nuevo array con las posiciones que le indiquemos en los 2 parametros .slice(desde donde quiero q empiece el array, hasta donde quiero que termine el array). Este metodo no cambia el array inicial, simplemente recorre el array y realiza una copia.

  // .splice ==> es muy similar al .slice solo que este si modifica el array inicial eliminando las posiciones del array que le indicamos en el metodo.

  const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

  const top10Mediana = GeneralMath.calcularMediana(top10);
  return top10Mediana;
}
