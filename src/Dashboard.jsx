import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx';
import React, { Component, setState } from 'react';
import DashContainer from './components/dashboard-container/dashboard-container.jsx';

class Dashboard extends Component {

    constructor(props) {
        super();
        this.state = {
            logged: false,
            username: "",
            contrasena: "",
          }
    }

    render() {
        return (
            <div>
                <NavBarContainer text={"dashboard."} container={".home-content-container"}/>
                <DashContainer />
            </div>
        )
    }
}

export default Dashboard;