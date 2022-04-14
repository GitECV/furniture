import THREEDContainer from './components/3d-element-container/3d-element-container.jsx';
import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx'

function Element() {
  return (
  <div className="App">
    <NavBarContainer text={"visor."}/>
    <THREEDContainer />
  </div>);
}

export default Element;