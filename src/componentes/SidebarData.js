import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Usuarios',
        path: '/Usuarios',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Clientes',
        path: '/Clientes',
        icon: <FaIcons.FaPeopleArrows />,
        cName: 'nav-text'
    },
    {
        title: 'Proveedores',
        path: '/Proveedores',
        icon: <FaIcons.FaPeopleCarry />,
        cName: 'nav-text'
    },
    {
        title: 'Productos',
        path: '/Productos',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    /*{
        title: 'Ventas',
        path: '/Ventas',
        icon: <GiIcons.GiMoneyStack />,
        cName: 'nav-text'
    },*/
    {
        title: 'Reportes',
        path: '/Reportes',
        icon: <BsIcons.BsFillFolderFill />,
        cName: 'nav-text'
    },
    {
        title: 'Consolidado',
        path: '/Consolidado',
        icon: <RiIcons.RiFolderChartFill />,
        cName: 'nav-text'
    },
    {
        title: 'Cerrar Sesión',
        path: '/Logout',
        icon: <FaIcons.FaWindowClose />,
        cName: 'nav-text'
    }
];