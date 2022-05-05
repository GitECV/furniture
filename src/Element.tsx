import THREEDContainer from './components/3d-element-container/3d-element-container.jsx';
import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx'
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useDepthBuffer } from '@react-three/drei';

function Element() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
  <div className="App">
    <NavBarContainer text={"visor."}/>
    <THREEDContainer />
  </div>);
}

export default Element;