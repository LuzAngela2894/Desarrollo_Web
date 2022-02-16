import React, { Component } from 'react';
import axios from 'axios';
import store2 from '../img/store2.png';
import Cookies from 'universal-cookie';
import swal from 'sweetalert2';
/*import CryptoJS from 'crypto-js';*/

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';

const URL = "http://localhost:8080/api/usuarios/";
const cookies = new Cookies();

class Login extends Component {
    
    state = {
        form: {
            usuario: '',
            contrasena: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async () => {
        console.log(this.state.form.usuario);
        console.log(this.state.form.contrasena);
        return axios.get(URL + "leer/" + this.state.form.usuario).then(response => response.data).then(response => {
            /*var bytes = CryptoJS.AES.decrypt(response.contrasena, this.state.form.contrasena);
            console.log(bytes);
            var descifrado = bytes.toString(CryptoJS.enc.Utf8);
            console.log(descifrado);*/
            if (this.state.form.contrasena === response.contrasena /*descifrado*/) {
                var respuesta = response;
                cookies.set('cedulausuario', respuesta.cedulausuario, { path: "/" });
                cookies.set('nombreusuario', respuesta.nombreusuario, { path: "/" });
                cookies.set('emailusuario', respuesta.emailusuario, { path: "/" });
                cookies.set('usuario', respuesta.usuario, { path: "/" });
                cookies.set('contrasena', respuesta.contrasena, { path: "/" });
                swal.fire({ text: `Bienvenido ${respuesta.nombreusuario}`, margin: '0 auto', icon: 'success', timer: 5000 });
                window.location.href = "./Usuarios";
            } else {
                swal.fire({ text: 'El usuario o la contraseña no son correctos', margin: '0 auto', icon: 'error', timer: 5000 });
                window.location.href = "./";
            }
        })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        if (cookies.get('usuario')) {
            window.location.href = "./Usuarios";
        }
    }

    render() {
        return (
            <div id="login">
                <h1 className="text-center text-white pt-5">Cadena La Generica</h1>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" action="" method="get">
                                    <img src={store2} style={{ width: '25%', margin: '0 auto', marginTop: '-90px' }} alt="icono principal" />
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info"><h4 style={{ color: "black" }}>Usuario: </h4></label><br />
                                        <input type="text" name="usuario" id="usuario" className="form-control" onChange={this.handleChange} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info"><h4 style={{ color: "black" }}>Contraseña: </h4></label><br />
                                        <input type="password" name="contrasena" id="contrasena" className="form-control" onChange={this.handleChange} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <button className="btn btn-info btn-md" style={{ background: "#da2c5d", border: "#da2c5d", color: "white" }} onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                                    </div>
                                    <br />
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;