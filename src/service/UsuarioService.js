import axios from 'axios';

export class UsuarioService {
    URL = "http://localhost:8080/api/usuarios/";
    read() {
        return axios.get(this.URL + "read").then(res => res.data);
    }
    create(usuario) {
        return axios.post(this.URL + "create", usuario).then(res => res.data);
    }
    delete(id) {
        return axios.delete(this.URL + "delete/" + id).then(res => res.data);
    }
}