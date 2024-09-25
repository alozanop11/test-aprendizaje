// console.log("click");

const $btnBotones = document.querySelector("#BtnBotones");
const $botones = document.querySelector("#botones");
const $fondo = document.querySelector("#fondo");

(() => {
  $btnBotones.addEventListener("click", agregarBotones);
  $botones.addEventListener("click", delegacion);
})();

(() => {
  const color = localStorage.getItem("colorFondo");
  // console.log(color);
  if (color === null) {
    $fondo.className = "bg-dark";
  } else {
    $fondo.className = color;
  }
})();

function delegacion(e) {
  e.preventDefault();
  // console.log("diste click en el container");
  // console.log(e.target);
  // console.log(e.target.classList[1]);
  const colorBoton = e.target.classList[1];

  switch (colorBoton) {
    case "btn-primary":
      // console.log("diste click en primary");
      $fondo.className = "bg-primary";
      localStorage.setItem("colorFondo", "bg-primary");
      break;
    case "btn-danger":
      // console.log("diste click en danger");
      $fondo.className = "bg-danger";
      localStorage.setItem("colorFondo", "bg-danger");
      break;
    case "btn-warning":
      // console.log("diste click en warning");
      $fondo.className = "bg-warning";
      localStorage.setItem("colorFondo", "bg-warning");
      break;
    case "btn-secondary":
      // console.log("diste click en secondary");
      $fondo.className = "bg-secondary";
      localStorage.setItem("colorFondo", "bg-secondary");
      break;
    case "btn-success":
      // console.log("diste click en success");
      $fondo.className = "bg-success";
      localStorage.setItem("colorFondo", "bg-success");
      break;

    default:
      break;
  }
}

function agregarBotones(e) {
  e.preventDefault();
  // console.log("diste click en el boton");
  $botones.innerHTML = `
  <button class="btn btn-primary">primary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-danger">danger</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-warning">warning</button>
  `;
}
