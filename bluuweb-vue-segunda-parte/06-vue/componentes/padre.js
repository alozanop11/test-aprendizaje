Vue.component("padre", {
  //html
  template: `
      <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombrePadre}}
        <hijo numero="5"></hijo>
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
      </div>
      `,
  data() {
    return {
      numeroPadre: "0",
      nombrePadre: "",
    };
  },
});
