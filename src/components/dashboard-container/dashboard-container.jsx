import React, { useState, useEffect } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import ModifyUsers from '../modify-users/modify-users';
import DeleteUsers from '../delete-users/delete-users';

const DashContainer = () => {
    const [value1, setValue1] = useState('Off');
    const options = ['Cambiar textos', 'Añadir usuarios', 'Eliminar usuarios', 'Modificar usuarios'];

    const SelectedCard = () => {
        var PrintElement = null;
        switch (value1) {
            case 'Cambiar textos':
                PrintElement = <h1>Estos son los textos</h1>
                break;
            case 'Añadir usuarios':
                PrintElement = <h1>Añadir usuarios</h1>
                break;
            case 'Eliminar usuarios':
                PrintElement = <EliminarUsuario />
                break;
            case 'Modificar usuarios':
                PrintElement = <CambiarUsuarios />
                break;
            default:
                PrintElement = null;
                break;
        }
        return (
            PrintElement
        );
    }

    const EliminarUsuario = () => {

        const [datos, setDatos] = useState([]);
        useEffect(() => {
            axios.get('https://mern-stack-tefege.herokuapp.com/api/usuarios')
                .then(res => {
                    setDatos(res.data);
                })
                .catch(err => {
                    console.log(err)
                }, []);
        })
    
        return (
            <div className='container-changeusers'>
                <div className='datatable-changeusers'>
                <DataTable value={datos} responsiveLayout="scroll">
                    <Column field="_id" header="ID"></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="apellidos" header="Apellidos"></Column>
                    <Column field="username" header="Username"></Column>
                    <Column field="contrasena" header="Contraseña"></Column>
                    <Column field="type" header="Tipo"></Column>
                </DataTable>
                </div>
                <DeleteUsers />
            </div>
        )
    }

    const CambiarUsuarios = () => {

        const [datos, setDatos] = useState([]);
        useEffect(() => {
            axios.get('https://mern-stack-tefege.herokuapp.com/api/usuarios')
                .then(res => {
                    setDatos(res.data);
                })
                .catch(err => {
                    console.log(err)
                }, []);
        })

        return (
            <div className='container-changeusers'>
                <div className='datatable-changeusers'>
                <DataTable value={datos} responsiveLayout="scroll">
                    <Column field="_id" header="ID"></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="apellidos" header="Apellidos"></Column>
                    <Column field="username" header="Username"></Column>
                    <Column field="contrasena" header="Contraseña"></Column>
                    <Column field="type" header="Tipo"></Column>
                </DataTable>
                </div>
                <ModifyUsers />
            </div>
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