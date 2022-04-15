import HamburguerItem from "../hamburguer-menu-item/hamburguer-menu-item.jsx";

const HamburguerBack = () => {
    return (
        <div className="hamburguer-menu-background hidden-visibility">
            <HamburguerItem name={"Home"} link={"/"} />
            <HamburguerItem name={"Catálogo"} link={"/catalogo"} />
            <HamburguerItem name={"Contacta"} link={"/contacta"} />
        </div>
      );
}

export default HamburguerBack;