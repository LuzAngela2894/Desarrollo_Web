import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
/*import { ConsolidadoService } from '../service/ConsolidadoService';*/
import Navbar from '../componentes/Navbar';

import '../css/General.css';

export default class PruebaPrimeReact extends Component {

    constructor(props) {
        super(props);

        /*this.state = {
            visible: false,
            consolidado: {
                id: null,
                ciudad: null,
                totalventas: null
            },
        };
        this.consolidadoService = new ConsolidadoService();*/

        this.sales = [
            { ciudad: 'Bogotá', totalventas: 385200 },
            { ciudad: 'Cali', totalventas: 312122 },
            { ciudad: 'Medellín', totalventas: 8511 }
        ];

        this.ventasTotal = this.ventasTotal.bind(this);
        this.totalventasBodyTemplate = this.totalventasBodyTemplate.bind(this);
    }

    /*componentDidMount(){
        this.consolidadoService.read().then(data => this.setState({ consolidados: data }))
    }*/

    totalventasBodyTemplate(rowData) {
        return `${this.formatCurrency(rowData.totalventas)}`;
    }

    formatCurrency(value) {
        return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    }

    ventasTotal() {
        let total = 0;
        for (let sale of this.sales) {
            total += sale.totalventas;
        }

        return this.formatCurrency(total);
    }

    render() {
        let headerGroup = <ColumnGroup>
            <Row>
                <Column header="Ciudad" rowSpan={3} />
            </Row>
            <Row>
                <Column header="Total Ventas" sortable field="totalventas" />
            </Row>
        </ColumnGroup>;

        let footerGroup = <ColumnGroup>
            <Row>
                <Column footer="Totales:" colSpan={1} footerStyle={{ textAlign: 'center' }} />
                <Column footer={this.ventasTotal} />
            </Row>
        </ColumnGroup>;
        return (
            <div>
                <Navbar />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                    <div className="card">
                        <DataTable value={this.sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                            <Column field="ciudad" />
                            <Column field="totalventas" body={this.totalventasBodyTemplate} />
                        </DataTable>
                    </div>
                </div>
            </div>
        );
    }
}                 