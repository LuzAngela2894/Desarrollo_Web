import React, { Component } from "react";
import axios from "axios";
import { VentaService } from "../service/VentaService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Menubar } from "primereact/menubar";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Navbar from '../componentes/Navbar';

import { Formik, Form, Field, ErrorMessage } from "formik";

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class Ventasv2 extends Component {

  constructor() {
    super();
    this.state = {
      visible: false,
      venta: {
        codigoventa: null,
        cedulacliente: null,
        valorventa: null,
        ivaventa: null,
        totalventa: null,
        detalleventa: null
      },
      selectedVenta: {},
    };

    this.items = [
      {
        label: "Nuevo",
        icon: "pi pi-fw pi-plus",
        command: () => {
          this.showCreateDialog();
        },
      },
      {
        label: "Editar",
        icon: "pi pi-fw pi-pencil",
        command: () => {
          this.showEditDialog();
        },
      },
      {
        label: "Eliminar",
        icon: "pi pi-fw pi-trash",
        command: () => {
          this.delete();
        },
      },
    ];
    this.VentaService = new VentaService();
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
    this.footer = (
      <div>
        <Button label="Aceptar" icon="pi pi-check" onClick={this.create} />
      </div>
    );
  }

  componentDidMount() {
    console.log("Estoy en el DidMount");
    this.VentaService.read().then((data) =>
      this.setState({ ventas: data })
    );
  }

  create() {
    this.VentaService.create(this.state.venta).then((data) => {
      this.setState({
        visible: false,
        venta: {
          codigoventa: null,
          cedulacliente: null,
          valorventa: null,
          ivaventa: null,
          totalventa: null,
          detalleventa: null
        },
      });
      this.toast.show({
        severity: "success",
        summary: "Atención!",
        detail: "Se guardó el registro correctamente.",
      });
      this.VentaService.read().then((data) =>
        this.setState({ ventas: data })
      );
    });
  }

  delete() {
    if (window.confirm("¿Realmente desea eliminar el registro?")) {
      this.VentaService.delete(this.state.selectedVenta.codigoventa).then(
        (data) => {
          this.toast.show({
            severity: "success",
            summary: "Atención!",
            detail: "Se eliminó el registro correctamente.",
          });
          this.VentaService.read().then((data) =>
            this.setState({ ventas: data })
          );
        }
      );
    }
  }

  render() {
    return (
      <div style={{ width: "100%", margin: "0 auto" }}>
        <Navbar />
        <br />
        <Menubar model={this.items} />
        <br />
        <Panel header="Ventas">
          <DataTable
            value={this.state.ventas}
            paginator={true}
            rows="4"
            selectionMode="single"
            selection={this.state.selectedVenta}
            onSelectionChange={(e) =>
              this.setState({ selectedVenta: e.value })
            }
          >
            <Column field="codigoventa" header="codigoventa"></Column>
            <Column field="cedulacliente" header="cedulacliente"></Column>
            {/* <Column field="detalleventa" header="detalleventa"></Column> */}
            <Column field="ivaventa" header="ivaventa"></Column>
            <Column field="totalventa" header="totalventa"></Column>
            <Column field="valorventa" header="valorventa"></Column>
          </DataTable>
        </Panel>
        <Dialog
          header="Crear Venta"
          visible={this.state.visible}
          style={{ width: "150vh" }}
          footer={this.footer}
          modal={true}
          onHide={() => this.setState({ visible: false })}
        >
          <Formik
            initialValues={{
              cedulacliente: "",
              codigoproducto: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.cedulacliente) {
                errors.cedulacliente = "Ingresa el número de cédula del cliente";
              }
              return errors;
            }}
            onSubmit={async (values) => {
              //console.log('formulario', values.cedula);

              if (values.cedulacliente != null) {
                let valorCedulacliente = [];
                let valorCodigoproducto = [];
                let nombrecliente = "";
                valorCedulacliente = axios
                  .get("http://localhost:8080/clientes/read/" + values.cedulacliente)
                  .then((res) => res.data);
                console.log(valorCedulacliente);
                valorCodigoproducto = axios
                  .get(
                    "http://localhost:8080/productos/read/" + values.codigoproducto)
                  .then((res) => res.data);
                console.log(valorCodigoproducto);
                alert(valorCodigoproducto);

                Object.keys(valorCedulacliente).forEach((key) => {
                  console.log(key);
                  nombrecliente = valorCedulacliente[key].nombrecliente;
                });
                console.log("nombre", nombrecliente);
                alert("nombre", nombrecliente);
              }
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="cedulacliente"><b>Cedula Cliente</b></label>
                  <Field id="cedulacliente" name="cedulacliente" placeholder="123456789" />
                  <ErrorMessage name="cedulacliente" component="div" />
                  <Field id="nombrecliente" name="nombrecliente" />
                </div>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Codigo Producto</th>
                        <th>Nombre Producto</th>
                        <th>Cantidad</th>
                        <th>Valor Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Field
                            id="codigoproducto"
                            name="codigoproducto"
                            placeholder="ejem: 00000009"
                          />
                        </td>
                        <td>
                          <Field
                            id="nombreproducto"
                            name="nombreproducto"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <Field id="cantidadproducto" name="cantidadproducto" placeholder="" />
                        </td>
                        <td>
                          <Field id="valortotal" name="valortotal" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <button className="btn btn-info btn-md" type="submit" style={{ background: "#800080", border: "#800080", color: "white" }}>Consultar</button>
                </div>
              </Form>
            )}
          </Formik>

          <form id="venta-form"></form>
        </Dialog>
        <Toast ref={(el) => (this.toast = el)} />
      </div>
    );
  }

  showCreateDialog() {
    this.setState({
      visible: true,
      venta: {
        codigoventa: null,
        cedulacliente: null,
        valorventa: null,
        ivaventa: null,
        totalventa: null,
        detalleventa: null
      },
    });
    document.getElementById("venta-form");
  }

  showEditDialog() {
    this.setState({
      visible: true,
      venta: {
        codigoventa: this.state.selectedVenta.codigoventa,
        cedulacliente: this.state.selectedVenta.cedulacliente,
        valorventa: this.state.selectedVenta.valorventa,
        ivaventa: this.state.selectedVenta.ivaventa,
        totalventa: this.state.selectedVenta.totalventa,
        detalleventa: this.state.selectedVenta.detalleventa,
      },
    });
  }
}