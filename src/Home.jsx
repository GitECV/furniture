import HomeContainer from './components/home-content/home-content.jsx';
import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx';
import HamburguerBack from "./components/hamburguer-menu-background/hamburguer-menu-background.jsx";

function Home() {
  return (<div className="App">
    <NavBarContainer text={"furniture."} container={".home-content-container"}/>
    <HomeContainer />
    <HamburguerBack />
  </div>);
}

export default Home;