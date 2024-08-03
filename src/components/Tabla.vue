<template>
  <button class="btnConsultar" @click="consultar">Consultar</button>
  <div>
    <table>
      <thead>
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Actualizar</th>
          <th>Eliminar</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="vh in listaVehiculos" :key="vh.placa">
          <td>{{ vh.placa }}</td>
          <td>{{ vh.marca }}</td>
          <td>{{ vh.modelo }}</td>

          <td>
            <button class="btnActualizar" @click="actualizar(vh.links)">Ver</button>
          </td>
          <td>
            <button class="btnEliminar" @click="eliminar(vh.placa)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { consultarDTOSFachada, consultarLinkFachada, eliminarFachada } from "@/clients/clienteVehiculo";

export default {
  data() {
    return {
      listaVehiculos: [],
    };
  },
  methods: {
    async consultar() {
      const data = await consultarDTOSFachada();
      console.log(data);
      this.listaVehiculos = data;
      console.log(this.listaVehiculos);
    },
    async actualizar(link){
      console.log(link);
      const linkOriginal = link[0].href;
      console.log(linkOriginal);
      const vehiculo = await consultarLinkFachada(linkOriginal);
      console.log(vehiculo); 
      this.$emit("eventoActualizar", vehiculo)
    },
    async eliminar(placa){
      const data = await eliminarFachada(placa);
      if (data == 1) {
        this.consultar();
      } else {
        
      }
    },
  },
};
</script>

<style scoped>
.btnConsultar{
  width: 100px;
  padding: 10px 20px;
  margin: 15px;
  background-color: #8f8f8e;
  color: rgb(0, 0, 0);
  border-radius: 12px;
  cursor: pointer;
  border: none;
}
.btnActualizar{
  width: 100px;
  padding: 10px 20px;
  background-color:#ffee00;
  color: rgb(0, 0, 0);
  border-radius: 12px;
  cursor: pointer;
  border: none;

}
.btnEliminar{
  width: 100px;
  padding: 10px 20px;
  background-color: #d10d0d;
  color: rgb(5, 5, 5);
  border-radius: 12px;
  cursor: pointer;
  border: none;

}
table {
  width: 100%;
  border-collapse: collapse;
}

th,td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}


</style>