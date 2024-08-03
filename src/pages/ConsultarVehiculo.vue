<template>
  <h2>Consultar Vehiculo</h2>
  <Tabla @eventoActualizar="actualizar($event)" />
  <Detalle :vehiculoProp="vehiculo"/>
</template>

<script>
import Tabla from "@/components/Tabla.vue";
import Detalle from '@/components/VehiculoDetalle.vue';
export default {
  components: { Tabla, Detalle },
  data() {
    return {
      vehiculo: {
        placa: null,
        marca: null,
        modelo: null,
        color: null,
        precio: null,
      },
    };
  },
  methods: {
    actualizar(vehiculo) {
      this.vehiculo = vehiculo;
      console.log(this.vehiculo);
    },
  },
};
</script>

<style>
</style>