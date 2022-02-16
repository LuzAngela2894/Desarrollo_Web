import React, { Component } from 'react';
import { UsuarioService } from '../service/UsuarioService';
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

export default class Usuarios extends Component {

    constructor() {
        super();
        this.state = {
            visible: false,
            usuario: {
                cedulausuario: null,
                nombreusuario: null,
                emailusuario: null,
                usuario: null,
                contrasena: null
            },
            selectedUsuario: {

            }
        };
        this.items = [
            {
                label: 'Crear',
                icon: 'pi pi-fw pi-plus-circle',
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
        this.usuarioService = new UsuarioService();
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.footer = (
            <div>
                <Button label="Aceptar" icon="pi pi-check" onClick={this.create} />
            </div>
        );
    }

    componentDidMount() {
        this.usuarioService.read().then(data => this.setState({ usuarios: data }))
    }

    create() {
        this.usuarioService.create(this.state.usuario).then(data => {
            this.setState({
                visible: false,
                usuario: {
                    cedulausuario: null,
                    nombreusuario: null,
                    emailusuario: null,
                    usuario: null,
                    contrasena: null
                }
            });
            this.toast.show({ severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.' });
            this.usuarioService.read().then(data => this.setState({ usuarios: data }))
        })
    }

    delete() {
        if (window.confirm("¿Realmente desea eliminar el registro?")) {
            this.usuarioService.delete(this.state.selectedUsuario.cedulausuario).then(data => {
                this.toast.show({ severity: 'success', summary: 'Atención!', detail: 'Se eliminó el registro correctamente.' });
                this.usuarioService.read().then(data => this.setState({ usuarios: data }));
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
                <Panel header="Usuarios" className="panel-header">
                    <DataTable value={this.state.usuarios} paginator={true} rows="10" selectionMode="single" selection={this.state.selectedUsuario} onSelectionChange={e => this.setState({ selectedUsuario: e.value })}>
                        <Column field="cedulausuario" header="Cédula" filter sortable></Column>
                        <Column field="nombreusuario" header="Nombre" filter sortable></Column>
                        <Column field="emailusuario" header="Email" filter sortable></Column>
                        <Column field="usuario" header="Usuario" filter sortable></Column>
                        <Column field="contrasena" header="Clave" filter sortable></Column>
                    </DataTable>
                </Panel>
                <Dialog header="Usuario" className="dialog-header" visible={this.state.visible} style={{ width: '400px' }} footer={this.footer} modal={true} onHide={() => this.setState({ visible: false })}>
                    <form id="usuario-form">
                        <span className="p-float-label">
                            <InputText value={this.state.usuario.cedulausuario} style={{ width: '100%' }} id="cedulausuario" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let usuario = Object.assign({}, prevState.usuario);
                                    usuario.cedulausuario = val;

                                    return { usuario };
                                })
                            }
                            } />
                            <label htmlFor="cedulausuario">Cédula</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.usuario.nombreusuario} style={{ width: '100%' }} id="nombreusuario" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let usuario = Object.assign({}, prevState.usuario);
                                    usuario.nombreusuario = val

                                    return { usuario };
                                })
                            }
                            } />
                            <label htmlFor="nombreusuario">Nombre</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.usuario.emailusuario} style={{ width: '100%' }} id="emailusuario" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let usuario = Object.assign({}, prevState.usuario);
                                    usuario.emailusuario = val

                                    return { usuario };
                                })
                            }
                            } />
                            <label htmlFor="emailusuario">Email</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.usuario.usuario} style={{ width: '100%' }} id="username" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let usuario = Object.assign({}, prevState.usuario);
                                    usuario.usuario = val

                                    return { usuario };
                                })
                            }
                            } />
                            <label htmlFor="usuario">Usuario</label>
                        </span>
                        <br />
                        <span className="p-float-label">
                            <InputText value={this.state.usuario.contrasena} style={{ width: '100%' }} id="password" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let usuario = Object.assign({}, prevState.usuario);
                                    usuario.contrasena = val

                                    return { usuario };
                                })
                            }
                            } />
                            <label htmlFor="contrasena">Clave</label>
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
            usuario: {
                cedulausuario: null,
                nombreusuario: null,
                emailusuario: null,
                usuario: null,
                contrasena: null
            }
        });
    }

    showEditDialog() {
        this.setState({
            visible: true,
            usuario: {
                cedulausuario: this.state.selectedUsuario.cedulausuario,
                nombreusuario: this.state.selectedUsuario.nombreusuario,
                emailusuario: this.state.selectedUsuario.emailusuario,
                usuario: this.state.selectedUsuario.usuario,
                contrasena: this.state.selectedUsuario.contrasena
            }
        })
    }
}