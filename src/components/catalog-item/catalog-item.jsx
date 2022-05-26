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
            console.log(props.id, rate);
            const id = sessionStorage.getItem("ID");
            //TODO Añadir un alert que avise de que el voto ha sido emitido
             //TRESCV
             if(props.id == 1) {
                fetch(`http://localhost:4000/api/usuarios/${id}`, {
                    method: 'PUT', // or 'PUT'
                    body: JSON.stringify({valoracion1: rate}),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => alert("Gracias por emitir una votación."));
             } else {
                fetch(`http://localhost:4000/api/usuarios/${id}`, {
                    method: 'PUT', // or 'PUT'
                    body: JSON.stringify({valoracion2: rate}),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => alert("Gracias por emitir una votación."));
             }
        } else {
            setRating(0);
            alert("Debes estar registrado para poder votar");
        }
        // other logic
      }

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