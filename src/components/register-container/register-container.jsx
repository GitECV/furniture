import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

import './css/register-container.css';

class RegisterForm extends Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            username: '',
            contrasena:'',
            type: "USER",
            edad: '',
            curso: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addUsuario = this.addUsuario.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        console.log(e.target);
        this.setState({
            [name]: value

        })
        console.log(this.state);
    }
    
    addUsuario(e){
        fetch('/api/usuarios', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

        e.preventDefault();
    }

    render() {
        const header = <h6>Introduce tu contraseña</h6>;
        const footer = (
            <React.Fragment>
                <Divider />
                <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                    <li>Una minúscula</li>
                    <li>Una mayúscula</li>
                    <li>Por lo menos un número</li>
                    <li>Mínimo 8 caracteres</li>
                </ul>
            </React.Fragment>
        );
        return (
            <div>
                <form onSubmit={this.addUsuario}>
                <div className="field-nombre">
                    <label htmlFor="username" className="block">Nombre de usuario</label><br />
                    <InputText id="username" name='username' aria-describedby="nombre" className="p-invalid block" onChange={this.handleChange} /><br />
                    <small id="nombre-help" className="p-error block">El nombre no puede estar vacío</small>
                </div>
                <div className="field-correo">
                    <label htmlFor="correo" className="block">Correo electrónico</label><br />
                    <InputText id="correo" name='correo' aria-describedby="correo" className="p-invalid block" onChange={this.handleChange} /><br />
                    <small id="correo-help" className="p-error block">El correo no puede estar vacío</small>
                </div>
                <div className='field-contrasena'>
                    <label htmlFor="nombre" className="block">Contraseña</label><br />
                    <Password name='contrasena' onChange={this.handleChange} header={header} footer={footer} /> <br />
                    <small id="nombre-help" className="p-error block">La contraseña no puede estar vacía</small>
                </div>
                <div className='field-edad'>
                <Dropdown name='edad' value={this.state.edad} options={edades} onChange={this.handleChange} optionLabel="name" placeholder="Edad" />
                </div>
                <h5>¿Has cursado estudios relacionados con el arte?</h5>
                <div className="field-radiobutton">
                    <RadioButton inputId="cursadosi" name="curso" value="Si" onChange={(e) => this.setState({curso: e.value})} checked={this.state.curso === 'Si'} />
                    <label htmlFor="cursadosi">Si</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="cursadono" name="curso" value="No" onChange={(e) => this.setState({curso: e.value})} checked={this.state.curso === 'No'} />
                    <label htmlFor="cursadono">No</label>
                </div>
                    <Button className='prime-button' label="Registrarse" />
                </form>
            </div>
        )
    }
}

   //TRESCV
   const  edades = [
    { name: '15-20'},
    { name: '20-25' },
    { name: '25-30'},
    { name: '30-40'},
    { name: '40-50' },
    { name: '50-60' },
    { name: '> 60' },
];

export default RegisterForm;