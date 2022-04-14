import CatalogItem from '../catalog-item/catalog-item.jsx';
import { Link } from "react-router-dom";

const CatalogContent = () => {
    return (
        <div className="catalog-container">
            <CatalogItem />
        </div>
      );
}

export default CatalogContent;