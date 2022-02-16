import React, { Component } from 'react';
import axios from 'axios';
import { ConsolidadoService } from '../service/ConsolidadoService';
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

export default class Consolidado extends Component {

    constructor() {
        super();
        this.state = {
            visible: false,
            consolidado: {
                id: null,
                ciudad: null,
                totalventas: null
            },
        };
        this.consolidadoService = new ConsolidadoService();
        this.totalventasBodyTemplate = this.totalventasBodyTemplate.bind(this);
        this.suma = this.suma.bind(this);
    }    

    componentDidMount() {
        this.consolidadoService.read().then(data => this.setState({ consolidados: data }))
    }

    totalventasBodyTemplate(rowData) {
        return `${this.formatCurrency(rowData.totalventas)}`;
    }

    formatCurrency(value) {
        return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    }

    suma() {
        let URL = "http://localhost:8080/api/consolidado/read";
        let suma = 0;
        axios.get(URL).then(res => {
            const venta = res.data;
            Object.keys(venta).forEach(key => {
                suma += venta[key].totalventas;
            });
        });
        return suma;
    }

    render() {

        let footerGroup = <ColumnGroup>
            <Row>
                <Column footer="Total Ventas Tienda $" colSpan={1} footerStyle={{ textAlign: 'right' }} />
                <Column footer={this.total} />
            </Row>
        </ColumnGroup>;

        return (
            <div style={{ width: '100%', margin: '0 auto' }}>
                <Navbar />
                <br />
                <Panel header="Total Ventas por Ciudad" className="panel-header">
                    <DataTable value={this.state.consolidados} footerColumnGroup={footerGroup} paginator={true} rows="10">
                        <Column field="ciudad" header="Ciudad" filter sortable></Column>
                        <Column field="totalventas" header="Total Ventas" body={this.totalventasBodyTemplate} filter sortable></Column>
                    </DataTable>
                </Panel>
                <Toast ref={(el) => this.toast = el} />
            </div>
        );
    }
}