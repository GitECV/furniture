import React, { useState, useEffect } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DashContainer = () => {
    const [value1, setValue1] = useState('Off');
    const options = ['Cambiar textos', 'Añadir usuarios', 'Eliminar usuarios', 'Modificar usuarios'];

    const SelectedCard = () => {
        var PrintElement = null;
        switch (value1) {
            case 'Cambiar textos':
                PrintElement = <CambiarTextos />
                break;
            case 'Añadir usuarios':
                PrintElement = <h1>Estos son los usuarios</h1>
                break;
            case 'Eliminar usuarios':
                PrintElement = <h1>Eliminar usuarios</h1>
                break;
            case 'Modificar usuarios':
                PrintElement = <h1>Modificar usuarios</h1>
                break;
            default:
                PrintElement = null;
                break;
        }
        return (
            PrintElement
        );
    }

    const CambiarTextos = () => {
        const [datos, setDatos] = useState([]);
        fetch('https://mern-stack-tefege.herokuapp.com/api/usuarios')
        .then(response => response.json())
        .then(data => {
            console.log(data[0]);
            setDatos(data[0]._id + " " + data[0].nombre + " " + data[0].apellidos);
        });
        return (
            <p>{datos}</p>
        )
    }

    return (
        <div>
            <div className="card">
                <SelectButton value={value1} options={options} onChange={(e) => setValue1(e.value)} />
            </div>
            <div className="cambiar-textos">
                <SelectedCard />
            </div>
        </div>
    );
}

export default DashContainer;