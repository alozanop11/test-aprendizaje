Vue.component("contador", {
  /* template: " <h1>saludo de forma estatico</h1>", */
  //html
  template: `
      <div>
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
      </div>
      `,
  data() {
    return {
      numero: 0,
    };
  },
});
