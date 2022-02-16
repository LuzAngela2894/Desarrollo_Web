import axios from 'axios';

export class VentaService{
    URL = "http://localhost:8080/api/ventas/";
    read() {
        return axios.get(this.URL + "read").then(res => res.data);
    }
    create(venta) {
        return axios.post(this.URL + "create", venta).then(res => res.data);
    }
}