import React from 'react';

import './search-box.styles.css';

export const SearchBox =({onChange,placeholder})=>{
    return(
        <div >
            <input
                className='search-box'
                type='search' 
                placeholder={placeholder} 
                onChange={onChange}
            />
        </div>
    )
}