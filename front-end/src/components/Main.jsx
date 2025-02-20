import React from 'react'
import ItemList from './ItemList';
import { artistArray } from '../database/artists';
import { songsArray } from '../database/sounds';

const Main = ({type}) => {
    return (
        <div className='main'>
            {console.log(`${type}`)}
            {type === "artists" || type === undefined ? (<ItemList 
             title="Artistas" 
             items={5} 
             itemsArray = {artistArray} 
             path="/artists"
             idPath="/artist" 
             />) :
                (<></>)
             }

            {type === 'songs' || type === undefined ? (<ItemList 
            title="Músicas" 
            items={10} 
            itemsArray = {songsArray} 
            path="/songs"
            idPath="/song" 
            />) :(<></>)}
           
        </div>
    )
}

export default Main