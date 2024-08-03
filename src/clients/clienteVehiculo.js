import axios from "axios";

const guardar = async (vehiculo) => {
    return axios.post(`http://localhost:8080/API/v1.0/Concesionario/vehiculos`, vehiculo).then(r => r.data);
}

const consultarDTOS = async () => {
    return axios.get(`http://localhost:8080/API/v1.0/Concesionario/vehiculos`).then(r => r.data);
}

const eliminar = async (placa) => {
    return axios.delete(`http://localhost:8080/API/v1.0/Concesionario/vehiculos/${placa}`).then(r => r.data);
}

const actualizar = async (placa, vehiculo) => {
    return axios.patch(`http://localhost:8080/API/v1.0/Concesionario/vehiculos/${placa}`, vehiculo).then(r => r.data);
}

const consultarLink = async (link) => {
    return axios.get(link).then(r => r.data);
}

//FACHADA y metodos de la fachada y los de exportacion
export const eliminarFachada = async (placa) => {
    return await eliminar(placa);
}

export const actualizarFachada = async (placa, vehiculo) => {
    return await actualizar(placa, vehiculo);
}
export const guardarFachada = async (vehiculo) => {
    return await guardar(vehiculo);
}

export const consultarDTOSFachada = async () => {
    return await consultarDTOS();
}



export const consultarLinkFachada = async (link) => {
    return await consultarLink(link);
}