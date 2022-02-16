import axios from 'axios';

export class ProveedorService {
    URL = "http://localhost:8080/api/proveedores/";
    read() {
        return axios.get(this.URL + "read").then(res => res.data);
    }
    create(proveedor) {
        return axios.post(this.URL + "create", proveedor).then(res => res.data);
    }
    delete(id) {
        return axios.delete(this.URL + "delete/" + id).then(res => res.data);
    }
}