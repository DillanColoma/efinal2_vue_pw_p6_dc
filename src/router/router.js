import { createRouter, createWebHashHistory } from 'vue-router'

import CrearVehiculo from '@/pages/CrearVehiculo.vue'
import ConsultarVehiculo from '@/pages/ConsultarVehiculo.vue'

const routes = [
    {
        path: '/crear',
        component: CrearVehiculo
    },
    {
        path: '/consultar',
        component: ConsultarVehiculo
    },
   
]

const router = createRouter({ history: createWebHashHistory(), routes})

export default router