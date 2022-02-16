import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Clientes from './pages/Clientes';
import Proveedores from './pages/Proveedores';
import Productos from './pages/Productos';
import Ventas from './pages/Ventas';
import Ventasv2 from './pages/Ventasv2';
import Reportes from './pages/Reportes';
import ListadoClientes from './pages/ListadoClientes';
import ListadoProductos from './pages/ListadoProductos';
import VentasXCliente from './pages/VentasXCliente';
import Consolidado from './pages/Consolidado';
import Logout from './pages/Logout';
import '../src/css/Rutas.css';

class Rutas extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<Login />} />
                        <Route path='/Home' element={<Home />} />
                        <Route path='/Usuarios' element={<Usuarios />} />
                        <Route path='/Clientes' element={<Clientes />} />
                        <Route path='/Proveedores' element={<Proveedores />} />
                        <Route path='/Productos' element={<Productos />} />
                        <Route path='/Ventas' element={<Ventas />} />
                        <Route path='/Ventasv2' element={<Ventasv2 />} />
                        <Route path='/Reportes' element={<Reportes />} />
                        <Route path='/ListadoClientes' element={<ListadoClientes />} />
                        <Route path='/ListadoProductos' element={<ListadoProductos />} />
                        <Route path='/VentasXCliente' element={<VentasXCliente />} />
                        <Route path='/Consolidado' element={<Consolidado />} />
                        <Route path='/Logout' element={<Logout />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}
export default Rutas;