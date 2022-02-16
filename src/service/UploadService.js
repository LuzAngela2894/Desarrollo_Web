import axios from 'axios';

export class ProductoService {
    URL = "http://localhost:8080/api/upload/csv/";
    upload() {
        return axios.post(this.URL + "single").then(res => res.data);
    }
}