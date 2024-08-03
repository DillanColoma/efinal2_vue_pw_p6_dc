<template>
  <h2>Vehiculos Detalle</h2>

  <div class="container" v-if="!mostrarMensaje">
    <div class="formulario">
      <p type="Placa"></p>
      <input type="text" v-model="vehiculoProp.placa" />
      <p type="Marca"></p>
      <input type="text" v-model="vehiculoProp.marca" />
      <p type="Modelo"></p>
      <input type="text" v-model="vehiculoProp.modelo" />
      <p type="Color"></p>
      <input type="text" v-model="vehiculoProp.color" />
      <p type="Precio"></p>
      <input type="text" v-model="vehiculoProp.precio" />
      <button @click="botonGuardar">Actualizar</button>
    </div>
  </div>
  
</template>

<script>
import { actualizarFachada } from "@/clients/clienteVehiculo";

export default {
  data() {
    return {
      placa: null,
      marca: null,
      modelo: null,
      color: null,
      precio: false,
    };
  },
  props: {
    vehiculoProp: {
      type: Object,
      default: () => ({
        placa: null,
        marca: null,
        modelo: null,
        color: null,
        precio: null,
      }),
    },
  },
  methods: {
    async botonGuardar() {
      const vehi = {
        placa: this.vehiculoProp.placa,
        marca: this.vehiculoProp.marca,
        modelo: this.vehiculoProp.modelo,
        color: this.vehiculoProp.color,
        precio: this.vehiculoProp.precio,
      };

      this.placa = this.vehiculoProp.placa;
      this.marca = this.vehiculoProp.marca;
      this.modelo = this.vehiculoProp.modelo;
      this.color = this.vehiculoProp.color;
      this.precio = this.vehiculoProp.precio;
      console.log(this.placa);
      console.log(this.marca);
      console.log(this.modelo);

      console.log(vehi);

      const r = await actualizarFachada(this.placa, vehi);
      console.log(r);
      if (r == 1) {
        //this.mostrarMensaje = true;
      } else {
        alert("Error al actualizar su producto.");
      }
    },
    botonAceptar() {
      this.mostrarMensaje = false;
      this.placa = null;
      this.marca = null;
      this.modelo = null;
      this.color = null;
      this.precio = null;
      this.mostrarMensaje = null;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.button {
  margin: 2%;
}
body {
  background-color: rgb(212, 235, 255);
}

input {
  width: 200px;
  border: none;
  border-bottom: 2px solid #bebed2;
}
input:focus {
  outline: none;
  border-bottom: 2px solid #78788c;
}
.formulario {
  width: 300px;
  height: 445px;
  background-color: #e6e6e6;
  border-radius: 10px;
  padding: 25px 35px;
  margin: 25px;
  box-shadow: 0px 0px 30px 5px #000;
}

/*.label {
  font-weight: bold;
  margin-bottom: 5px;
}*/
p:before {
  content: attr(type);
  display: block;
  margin: 5px;
  font-size: 15px;
  color: black;
}
button {
  width: 100px;
  padding: 10px 20px;
  background-color: #78788c;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  border: none;
}
</style>