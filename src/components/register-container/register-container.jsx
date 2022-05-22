import React, { Component } from 'react';
import md5 from 'md5';
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
            nombre: 'null',
            apellidos: 'null',
            username: '',
            contrasena:'',
            correo: '',
            type: "USER",
            edad: '',
            curso: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addUsuario = this.addUsuario.bind(this);
    }
    handleChange(e) {
        let { name, value } = e.target;
        if(name === "contrasena") {
            value = md5(value.toString());
        }
        console.log(e.target);
        this.setState({
            [name]: value

        })
        console.log(this.state);
    }

    addUsuario(e){
        this.validateName();
        this.validateEmail();
        this.validateCurso();
        this.validatePassword();

        if (this.validateName() && this.validateEmail() && this.validateCurso() && this.validatePassword()) {
            fetch('https://mern-stack-tefege.herokuapp.com/api/usuarios', {
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
        }
        e.preventDefault();
    }

    validateCurso() {
        if(this.state.curso === '') {
            if (document.querySelector("#curso-help") === null) {
                document.querySelector(".field-radiobutton").insertAdjacentHTML("beforeend", '<br /><small id="curso-help" className="p-error">Tienes que seleccionar una opción</small>');
            }
        return false;
        } else {
            if (document.querySelector("#curso-help") !== null) {
                document.getElementById("curso-help").remove();
            }
        return true
    }
}

    validatePassword() {
        if (this.state.contrasena === '') {
            if (document.querySelector("#contrasena-help") === null) {
                document.querySelector("#contrasena").classList.add("p-invalid");
                document.querySelector(".field-contrasena").insertAdjacentHTML("beforeend", '<small id="contrasena-help" className="p-error">La contraseña no puede estar en blanco</small>');
            }
        return false;
        } else {
            if (document.querySelector("#contrasena-help") !== null) {
                document.getElementById("contrasena-help").remove();
                document.querySelector("#contrasena").classList.remove("p-invalid");
            }
        return true;
    }
    }

    validateEmail() {
        if (this.state.correo === '') {
            if (document.querySelector("#correo-help") === null) {
                document.querySelector("#correo").classList.add("p-invalid");
                document.querySelector(".field-correo").insertAdjacentHTML("beforeend", '<small id="correo-help" className="p-error">El correo no puede estar en blanco</small>');
            }
        return false;
        } else {
            if (document.querySelector("#correo-help") !== null) {
                document.getElementById("correo-help").remove();
                document.querySelector("#correo").classList.remove("p-invalid");
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.correo)){
                document.querySelector("#correo").classList.add("p-invalid");
                document.querySelector(".field-correo").insertAdjacentHTML("beforeend", '<small id="correo-help" className="p-error">El formato del correo no es válido. E.J. example@email.com</small>');
                return false;
            } 
        return true;
    }
}

    validateName() {
        //Validamos que el input no está vacío
        if (this.state.username === '') {
            if (document.querySelector("#nombre-help") === null) {
                document.querySelector("#username").classList.add("p-invalid");
                document.querySelector(".field-nombre").insertAdjacentHTML("beforeend", '<small id="nombre-help" className="p-error">El nombre de usuario no puede estar en blanco</small>');
            }
        return false;
        } else {
            if (document.querySelector("#nombre-help") !== null) {
                document.getElementById("nombre-help").remove();
                document.querySelector("#username").classList.remove("p-invalid");
            }

            //Comprobamos que el nombre registrado no existe
            fetch('https://mern-stack-tefege.herokuapp.com/api/usuarios')
            .then(response => response.json())
            .then(data => {
                for (const d in data) {
                    if (data[d].username === this.state.username) {
                        if (document.querySelector("#nombre-help") === null) {
                            document.querySelector("#username").classList.add("p-invalid");
                            document.querySelector(".field-nombre").insertAdjacentHTML("beforeend", '<small id="nombre-help" className="p-error">El nombre de usuario ya existe.</small>');
                        }
                }
            }
        })
        return true;
        }
      }

    render() {
        const header = <h3>Introduce tu contraseña</h3>;
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
                    <InputText id="username" name='username' aria-describedby="nombre" onChange={this.handleChange} /><br />
                </div>
                <div className="field-correo">
                    <label htmlFor="correo" className="block">Correo electrónico</label><br />
                    <InputText id="correo" name='correo' aria-describedby="correo" onChange={this.handleChange} /><br />
                </div>
                <div className='field-contrasena'>
                    <label htmlFor="contrasena" className="block">Contraseña</label><br />
                    <Password id='contrasena' name='contrasena' onChange={this.handleChange} header={header} footer={footer} /> <br />
                </div>
                <div className='field-edad'>
                <Dropdown name='edad' value={this.state.edad} options={edades} onChange={this.handleChange} placeholder="Edad" />
                </div>
                <h3>¿Has cursado estudios relacionados con el arte?</h3>
                <div className="field-radiobutton">
                    <RadioButton inputId="cursadosi" name="curso" value="Si" onChange={(e) => this.setState({curso: e.value})} checked={this.state.curso === 'Si'} />
                    <label htmlFor="cursadosi">Si</label>
                    <RadioButton inputId="cursadono" name="curso" value="No" onChange={(e) => this.setState({curso: e.value})} checked={this.state.curso === 'No'} />
                    <label htmlFor="cursadono">No</label>
                </div>
                    <Button className='prime-button' label="Registrarse" />
                </form>
            </div>
        )
    }
}

   const  edades = [
    '15-20',
    '20-25',
    '25-30',
    '30-40',
    '40-50',
    '50-60',
    '> 60',
];

export default RegisterForm;