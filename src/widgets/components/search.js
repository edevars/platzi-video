import React from 'react';
import './search.css'

function Search(props){

    return(
        <div>
            <form 
            className='Search'
            onSubmit={props.handleSubmit}
            >
            <input 
                ref={props.setRef}
                type="text"
                placeholder='Busca tu video favorito' 
                className='Search-input'
                name='search'
                onChange={props.handleChange}
                value={props.value}
            />
            </form>
        </div>
    )
}

export default Search