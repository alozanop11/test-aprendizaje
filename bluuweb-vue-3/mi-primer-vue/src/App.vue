<script setup>
const name = "Vue dinamico";
/* const styleColor = "color: blue";
const arrayColores = ["blue", "red", "peru"];
const activo = false; */

/* const arrayFrutas = ["Manzana", "Banano", "Sandia", "Fresa", "Cereza"]; */

/* const arrayFrutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una Manzana",
    id: "1",
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una Pera",
    id: "2",
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una Naranja",
    id: "3",
  },
]; */

/* const objetoFruta = {
  name: "Manzana",
  price: "$1.00",
  description: "Una Manzana",
  id: "1",
}; */

const arrayFrutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una Manzana",
    stock: "0",
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una Pera",
    stock: "10",
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una Naranja",
    stock: "20",
  },
];
</script>

<template>
  <h1>Hola {{ name }}</h1>
  <!--  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2>{{ arrayColores }}</h2>
  <h2 style="color: blue">Soy azul</h2>
  <h2 v-bind:style="styleColor">Soy azul</h2>
  <h2 :style="styleColor">Soy azul</h2>
  <h2 :style="`color: ${arrayColores[2]}`">Soy peru</h2>
  <h2>{{ activo ? "Estoy activo" : "Estoy inactivo" }}</h2>
  <p v-if="!activo">Estoy inactivo</p>
   <p v-if="activo">Estoy activo</p>
  <p v-else>Estoy inactivo</p>
  <h2 v-if="activo === true">
    <span>Icono</span>
    Estoy activo
  </h2>
  <p v-else-if="activo === false">Estoy inactivo</p>
  <p v-else>Estoy indeciso</p> -->

  <ul>
    <!--  <li v-for="(fruta, index) in arrayFrutas" :key="index">
      {{ index }} - {{ fruta }}
    </li> -->
    <!--  <li v-for="fruta in arrayFrutas" :key="fruta.id">
      {{ fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
    </li> -->
    <!--    {{
      objetoFruta
    }}
    <li v-for="(value, propiedad, index) in objetoFruta" :key="index">
      {{ index }} - {{ propiedad }}: {{ value }}
    </li> -->
    <template v-for="item in arrayFrutas" :key="item.name">
      <li v-if="item.stock > 0">{{ item.name }} - {{ item.price }}</li>
    </template>
  </ul>
</template>

<style>
h1 {
  color: red;
}
</style>
