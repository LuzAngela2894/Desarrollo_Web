import { Component } from "react";
import Cookies from "universal-cookie";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../css/General.css';

const cookies = new Cookies();

class Logout extends Component {

    cerrarSesion = () => {
        cookies.remove('cedulausuario', { path: "/" });
        cookies.remove('nombreusuario', { path: "/" });
        cookies.remove('emailusuario', { path: "/" });
        cookies.remove('usuario', { path: "/" });
        cookies.remove('contrasena', { path: "/" });
        window.location.href = "./";
    }

    componentDidMount() {
        if (!cookies.get('usuario')) {
            window.location.href = "./";
        }
    }

    render() {
        console.log('cedulausuario:' + cookies.get('cedulausuario'));
        console.log('nombreusuario:' + cookies.get('nombreusuario'));
        console.log('emailusuario:' + cookies.get('emailusuario'));
        console.log('usuario:' + cookies.get('usuario'));
        console.log('contrasena:' + cookies.get('contrasena'));
        return (
            <>
                <main>
                    <section className="glass">
                        <div className="contenedor">
                            <div className="titulo">
                                <hr className="one" />
                            </div>
                            <div className="container_botones">
                                <div>
                                    <ul><li><button className="boton" style={{ background: '#14c7b8', color: 'white' }} onClick={() => this.cerrarSesion()}><h2>Cerrar Sesión</h2></button></li></ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <div className="circle1"></div>
                <div className="circle2"></div>
            </>
        );
    }
}
export default Logout;