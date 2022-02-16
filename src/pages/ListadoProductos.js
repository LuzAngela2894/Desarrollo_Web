import React, { Component } from 'react';
import { ProductoService } from '../service/ProductoService';
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

export default class ListadoProductos extends Component {

    constructor() {
        super();
        this.state = {
            visible: false,
            producto: {
                codigoproducto: null,
                nombreproducto: null,
                nitproveedor: null,
                preciocompra: null,
                ivacompra: null,
                precioventa: null
            },
            selectedProducto: {

            }
        };
        this.productoService = new ProductoService();
    }

    componentDidMount() {
        this.productoService.read().then(data => this.setState({ productos: data }))
    }

    render() {
        return (
            <div style={{ width: '100%', margin: '0 auto' }}>
                <Navbar />
                <br />
                <Panel header="Productos" className="panel-header">
                    <DataTable value={this.state.productos} paginator={true} rows="9" selectionMode="single" selection={this.state.selectedProducto} onSelectionChange={e => this.setState({ selectedProducto: e.value })}>
                        <Column field="codigoproducto" header="Código" filter sortable></Column>
                        <Column field="nombreproducto" header="Nombre" filter sortable></Column>
                        <Column field="nitproveedor" header="NIT" filter sortable></Column>
                        <Column field="preciocompra" header="Precio Compra" filter sortable></Column>
                        <Column field="ivacompra" header="IVA Compra" filter sortable></Column>
                        <Column field="precioventa" header="Precio Venta" filter sortable></Column>
                    </DataTable>
                </Panel>
                <Toast ref={(el) => this.toast = el} />
            </div>
        );
    }
}