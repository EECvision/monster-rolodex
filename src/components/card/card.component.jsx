import React from 'react';

import './card.styles.css';

export const Card =({monster})=> {
    const {name, email, id} = monster;
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}