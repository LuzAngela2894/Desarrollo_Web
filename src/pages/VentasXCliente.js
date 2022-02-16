import React, { Component } from 'react';
import axios from 'axios';
import { VentaService } from '../service/VentaService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { Panel } from 'primereact/panel';
import { Toast } from 'primereact/toast';
import Navbar from '../componentes/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../css/General.css';

export default class VentasXCliente extends Component {

    constructor() {
        super();
        this.state = {
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
            },
        };
        this.ventaService = new VentaService();
        this.totalventaBodyTemplate = this.totalventaBodyTemplate.bind(this);
        this.suma = this.suma.bind(this);
    }

    componentDidMount() {
        this.ventaService.read().then(data => this.setState({ ventas: data }))
    }

    totalventaBodyTemplate(rowData) {
        return `${this.formatCurrency(rowData.totalventa)}`;
    }

    formatCurrency(value) {
        return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    }

    suma() {
        let URL = "http://localhost:8080/api/ventas/read";
        let suma = 0;
        axios.get(URL).then(res => {
            const venta = res.data;
            Object.keys(venta).forEach(key => {
                suma += venta[key].totalventa;
            });
        });
        return suma;
    }

    render() {

        let footerGroup = <ColumnGroup>
            <Row>
                <Column footer="Total Ventas $" colSpan={2} footerStyle={{ textAlign: 'right' }} />
                <Column footer={this.suma} />
            </Row>
        </ColumnGroup>;

        return (
            <div style={{ width: '100%', margin: '0 auto' }}>
                <Navbar />
                <br />
                <Panel header="Ventas por Cliente" className="panel-header">
                    <DataTable value={this.state.ventas} footerColumnGroup={footerGroup} paginator={true} rows="10">
                        <Column field="cedulacliente" header="Cédula" filter sortable></Column>
                        <Column field="nombrecliente" header="Nombre" filter sortable></Column>
                        <Column field="totalventa" header="Total Ventas" body={this.totalventaBodyTemplate} filter sortable></Column>
                    </DataTable>
                </Panel>
                <Toast ref={(el) => this.toast = el} />
            </div>
        );
    }

}