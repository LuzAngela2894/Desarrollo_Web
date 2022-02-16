import axios from 'axios';

export class ProductoService {
    URL = "http://localhost:8080/api/productos/";
    read() {
        return axios.get(this.URL + "read").then(res => res.data);
    }
    readid(id) {
        return axios.get(this.URL + "read/" + id).then(res => res.data);
    }
    create(producto) {
        return axios.post(this.URL + "create", producto).then(res => res.data);
    }
    delete(id) {
        return axios.delete(this.URL + "delete/" + id).then(res => res.data);
    }
}