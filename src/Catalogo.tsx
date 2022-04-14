import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx';
import CatalogContent from './components/catalog-content/catalog-content.jsx';

const Catalogo = () => {
    return (
        <div>
        <NavBarContainer text={"catálogo."} />
          <CatalogContent />
        </div>
      );
}

export default Catalogo;