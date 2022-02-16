import axios from 'axios';

export class ClienteService {
    URL = "http://localhost:8080/api/clientes/";
    read() {
        return axios.get(this.URL + "read").then(res => res.data);
    }
    readid(id) {
        return axios.get(this.URL + "read/" + id).then(res => res.data);
    }
    create(cliente) {
        return axios.post(this.URL + "create", cliente).then(res => res.data);
    }
    delete(id) {
        return axios.delete(this.URL + "delete/" + id).then(res => res.data);
    }
}