import React, { Component } from 'react';
import { ProveedorService } from '../service/ProveedorService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import Navbar from '../componentes/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../css/General.css';

export default class Proveedores extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            proveedor: {
                nitproveedor: null,
                nombreproveedor: null,
                direccionproveedor: null,
                telefonoproveedor: null,
                ciudadproveedor: null
            },
            selectedProveedor: {

            }
        };
        this.items = [
            {
                label: 'Crear',
                icon: 'pi pi-fw pi-plus',
                command: () => { this.showCreateDialog() }
            },
            {
                label: 'Editar',
                icon: 'pi pi-fw pi-pencil',
                command: () => { this.showEditDialog() }
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-fw pi-trash',
                command: () => { this.delete() }
            }
        ];
        this.proveedorService = new ProveedorService();
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.footer = (
            <div>
                <Button label="Aceptar" icon="pi pi-check" onClick={this.create} />
            </div>
        );
    }

    componentDidMount() {
        this.proveedorService.read().then(data => this.setState({ proveedores: data }))
    }

    create() {
        this.proveedorService.create(this.state.proveedor).then(data => {
            this.setState({
                visible: false,
                proveedor: {
                    nitproveedor: null,
                    nombreproveedor: null,
                    direccionproveedor: null,
                    telefonoproveedor: null,
                    ciudadproveedor: null
                }
            });
            this.toast.show({ severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.' });
            this.proveedorService.read().then(data => this.setState({ proveedores: data }))
        })
    }

    delete() {
        if (window.confirm("¿Realmente desea eliminar el registro?")) {
            this.proveedorService.delete(this.state.selectedProveedor.nitproveedor).then(data => {
                this.toast.show({ severity: 'success', summary: 'Atención!', detail: 'Se eliminó el registro correctamente.' });
                this.proveedorService.read().then(data => this.setState({ proveedores: data }));
            });
        }
    }

    render() {
        return (
            <div style={{ width: '100%', margin: '0 auto' }}>
                <Navbar />
                <br />
                <Menubar model={this.items} />
                <br />
                <Panel header="Proveedores" className="panel-header">
                    <DataTable value={this.state.proveedores} paginator={true} rows="10" selectionMode="single" selection={this.state.selectedProveedor} onSelectionChange={e => this.setState({ selectedProveedor: e.value })}>
                        <Column field="nitproveedor" header="Nit" filter sortable></Column>
                        <Column field="nombreproveedor" header="Nombre" filter sortable></Column>
                        <Column field="direccionproveedor" header="Dirección" filter sortable></Column>
                        <Column field="telefonoproveedor" header="Teléfono" filter sortable></Column>
                        <Column field="ciudadproveedor" header="Ciudad" filter sortable></Column>
                    </DataTable>
                </Panel>
                <Dialog header="Proveedor" className="dialog-header" visible={this.state.visible} style={{ width: '400px' }} footer={this.footer} modal={true} onHide={() => this.setState({ visible: false })}>
                    <form id="proveedor-form" name="proveedor-form">
                        <span className="p-float-label">
                            <InputText value={this.state.proveedor.nitproveedor} style={{ width: '100%' }} id="nitproveedor" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let proveedor = Object.assign({}, prevState.proveedor);
                                    proveedor.nitproveedor = val;

                                    return { proveedor };
                                })
                            }
                            } />
                            <label htmlFor="nitproveedor">Nit</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.proveedor.nombreproveedor} style={{ width: '100%' }} id="nombreproveedor" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let proveedor = Object.assign({}, prevState.proveedor);
                                    proveedor.nombreproveedor = val

                                    return { proveedor };
                                })
                            }
                            } />
                            <label htmlFor="nombreproveedor">Nombre</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.proveedor.direccionproveedor} style={{ width: '100%' }} id="direccionproveedor" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let proveedor = Object.assign({}, prevState.proveedor);
                                    proveedor.direccionproveedor = val

                                    return { proveedor };
                                })
                            }
                            } />
                            <label htmlFor="direccionproveedor">Dirección</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.proveedor.telefonoproveedor} style={{ width: '100%' }} id="telefonoproveedor" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let proveedor = Object.assign({}, prevState.proveedor);
                                    proveedor.telefonoproveedor = val

                                    return { proveedor };
                                })
                            }
                            } />
                            <label htmlFor="telefonoproveedor">Teléfono</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.proveedor.ciudadproveedor} style={{ width: '100%' }} id="ciudadproveedor" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let proveedor = Object.assign({}, prevState.proveedor);
                                    proveedor.ciudadproveedor = val

                                    return { proveedor };
                                })
                            }
                            } />
                            <label htmlFor="ciudadproveedor">Ciudad</label>
                        </span>
                    </form>
                </Dialog>
                <Toast ref={(el) => this.toast = el} />
            </div>
        );
    }

    showCreateDialog() {
        this.setState({
            visible: true,
            proveedor: {
                nitproveedor: null,
                nombreproveedor: null,
                direccionproveedor: null,
                telefonoproveedor: null,
                ciudadproveedor: null
            },
        });
    }

    showEditDialog() {
        this.setState({
            visible: true,
            proveedor: {
                nitproveedor: this.state.selectedProveedor.nitproveedor,
                nombreproveedor: this.state.selectedProveedor.nombreproveedor,
                direccionproveedor: this.state.selectedProveedor.direccionproveedor,
                telefonoproveedor: this.state.selectedProveedor.telefonoproveedor,
                ciudadproveedor: this.state.selectedProveedor.ciudadproveedor
            }
        })
    }
}