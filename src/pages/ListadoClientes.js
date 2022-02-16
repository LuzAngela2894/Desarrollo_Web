import React, { Component } from 'react';
import { ClienteService } from '../service/ClienteService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Toast } from 'primereact/toast';
import Navbar from '../componentes/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../css/General.css';

export default class ListadoClientes extends Component {

    constructor() {
        super();
        this.state = {
            visible: false,
            cliente: {
                cedulacliente: null,
                nombrecliente: null,
                emailcliente: null,
                direccioncliente: null,
                telefonocliente: null
            },
            selectedCliente: {

            }
        };
        this.clienteService = new ClienteService();
    }

    componentDidMount() {
        this.clienteService.read().then(data => this.setState({ clientes: data }))
    }

    render() {
        return (
            <div style={{ width: '100%', margin: '0 auto' }}>
                <Navbar />
                <br />
                <Panel header="Listado de Clientes" className="panel-header">
                    <DataTable value={this.state.clientes} paginator={true} rows="10" selectionMode="single" selection={this.state.selectedCliente} onSelectionChange={e => this.setState({ selectedCliente: e.value })}>
                        <Column field="cedulacliente" header="Cédula" filter sortable></Column>
                        <Column field="nombrecliente" header="Nombre" filter sortable></Column>
                        <Column field="emailcliente" header="Email" filter sortable></Column>
                        <Column field="direccioncliente" header="Dirección" filter sortable></Column>
                        <Column field="telefonocliente" header="Teléfono" filter sortable></Column>
                    </DataTable>
                </Panel>
                <Toast ref={(el) => this.toast = el} />
            </div>
        );
    }

}