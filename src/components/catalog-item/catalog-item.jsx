import React, { useState, useEffect } from 'react'
import { Image } from 'primereact/image';
import './css/catalog-item.css';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';

const CatalogItem = props => {
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        if (sessionStorage.getItem("ID") !== null) {
            setRating(rate);
            //TODO Añadir un alert que avise de que el voto ha sido emitido
        } else {
            setRating(0);
            alert("Debes estar registrado para poder votar");
        }
        // other logic
      }

      useEffect(() => {
        let object = {
            valoracion:{element: props.id, rating: rating}
        }
        console.log(JSON.stringify(object));

        //TRESCV
        /*
        fetch('https://mern-stack-tefege.herokuapp.com/api/usuarios', {
                method: 'PUT',
                body: JSON.stringify(object),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
            */

        console.log(object);
     }, [rating]);

    return (
        
        <div className="catalog-item" id={props.id}>
            <div className="catalog-item-text">
            <Link to='/element'>
                <h1>{props.title}</h1>
                </Link>
                <p>{props.description}</p>
                <div className='rating-stars'>
                <Rating onClick={handleRating} ratingValue={rating} />
            </div>
            </div>
            <div className='catalog-item-img'>
                <Image src= {props.image} template="Preview Content" alt="Producto" preview={false} width={500} />
            </div>
        </div>
      );
}

export default CatalogItem;