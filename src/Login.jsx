import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx';
import React, { Component, setState } from 'react';

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            logged: false,
            username: "",
            contrasena: "",
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
        fetch('https://mern-stack-tefege.herokuapp.com/api/usuarios')
        .then(response => response.json())
        .then(data => {
            for (const d in data) {
                if (data[d].username === this.state.username && data[d].contrasena === this.state.contrasena){
                    this.setState({logged: true}, () => {console.log(this.state.username, this.state.contrasena)});
                    break;
                }
            }
        });

        e.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <NavBarContainer text={"Login."} container={".home-content-container"}/>
            <div>
                <form onSubmit={this.addUsuario}>
                    <label>Username</label>
                    <input name='username' onChange={this.handleChange} type="textarea"></input><br/>
                    <label>ContraseĂ±a</label>
                    <input name='contrasena' onChange={this.handleChange} type="textarea"></input><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

export default App;