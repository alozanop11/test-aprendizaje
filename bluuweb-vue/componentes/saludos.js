Vue.component("saludo", {
  /* template: " <h1>saludo de forma estatico</h1>", */
  //html
  template: `
      <div>
        <h1>{{saludo}}</h1>
        <h3>aklñfdjasdf</h3>
      </div>
      `,
  data() {
    return {
      saludo: "Hola desde Vue",
    };
  },
});
