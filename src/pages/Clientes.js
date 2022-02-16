import React, { Component } from 'react';
import { ClienteService } from '../service/ClienteService';
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

export default class Clientes extends Component {
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
        this.clienteService = new ClienteService();
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.footer = (
            <div>
                <Button label="Aceptar" icon="pi pi-check" onClick={this.create} />
            </div>
        );
    }

    componentDidMount() {
        this.clienteService.read().then(data => this.setState({ clientes: data }))
    }

    create() {
        this.clienteService.create(this.state.cliente).then(data => {
            this.setState({
                visible: false,
                cliente: {
                    cedulacliente: null,
                    nombrecliente: null,
                    emailcliente: null,
                    direccioncliente: null,
                    telefonocliente: null
                }
            });
            this.toast.show({ severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.' });
            this.clienteService.read().then(data => this.setState({ clientes: data }))
        })
    }

    delete() {
        if (window.confirm("¿Realmente desea eliminar el registro?")) {
            this.clienteService.delete(this.state.selectedCliente.cedulacliente).then(data => {
                this.toast.show({ severity: 'success', summary: 'Atención!', detail: 'Se eliminó el registro correctamente.' });
                this.clienteService.read().then(data => this.setState({ clientes: data }));
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
                <Panel header="Clientes" className="panel-header">
                    <DataTable value={this.state.clientes} paginator={true} rows="10" selectionMode="single" selection={this.state.selectedCliente} onSelectionChange={e => this.setState({ selectedCliente: e.value })}>
                        <Column field="cedulacliente" header="Cédula" filter sortable></Column>
                        <Column field="nombrecliente" header="Nombre" filter sortable></Column>
                        <Column field="emailcliente" header="Email" filter sortable></Column>
                        <Column field="direccioncliente" header="Dirección" filter sortable></Column>
                        <Column field="telefonocliente" header="Teléfono" filter sortable></Column>
                    </DataTable>
                </Panel>
                <Dialog header="Cliente" className="dialog-header" visible={this.state.visible} style={{ width: '400px' }} footer={this.footer} modal={true} onHide={() => this.setState({ visible: false })}>
                    <form id="cliente-form" name="cliente-form">
                        <span className="p-float-label">
                            <InputText value={this.state.cliente.cedulacliente} style={{ width: '100%' }} id="cedulacliente" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let cliente = Object.assign({}, prevState.cliente);
                                    cliente.cedulacliente = val;

                                    return { cliente };
                                })
                            }
                            } />
                            <label htmlFor="cedulacliente">Cédula</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.cliente.nombrecliente} style={{ width: '100%' }} id="nombrecliente" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let cliente = Object.assign({}, prevState.cliente);
                                    cliente.nombrecliente = val

                                    return { cliente };
                                })
                            }
                            } />
                            <label htmlFor="nombrecliente">Nombre</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.cliente.emailcliente} style={{ width: '100%' }} id="emailcliente" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let cliente = Object.assign({}, prevState.cliente);
                                    cliente.emailcliente = val

                                    return { cliente };
                                })
                            }
                            } />
                            <label htmlFor="emailcliente">Email</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.cliente.direccioncliente} style={{ width: '100%' }} id="direccioncliente" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let cliente = Object.assign({}, prevState.cliente);
                                    cliente.direccioncliente = val

                                    return { cliente };
                                })
                            }
                            } />
                            <label htmlFor="direccioncliente">Dirección</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.cliente.telefonocliente} style={{ width: '100%' }} id="telefonocliente" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let cliente = Object.assign({}, prevState.cliente);
                                    cliente.telefonocliente = val

                                    return { cliente };
                                })
                            }
                            } />
                            <label htmlFor="telefonocliente">Teléfono</label>
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
            cliente: {
                cedulacliente: null,
                nombrecliente: null,
                emailcliente: null,
                direccioncliente: null,
                telefonocliente: null
            },
        });
    }

    showEditDialog() {
        this.setState({
            visible: true,
            cliente: {
                cedulacliente: this.state.selectedCliente.cedulacliente,
                nombrecliente: this.state.selectedCliente.nombrecliente,
                emailcliente: this.state.selectedCliente.emailcliente,
                direccioncliente: this.state.selectedCliente.direccioncliente,
                telefonocliente: this.state.selectedCliente.telefonocliente
            }
        })
    }
}