import React from 'react';
import { Link } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import '../css/General.css';

function Home() {
	return (
		<>
			<main>
				<section className="glass">
					<div className="contenedor">
						<div className="titulo">
							<h1>Sucursales</h1>
							<hr className="one" />
							<span className="cen">Seleccione una de las siguientes opciones:</span>
						</div>
						<div className="container_botones">
							<div className="boton">
								<ul><li><Link to="/Usuarios" className="Usuarios"><i className="fas fa-user-circle"></i>Bogotá</Link></li></ul>
								<ul><li><Link to="/Usuarios" className="Clientes"><i className="fas fa-shopping-cart"></i>Cali</Link></li></ul>
								<ul><li><Link to="/Usuarios" className="Proveedores"><i className="fas fa-truck"></i>Medellín</Link></li></ul>
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

export default Home;