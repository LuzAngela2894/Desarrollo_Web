import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import swal from 'sweetalert2';

const initialForm = {
    cedulacliente:"",
};

export const PruebaForm = ({ handleSearch }) => {

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.cedulacliente){
            swal.fire({text:'Datos Incompletos', icon: 'error', timer: 5000});
            return;
        }
        handleSearch(form);
        setForm(initialForm);
    };

    return (
        <div>
            <br />
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Ventas</h1>
            <form onSubmit={handleSubmit} id="form" className="form" style={{ display: 'flex', justifyContent: 'center' }}>
                <br />
                <table className="tabla">
                    <tr>
                        <td></td>
                        <td><label htmlFor="cedulacliente"><b>Cédula</b></label></td>
                        <td><InputText name="cedulacliente" onChange={handleChange} value={form.cedulacliente} /></td>
                        <td><input value="Consultar" type="submit" className="btn btn-info btn-md" style={{ background: "#800080", border: "#800080", color: "white" }} /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
