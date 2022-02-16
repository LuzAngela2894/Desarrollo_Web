import React, { Component } from "react";

function Cliente(props) {
    return (
        <>
            <div>{props.nombrecliente}</div>
        </>
    );
}

export default class PruebaCliente extends Component {
    state = {
        clientes: [],
    };

    componentDidMount() {
        let url = "http://localhost:8080/api/clientes/read";
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                json.forEach((el) => {
                    fetch(el.url)
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json);
                            let cliente = {
                                cedulacliente: json.cedulacliente,
                                nombrecliente: json.nombrecliente,
                            };

                            let clientes = [...this.state.clientes, cliente];

                            this.setState({ clientes });
                        });
                });
            });
    }

    render() {
        return (
            <>
                <h2>Peticiones Asíncronas en Componentes de Clase</h2>
                {this.state.clientes.length === 0 ? (
                    <h3>Cargando...</h3>
                ) : (
                    this.state.clientes.map((el) => (
                        <Cliente key={el.cedulacliente} nombrecliente={el.nombrecliente} />
                    ))
                )}
            </>
        );
    }
}