<template>
  <div class="container" v-if="!mostrarMensaje">
    <div class="formulario">
      <h3>Registrar Vehiculos Concesionario</h3>
      <p type="Placa" for=""></p>
      <input type="text" v-model="placa" />

      <p type="Marca" for=""></p>
      <input type="text" v-model="marca" />

      <p type="Modelo" for=""></p>
      <input type="text" v-model="modelo" />

      <p type="Color" for=""></p>
      <input type="text" v-model="color" />

      <p type="Precio" for=""></p>
      <input type="number" v-model="precio" />

      <button @click="botonGuardar">Guardar</button>
    </div>
  </div>
  <div v-else class="container">
    <h3>Vehiculo registrado correctamente :D</h3>
    <button @click="botonAceptar">Aceptar</button>
  </div>
</template>

<script>
import { guardarFachada } from "@/clients/clienteVehiculo";

export default {
  data() {
    return {
      placa: null,
      marca: null,
      modelo: null,
      color: null,
      precio: null,
      mostrarMensaje: false,
    };
  },
  methods: {
    async botonGuardar() {
      const vehi = {
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        color: this.color,
        precio: this.precio,
      };

      try {
        const response = await guardarFachada(vehi);
        if (response === 1) {
          this.mostrarMensaje = true;
        } else {
          alert("Erro vehiculo no Registrado.");
        }
      } catch (error) {
        console.error(error);
        alert("Error vehiculo no Registrado.");
      }
    },
    botonAceptar() {
      this.mostrarMensaje = false;
      this.placa = null;
      this.marca = null;
      this.modelo = null;
      this.color = null;
      this.precio=null;
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
  flex-direction: column;
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

input {
  width: 200px;
  border: none;
  border-bottom: 2px solid #bebed2;
}
input:focus {
  outline: none;
  border-bottom: 2px solid #78788c;
}
p:before {
  content: attr(type);
  display: block;
  margin: 5px;
  font-size: 15px;
  color: black;
}
button {
  width: 120px;
  height: 45px;
  padding: 10px 20px;
  margin: 15px;
  background-color: #418144;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  border: none;
}
h3 {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: rgb(37, 34, 33);
  font-size: 25px;
  padding: 12px;
  border-block-end-style: outset;
}
</style>