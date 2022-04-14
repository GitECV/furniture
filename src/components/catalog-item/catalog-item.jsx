import Placeholder from '../../images/aguja.png';
import { Image } from 'primereact/image';
import './css/catalog-item.css';
import { Link } from 'react-router-dom';

const CatalogItem = () => {
    return (
        <Link to='/element'>
        <div className="catalog-item">
            <div className="catalog-item-text">
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna ac nisi ornare placerat. Pellentesque egestas interdum augue, a pharetra lorem sollicitudin vel. Mauris sit amet purus aliquam, imperdiet erat id, commodo mauris. Nunc eu eros nulla.</p>
            </div>
            <div className='catalog-item-img'>
                <Image src= {Placeholder} template="Preview Content" alt="Image Text" preview={false} />
            </div>
        </div>
        </Link>
      );
}

export default CatalogItem;