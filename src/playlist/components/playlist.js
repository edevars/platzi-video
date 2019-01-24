import React from 'react';
import Media from './media.js'
import './playlist.css'

function Playlist(props){
    return(
        <div className="playlist">
            {
                props.playlist.map((item) =>{
                    return <Media 
                    {...item} 
                    key={item.id} 
                    handleClick={props.handleOpenModal}
                    />
                })
            }
        </div>
    )
}

export default Playlist