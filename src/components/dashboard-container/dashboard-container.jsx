import React, { useState, useEffect, PureComponent } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import ModifyUsers from '../modify-users/modify-users';
import DeleteUsers from '../delete-users/delete-users';

const DashContainer = () => {
    const [value1, setValue1] = useState('Off');
    const options = ['Ver graficas', 'Añadir usuarios', 'Eliminar usuarios', 'Modificar usuarios'];

    const SelectedCard = () => {
        var PrintElement = null;
        switch (value1) {
            case 'Ver graficas':
                PrintElement = <GraphElement />
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

    const GraphElement = () => {
        const [graphData, setGraphData] = useState('Off');
        const [settear, setSettear] = useState('Off');
        useEffect(() => {
            axios.get('https://mern-stack-tefege.herokuapp.com/api/usuarios')
                .then(res => {
                    let arr1 = 0;
                    let cont_arr1 = 0;
                    let arr1_final = 0;
                    let arr2 = 0;
                    let cont_arr2 = 0;
                    let arr2_final = 0;
                    const arr25 = [];
                    const arr30 = [];
                    const arr40 = [];
                    const arr50 = [];
                    const arr60 = [];
                    for(let i in res.data) {
                        switch (res.data[i].edad) {
                            case "20-25":
                                cont_arr1++;
                                let aux1 = parseInt(res.data[i].valoracion[0].rating);
                                let aux2 = parseInt(res.data[i].valoracion[1].rating);
                                let aux3 = (aux1 + aux2);
                                arr1 += aux3;
                                arr1_final = (arr1 / cont_arr1);
                            break;
                            case "25-30":
                                cont_arr2++;
                                let aux32 = (parseInt(res.data[i].valoracion[1].rating) + parseInt(res.data[i].valoracion[0].rating))
                                arr2 += aux32;
                                arr2_final = (arr2 / cont_arr2);
                                break;
                            default:
                                break;
                        }
                    }
                    setGraphData(res.data);
                    const data = [
                        {name: '20-25', students: {arr1_final}},
                        {name: '25-30', students: {arr2_final}},
                        {name: '30-40', students: 700},
                        {name: '40-50', students: 200},
                        {name: '50-60', students: 1000}
                      ];
                })
                .catch(err => {
                    console.log(err)
                });
        })



        return (
            <div className='graph-container'>
                <BarChart width={600} height={600} data={parseInt(graphData)}>
                    <Bar dataKey="students" fill="green" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            </div>
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