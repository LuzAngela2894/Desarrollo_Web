import React from 'react';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../css/General.css';

function Reportes() {
    return (
        <>
			<main>
				<section className="glass">
					<div className="contenedor">
						<div className="titulo">
							<h1>Reportes</h1>
							<hr className="one" />
							<span className="cen">Seleccione una de las siguientes opciones:</span>
						</div>
						<div className="container_botones">
							<div className="boton">
								<ul><li><Link to="/ListadoClientes" className="Usuarios"><i className="fas fa-user-circle"></i>Listado Clientes</Link></li></ul>
								<ul><li><Link to="/VentasXCliente" className="Clientes"><i className="fas fa-shopping-cart"></i>Ventas por Cliente</Link></li></ul>
							</div>
						</div>
					</div>
				</section>
			</main>
			<div className="circle1"></div>
			<div className="circle2"></div>
		</>
    )
}

export default Reportes;