const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola mundo Vue",
    /*  frutas: ["Manzana", "Pera", "Platano"], */
    frutas: [
      {
        nombre: "Pera",
        cantidad: 10,
      },
      {
        nombre: "Manzana",
        cantidad: 0,
      },
      {
        nombre: "Platano",
        cantidad: 30,
      },
    ],
    nuevaFruta: "",
    total: 0,
  },
  methods: {
    agregarFruta() {
      // console.log("diste click");
      this.frutas.push({
        nombre: this.nuevaFruta,
        cantidad: 0,
      });
      this.nuevaFruta = "";
    },
  },
  computed: {
    sumarFrutas() {
      this.total = 0;
      for (const fruta of this.frutas) {
        this.total = this.total + fruta.cantidad;
      }

      return this.total;
    },
  },
});
