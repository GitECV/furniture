import React from "react";
import Placeholder from '../../images/aguja.png';
import CatalogItem from '../catalog-item/catalog-item.jsx';

const CatalogContent = () => {
    return (
        <div className="catalog-container">
            <CatalogItem
             title={"Mesilla"} 
             description={"Esta mesilla es completamente editable y se compone de dos materiales distintos, madera y metal."}
             image={'https://i.imgur.com/UCzxE0A.png'}
             id={"1"}
             />
             <CatalogItem
             title={"Silla"} 
             description={"La silla está elaborada con dos materiales principales, como son la madera y la tela"}
             image={'https://cdn.polyhaven.com/asset_img/primary/ArmChair_01.png?height=780'}
             id={"2"}
             />
        </div>
      );
}

export default CatalogContent;