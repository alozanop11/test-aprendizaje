const $dolar = document.querySelector("#dolar");
const $uf = document.querySelector("#uf");

$dolar.addEventListener("click", function () {
  obtenerDatos("dolar");
});

$uf.addEventListener("click", function () {
  obtenerDatos("uf");
});

function obtenerDatos(valor) {
  // console.log("click");
  let url = `https://mindicador.cl/api/${valor}`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  api.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      // console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      // console.log(datos.serie);

      let $resultado = document.querySelector("#resultado");
      $resultado.innerHTML = "";

      let i = 0;

      for (const item of datos.serie) {
        i++;
        $resultado.innerHTML += `<li>${item.fecha.substr(0, 10)} | $${
          item.valor
        }</li>
        `;

        if (i > 10) {
          break;
        }
      }
    }
  };
}
