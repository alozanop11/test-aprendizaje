const $button = document.querySelector("#boton");

$button.addEventListener("click", traerDatos);

function traerDatos() {
  // console.log("click");

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "catalogo.json", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      // console.log(datos);

      let $res = document.querySelector("#res");
      $res.innerHTML = "";

      for (const item of datos) {
        // console.log(item);
        $res.innerHTML += `
        <tr>
        <td>${item.titulo}</td>
        <td>${item.artista}</td>
        </tr>
        `;
      }
    }
  };
}
