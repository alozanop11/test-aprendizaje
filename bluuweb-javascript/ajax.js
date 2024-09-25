// console.log("activo");
const $button = document.querySelector("#boton");
const $response = document.querySelector("#respuesta");

$button.addEventListener("click", traerDatos);

function traerDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "archivo.txt", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      $response.innerHTML = this.responseText;
    }
  };
}
