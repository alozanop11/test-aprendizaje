var objecto = {
  nombre: "HTML",
  duracion: 15,
  estado: true,
  capitulos: {
    nombre: "Introducción",
    videos: 20,
  },
};

// console.log(objecto);
// console.log(objecto["nombre"]);
// console.log(objecto.nombre);
// console.log(objecto.duracion);

// console.log(objecto.capitulos.nombre);

var arrayObjetos = [
  {
    nombre: "HTML",
    estado: true,
  },
  {
    nombre: "CSS",
    estado: true,
  },
  {
    nombre: "JS",
    estado: false,
  },
];

// console.log(arrayObjetos);
// console.log(arrayObjetos[0].nombre);

for (const indice of arrayObjetos) {
  console.log(indice);
  console.log(indice.nombre);
}
