/* 1- Manipulando el DOM */
/* 
- document.getElementById("app-title")
- document.querySelector("#app-title")
- document.querySelector("p")
- document.getElmentsByClassName("menu-items")
- document.getElementsByTagName("p")
- document.querySelectorAll(".menu-items")
*/

/* 2- Recorriendo el DOM */
const parent = document.getElementById("parent");
/* console.log(parent);

const children = parent.children;
console.log(children);

const firstChild = parent.firstElementChild;
console.log(firstChild);

const children2 = document.querySelector("li");
console.log(children2);

const grandParent = children2.parentNode;
console.log(grandParent); */

/* 3-Modificando atributos */
/* const title = document.querySelector("#app-title");
title.textContent = "Nuevo Titulo";
*/

/* 4-Modificando Estilos */
/* const title = document.querySelector("h1");
title.style.color = "Red"; */

/* 
- className = Reescribe la clase
- classList = Agrega mas clases al elemento
*/

/* 4- Creación de Elementos */
/* 
- innerHTML = Agrega Etiquetas y parrafos
- insertAdjacentHTML("before/after", <p>Este es otro parrafo nuevo</p>) = Agrega parrafos antes o despues y recibe 2 parametros
*/

/* 5-Creando Elementos */
/* const newPElement = document.createElement("p");
newPElement.textContent = "Fui crado con CreateElement";

const contentArea = document.getElementById("contentArea");
contentArea.append(newPElement); */

/* 6-Agregar elementos 
- prepend - Agrega elementos al inicio
- before - agrega antes de un elemento
- after - agregar un elemento despues
-append

 const newItem = document.createElement("li");
newItem.textContent = "Item 5";

listArea.prepend(newItem);
listArea.before(newItem);
listArea.after(newItem); */

/* Eliminar Elementos 
- remove()
- removeChild(list.firstElementChild)
*/

/* const firstItem = document.querySelector("li");

firstItem.remove();

const list = document.querySelector("ul");

list.removeChild(list.firstElementChild); */

/* CloneNode y remplazar
.cloneNode(true)

.replaceWith()
*/
/* const contentArea = document.querySelector("#contentArea");
const originalP = contentArea.querySelector("p");

const clonedP = originalP.cloneNode(true);
contentArea.append(clonedP);

clonedP.textContent = "Este es un nuevo texto";

const list = document.querySelector("#listArea");

const itemToReplace = listArea.children[2];

itemToReplace.replaceWith(clonedP);
 */

/* 7-Eventos */
/* const container = document.querySelector(".container");

const button = document.querySelector("button");

container.addEventListener("mouseover", (e) => {
  container.style.backgroundColor = "blue";
});

container.addEventListener("mouseout", (e) => {
  container.style.backgroundColor = "red";
}); */

/* button.addEventListener("click", (e) => {
  alert("click");
}); */

/* const buttonClickCallback = () => {
  alert("button clicked");
};

button.addEventListener("click", buttonClickCallback);

setTimeout(() => {
  button.removeEventListener("click", buttonClickCallback);
}, 2000);
 */

/* 7- eventObject */
/* const button = document.querySelector("button");

const buttonClicked = (e) => {
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.textContent);
};

button.addEventListener("click", buttonClicked); */

/* 8- Formularios */
/* const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements["name"].value;
  console.log(name);
});
 */

/* 9-Delegación eventos */
/* const listItems = document.querySelectorAll("li");

listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("highlight");
  });
});


const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  e.target.closet("li").classList.toggle("highlight");
});
 */
