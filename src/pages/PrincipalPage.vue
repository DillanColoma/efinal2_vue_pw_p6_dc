<template>
  <h1> Concesionario Bugget Rent Car</h1>
  <div class="navBar">
    <router-link to="/crear" >Crear nuevo Vehiculo</router-link>
    <router-link to="/consultar">Consultar Vehículos</router-link>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

.navBar {
  padding: 30px 80px;
}
.navBar a {
  color: rgb(10, 10, 10);
  margin: 0px 30px;
  border: solid;
  border-radius: 12px;
  background: rgb(243, 133, 105);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 12px;
}
h1{
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: rgb(243, 133, 105);
  font-size: 45px;
  padding: 30px;
  border-block-end-style: groove;
}
h2{
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: rgb(37, 34, 33);
  font-size: 25px;
  padding: 30px;
  border-block-end-style: dotted;
}
</style>