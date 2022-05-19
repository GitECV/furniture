import React, { Component } from 'react';
import axios from 'axios';

class ModifyUsers extends Component {

    constructor() {
        super();
        this.state = {
            _id: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addUsuario = this.addUsuario.bind(this);
    }

    handleChange(e) {
        const { value } = e.target;
        this.setState({
            _id: value,
        })
        console.log(this.state);
    }
    
    addUsuario(e){
        let stateid = this.state._id;

        //TODO - Comprobar que existe el ID introducido
        axios.get('https://mern-stack-tefege.herokuapp.com/api/usuarios')
                .then(res => {console.log(res)})
        /*
        fetch(`https://mern-stack-tefege.herokuapp.com/api/usuarios/${stateid}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data)
            
        )
        .catch(err => console.error(err));
        */

        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addUsuario}>
                    <label>ID</label>
                    <input name='_id' onChange={this.handleChange} type="text"></input><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ModifyUsers;