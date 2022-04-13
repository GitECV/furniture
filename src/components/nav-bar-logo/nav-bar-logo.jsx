import './css/nav-bar-logo.css';


const NavBarLogo = props => {
    return (
        <div className={props.clsName}>
            <img src={props.img} alt={props.description} />
        </div>
      );
}

export default NavBarLogo;