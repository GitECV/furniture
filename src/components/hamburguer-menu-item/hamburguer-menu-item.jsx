import { Link } from "react-router-dom";
import "./css/hamburguer-menu-item.css"

const HamburguerItem = props => {
    return (
        <div className="hamburguer-menu-item">
            <h1><Link to={props.link}>{props.name}</Link></h1>
        </div>
      );
}

export default HamburguerItem;