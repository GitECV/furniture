import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
import TypewriterText from '../typewrite-text/typewrite-text.jsx';
import "primereact/resources/themes/luna-green/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import './css/home-content.css';

const HomeContainer = () => {
    return (
        <div className="home-content-container">
            <TypewriterText />
            <div className="btn-see-catalog">
                <Link to='/catalogo'>
                    <Button label="Puedes ver nuestro catálogo" className="p-button-rounded" id="btn-catalog" />
                </Link>
            </div>
        </div>
      );
}

export default HomeContainer;