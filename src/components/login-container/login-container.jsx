import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import md5 from 'md5';

import './css/login-container.css';


const LoginContainer = props => {
    const [username, setUsername] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [logFailed, setLogFailed] = useState(null);

    const logUsuario = (e) =>{
        //TRESCV
        fetch('https://mern-stack-tefege.herokuapp.com/api/usuarios')
        .then(response => response.json())
        .then(data => {
            for (const d in data) {
                if (data[d].username === username.toString() && data[d].contrasena.toString() === md5(contrasena.toString())){
                    //Metemos el ID del usuario logueado en un localstorage
                    sessionStorage.setItem('ID', data[d]._id);
                    setLogFailed(null);
                    setUsername("");
                    setContrasena("");
                    alert("Te has loggeado correctamente, puedes comenzar a votar");
                    //Añadimos un session storage con el tipo de usuario
                    sessionStorage.setItem('USER', data[d].type);
                    window.location.replace("/");
                    break;
            } else {
                setLogFailed(<div>
                    <h3 className='error-log'>El usuario o la contraseña son erroneos.</h3>
                </div>);
            }
        }
    });

        e.preventDefault();
    }

    return (
        <div className="login-container">
            {logFailed}
            <form onSubmit={logUsuario}>
                <label htmlFor="name">Nombre de usuario</label><br/>
                <InputText name='username' className='prime-input' value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor="password">Contraseña</label><br />
                <Password name='contrasena' className='prime-input' value={contrasena} onChange={(e) => setContrasena(e.target.value)} feedback={false}  />
                <br />
                <Button type='submit' id='prime-button' label="Save" />
            </form>
            <Registrate />
        </div>
      );
}

const Registrate = () => {
    return (
        <h3>¿No tienes cuenta? Puedes registrarte <a href='/register'>aquí.</a></h3>
    );
}

export default LoginContainer;