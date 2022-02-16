import axios from 'axios';

export class ConsolidadoService{
    URL = "http://localhost:8080/api/consolidado/";
    read() {
        return axios.get(this.URL + "read").then(res => res.data);
    }
    create(consolidado) {
        return axios.post(this.URL + "create", consolidado).then(res => res.data);
    }
}