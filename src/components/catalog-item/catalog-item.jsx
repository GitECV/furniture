import { Image } from 'primereact/image';
import './css/catalog-item.css';
import { Link } from 'react-router-dom';

const CatalogItem = props => {
    return (
        <Link to='/element'>
        <div className="catalog-item">
            <div className="catalog-item-text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className='catalog-item-img'>
                <Image src= {props.image} template="Preview Content" alt="Producto" preview={false} />
            </div>
        </div>
        </Link>
      );
}

export default CatalogItem;