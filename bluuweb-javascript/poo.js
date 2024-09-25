// const PeliculaUno = {
//   nombre: "Harry",
//   id: 01,
//   reproducir() {
//     return `reproduciendo pelicula...${this.nombre}`;
//   },
// };

// console.log(PeliculaUno.reproducir());

class Pelicula {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }

  reproducir() {
    return `Reproduciendo pelicula ${this.nombre}`;
  }
}

/* Herencia */
class Serie extends Pelicula {
  constructor(nombre, id, cap) {
    super(nombre, id);
    this.cap = cap;
  }
  reproduciendoCapitulo() {
    return `Reproduciendo capitulo ${this.cap}... ${this.nombre}`;
  }
}

const peliculaUno = new Pelicula("Harry", 1);
const peliculaDos = new Pelicula("Araña", 2);

// console.log(peliculaUno);
// console.log(peliculaUno.reproducir());
// console.log(peliculaDos);
// console.log(peliculaDos.reproducir());

const serieUno = new Serie("Dexter", 3, 55);
console.log(serieUno.reproduciendoCapitulo());
