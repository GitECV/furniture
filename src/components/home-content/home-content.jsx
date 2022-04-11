import React, { useState } from "react";
import { Button } from 'primereact/button';
import "primereact/resources/themes/luna-green/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import './css/home-content.css';

const HomeContainer = () => {
    return (
        <div className="home-content-container">
            <div className="btn-see-catalog">
                <Button label="Puedes ver nuestro catálogo" className="p-button-rounded" id="btn-catalog" />
            </div>
        </div>
      );
}

export default HomeContainer;