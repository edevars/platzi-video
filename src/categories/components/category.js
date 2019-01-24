import React from 'react'
import Playlist from '../../playlist/components/playlist'
import './category.css'

function Category(props){
    return(
        <div className='Category'>
            <h5 className='Category-description'>{props.description}</h5>
            <h2 className='Category-title'>{props.title}</h2>
            <Playlist
                handleOpenModal={props.handleOpenModal} 
                playlist={props.playlist}
            />
        </div>
    )
}

export default Category;