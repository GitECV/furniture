import Placeholder from '../../images/aguja.png';
import CatalogItem from '../catalog-item/catalog-item.jsx';

const CatalogContent = () => {
    return (
        <div className="catalog-container">
            <CatalogItem
             title={"Cubo de madera"} 
             description={"El cubo de madera está diseñado con ..."}
             image={Placeholder}
             id={"1"}
             />
             <CatalogItem
             title={"Silla de madera"} 
             description={"la silla de madera está diseñada con ..."}
             image={Placeholder}
             id={"2"}
             />
        </div>
      );
}

export default CatalogContent;