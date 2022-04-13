import HomeContainer from './components/home-content/home-content.jsx';
import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx'

function Home() {
  return (<div className="App">
    <NavBarContainer text={"furniture."}/>
    <HomeContainer />
  </div>);
}

export default Home;