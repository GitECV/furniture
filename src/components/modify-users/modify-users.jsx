import React, { Component } from 'react';

class ModifyUsers extends Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            apellidos: '',
            username: '',
            contrasena:'',
            type: "USER",
        }
        this.handleChange = this.handleChange.bind(this);
        this.addUsuario = this.addUsuario.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value

        })
        console.log(this.state);
    }
    
    addUsuario(e){
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

        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addUsuario}>
                    <label>Nombre</label>
                    <input name='nombre' onChange={this.handleChange} type="text"></input><br/>
                    <label>Apellidos</label>
                    <input name='apellidos' onChange={this.handleChange} type="textarea"></input><br/>
                    <label>Username</label>
                    <input name='username' onChange={this.handleChange} type="textarea"></input><br/>
                    <label>ContraseĂ±a</label>
                    <input name='contrasena' onChange={this.handleChange} type="textarea"></input><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ModifyUsers;