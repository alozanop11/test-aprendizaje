/* $(document).ready(function () {
  // console.log("funcionando");
});
 */

$(document).ready(function () {
  /* $("h1").html("Etiqueta h1");
  $(".display-4").html("desde clase");
  $("#idh1").html("desde id");

  document.querySelector("h1").innerHTML = "Etiqueta h1";
  document.querySelector(".display-4").innerHTML = "desde clase";
  document.querySelector("idh1").innerHTML = "desde id"; */
  // $(".container h1").html("cambio de texto");
  // $(".container h1:first").html("cambio de texto");
  // $(".container h1:last").html("cambio de texto");
  /* $("#idh1").addClass("text-danger");
  $("#idh1").removeClass("display-4");

  $("#contenido").append("<h1>este es un elemento al final</h1>");
  $("#contenido").prepend("<h1>este es un elemento al principio</h1>");

  $("#color-azul").css("color", "blue");
  $("#color-azul").css({
    color: "blue",
    background: "salmon",
    padding: "20px",
  });

  // $("#color-azul").remove();
  $("#color-azul").hide();

  $("img").attr("src", "http://"); */
  // var parrafo = $("#resultado p");
  // $(".btn-primary").click(function () {
  //   parrafo.addClass("display-4");
  // });
  // $(".btn-danger").click(function () {
  //   parrafo.removeClass("display-4");
  // });
  // $(".btn-warning").click(function () {
  //   parrafo.toggleClass("display-4");
  // });
  /* $("#formulario").submit(function (evento) {
    evento.preventDefault();
    var nombre = $("#nombre").val();
    console.log(nombre);
  }); */

  /*   var resultado = $("#resultado");

  $(".btn-primary").click(function () {
    resultado.hide(1000);
  });
  $(".btn-danger").click(function () {
    resultado.show();
  });
  $(".btn-warning").click(function () {
    resultado.toggle(1000);
  }); */

  var resultado = $("#resultado");

  /* $(".btn-primary").click(function () {
    resultado.fadeOut(3000);
  });
  $(".btn-danger").click(function () {
    resultado.fadeIn(2000);
  });
  $(".btn-warning").click(function () {
    resultado.toggle(1000);
  }); */

  $(".btn-primary").click(function () {
    resultado.animate({ left: "100px" });
  });
});
