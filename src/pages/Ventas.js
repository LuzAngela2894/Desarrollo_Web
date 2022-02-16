import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { VentaService } from '../service/VentaService';
import { InputText } from 'primereact/inputtext';
import Navbar from '../componentes/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class Ventas extends Component {

	constructor() {
		super();
		this.state = {
			venta: {
				codigoventa: null,
				cedulacliente: null,
				nombrecliente: null,
				valorventa: null,
				ivaventa: null,
				totalventa: null,
				detalleventa: [
					{
						codigoproducto: null,
						cantidadproducto: null,
						valorvta: null,
						valoriva: null,
						valortotal: null
					}
				]
			}
		};
		this.ventaService = new VentaService();
		this.create = this.create.bind(this);
		/*this.consecutivo = this.consecutivo.bind(this);*/
	}

	create() {
		this.ventaService.create(this.state.venta).then(data => {
			this.setState({
				visible: false,
				venta: {
					codigoventa: null,
					cedulacliente: null,
					nombrecliente: null,
					valorventa: null,
					ivaventa: null,
					totalventa: null,
					detalleventa: [
						{
							codigoproducto: null,
							cantidadproducto: null,
							valorvta: null,
							valoriva: null,
							valortotal: null
						}
					]
				}
			});
			this.toast.show({ severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.' });
		})
	}

	/*consecutivo() {
		var index = 0;
		while (index < 1000) {
			yield index++;
		}
	}*/

	render() {

		return (
			<div style={{ width: '100%', margin: '0 auto' }}>
				<Navbar />
				<br />
				<section className="glass">
					<div className="contenedor" style={{ padding: '10px 180px 10px', width: '100%', height: '400px' }}>
						<div className="titulo">
							<h1 style={{ textAlign: 'center' }}>Ventas</h1>
							<hr className="one" />
						</div>
						<div style={{ display: 'block', justifyContent: 'center', textAlign: 'center' }}>
							<div>
								<dl>
									<dt><Link to="/ListadoClientes"> Clientes </Link></dt>
									<dt><Link to="/ListadoProductos"> Productos </Link></dt>
								</dl>
							</div>
						</div>
						<form style={{ padding: '20px 100px 20px', display: 'contains', textAlign: 'center' }}>
							<table>
								<tbody>
									<tr>
										<td style={{ color:'white' }}>______________</td>
										<td><label htmlFor="cedulacliente"><b>Cédula</b></label></td>
										<td style={{ border: '2px solid purple' }}><InputText value={this.state.venta.cedulacliente} id="cedulacliente" onChange={(e) => {
											let val = e.target.value;
											this.setState(prevState => {
												let venta = Object.assign({}, prevState.venta);
												venta.cedulacliente = val;

												return { venta };
											})
										}
										} /></td>
										<td><label htmlFor="nombrecliente"><b>Cliente</b></label></td>
										<td style={{ border: '2px solid purple' }} ><InputText value={this.state.venta.nombrecliente} id="nombrecliente" onChange={(e) => {
											let val = e.target.value;
											this.setState(prevState => {
												let venta = Object.assign({}, prevState.venta);
												venta.nombrecliente = val

												return { venta };
											})
										}
										} /></td>
										<td><label htmlFor="codigoventa"><b>Consecutivo</b></label></td>
										<td style={{ border: '2px solid purple' }}><InputText id="codigoventa" /></td>
									</tr>
								</tbody>
							</table>
							<br />
							<table>
								<thead>
									<tr>
										<th></th>
										<th>Cod. Producto</th>
										<th>Nombre Producto</th>
										<th>Cant.</th>
										<th>Valor Total</th>
										<th>Iva</th>
										<th>Total con Iva</th>
									</tr>
								</thead>
								<tbody>
									{/*<tr>
									<td></td>
									<td><InputText id="codigoproducto" /></td>
									<td><InputText id="nombreproducto" /></td>
									<td><InputText id="cantidad" size="5" /></td>
									<td><InputText id="VT1" /></td>
									<td><InputText id="IC1" readOnly="readOnly" size="5" value={0.19} /></td>
									<td><InputText id="TI2" readOnly="readOnly" /></td>
								</tr>
								<tr>
									<td></td>
									<td><InputText id="codigoproducto" /></td>
									<td><InputText id="nombreproducto" /></td>
									<td><InputText id="cantidadproducto" size="5" /></td>
									<td><InputText id="VT2" /></td>
									<td><InputText id="IC2" readOnly="readOnly" size="5" value={0.19} /></td>
									<td><InputText id="TI2" readOnly="readOnly" /></td>
								</tr>*/}
									<tr>
										<td></td>
										<td style={{ border: '2px solid purple' }}><InputText value={this.state.venta.detalleventa.codigoproducto} id="codigoproducto" onChange={(e) => {
											let val = e.target.value;
											this.setState(prevState => {
												let venta = Object.assign({}, prevState.venta);
												venta.codigoproducto = val;

												return { venta };
											})
										}
										} /></td>
										<td style={{ border: '2px solid purple' }}><InputText id="nombreproducto" /></td>
										<td style={{ border: '2px solid purple' }}><InputText size="5" value={this.state.venta.detalleventa.cantidadproducto} id="cantidadproducto" onChange={(e) => {
											let val = e.target.value;
											this.setState(prevState => {
												let venta = Object.assign({}, prevState.venta);
												venta.cantidadproducto = val

												return { venta };
											})
										}
										} /></td>
										<td style={{ border: '2px solid purple' }}><InputText id="VT3" /></td>
										<td style={{ border: '2px solid purple' }}><InputText id="IC3" readOnly="readOnly" size="5" value={0.19} /></td>
										<td style={{ border: '2px solid purple' }}><InputText id="TI3" /></td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td><label htmlFor="valorventa"><b>Total Venta</b></label></td>
										<td style={{ border: '2px solid purple' }}><InputText value={this.state.venta.detalleventa.valorvta} id="valorvta" onChange={(e) => {
											let val = e.target.value;
											this.setState(prevState => {
												let venta = Object.assign({}, prevState.venta);
												venta.valorvta = val

												return { venta };
											})
										}
										} /></td>
										<td><label htmlFor="valoriva"><b>Total Iva</b></label></td>
										<td style={{ border: '2px solid purple' }}><InputText value={this.state.venta.detalleventa.valoriva} id="valoriva" onChange={(e) => {
											let val = e.target.value;
											this.setState(prevState => {
												let venta = Object.assign({}, prevState.venta);
												venta.valoriva = val

												return { venta };
											})
										}
										} /></td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td><button className="btn btn-info btn-md" style={{ background: "#800080", border: "#800080", color: "white" }} onClick={this.create}><b>Confirmar</b></button></td>
										<td><label htmlFor="valortotal"><b>Total con Iva</b></label></td>
										<td style={{ border: '2px solid purple' }}><InputText value={this.state.venta.detalleventa.valortotal} id="valortotal" onChange={(e) => {
											let val = e.target.value;
											this.setState(prevState => {
												let venta = Object.assign({}, prevState.venta);
												venta.valortotal = val

												return { venta };
											})
										}
										} /></td>
									</tr>
								</tbody>
							</table>
						</form>
					</div>
				</section>
			</div >
		);
	}
}