import React, { useState, useEffect, PureComponent } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Area, PieChart, Pie, Sector, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart } from 'recharts';
import axios from 'axios';
import ModifyUsers from '../modify-users/modify-users';
import DeleteUsers from '../delete-users/delete-users';

import './css/dashboard-container.css';
import { isIfStatement } from 'typescript';

const DashContainer = () => {
    const [value1, setValue1] = useState('Off');
    const options = ['Ver graficas', 'Eliminar usuarios'];

    const SelectedCard = () => {
        var PrintElement = null;
        switch (value1) {
            case 'Ver graficas':
                PrintElement = <GraphElement />
                break;
            case 'Eliminar usuarios':
                PrintElement = <EliminarUsuario />
                break;
            default:
                PrintElement = null;
                break;
        }
        return (
            PrintElement
        );
    }

    const GraphElement = () => {
        const [valoracion, setValoracion] = useState([]);
        const [estudios, setEstudios] = useState([]);
        useEffect(() => {
            axios.get('https://mern-stack-tefege.herokuapp.com/api/usuarios')
                .then(res => {
                    let valoracionModelo1 = 0;
                    let valoracionmodelo2 = 0;

                    let estudiosSi = 0;
                    let estudiosNo = 0;

                    for (let r in res.data) {                       
                        valoracionModelo1 += parseInt(res.data[r].valoracion1);
                        valoracionmodelo2 += parseInt(res.data[r].valoracion2);
                        
                        if (res.data[r].estudios === "Si") {
                            estudiosSi++;
                        } else {
                            estudiosNo++;
                        }
                    }
                    setValoracion([{name: "Modelo 1", valoracion: valoracionModelo1},{name: "Modelo 2", valoracion: valoracionmodelo2}]);
                    setEstudios([{name: "Si", valor: estudiosSi}, {name: "No", valor: estudiosNo}]);
            })
                .catch(err => {
                    console.log(err)
                }, []);
        })
        return(
            <div className='chart-container'>
                <div className='chart-container-uno'>
                    <BarChart width={500} height={200} data={valoracion}>
                        <Bar dataKey="valoracion" fill="#8884d8" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </BarChart>
                    <Legend />
                </div>
            </div>
        )
    }

    const EliminarUsuario = () => {

        const [datos, setDatos] = useState([]);
        useEffect(() => {
            axios.get('https://mern-stack-tefege.herokuapp.com/api/usuarios')
                .then(res => {
                    let dataArray = [];
                    for(let data in res.data) {
                        if(res.data[data].type !== "SUPERUSER"){
                            dataArray.push(res.data[data]);
                        }
                    }
                    setDatos(dataArray);                   
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

    return (
        <div className='card-container'>
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