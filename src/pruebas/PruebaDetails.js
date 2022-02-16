import React from 'react';
import { PruebaNombre } from './PruebaNombre';

export const PruebaDetails = ({ search, nombrecliente }) => {
    if (!nombrecliente) return null;
    return (
        <>
            <PruebaNombre cedula={search.cedulacliente} />
        </>
    );
}