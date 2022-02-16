import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PruebaForm } from './PruebaForm';
import { PruebaDetails } from './PruebaDetails';

export const PruebaSearch = () => {
    
    const [search, setSearch] = useState(null);
    const [nombrecliente, setNombrecliente] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        if (search === null) return;
        const fetchData = async () => {
            const { cedulacliente } = search;
            let URL = `http://localhost:8080/api/clientes/read/${cedulacliente}`;
            console.log(URL);
            setLoading(true);
            const [Response] = await Promise.all([axios.get(URL)]);
            console.log(Response);
            setNombrecliente(Response);
            setLoading(false);
        };
        fetchData();
    }, [search]);

    function handleSearch(data) {
        console.log(data);
        setSearch(data);
    }

    return (
        <div>
            <PruebaForm handleSearch={handleSearch} />
            {search && !loading && (
                <PruebaDetails search={search} nombrecliente={nombrecliente} />
            )}
        </div>
    )
}