import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../database/artists";
import { songsArray } from "../database/sounds";

const Artist = () => {
    const {id} = useParams();
    
    const {name, banner} = artistArray.filter((currentArtistObj) => currentArtistObj.id === Number(id))[0];
    const songsArrayFromArtist = songsArray.filter((currentSoungObj) => currentSoungObj.artist === name)
    const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1));
    const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;

   // console.log(randomIdFromArtist);

    return <div className="artist">
        <div className="artist__header" style={{backgroundImage:`linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`}}>
        
        <h2 className="artist_title">{name}</h2>
        </div>

        <div className="artist__body">
            <h2>Populares</h2>
            
            <SongList songsArray={songsArrayFromArtist}/>
        </div>

        <Link to={`/song/${randomIdFromArtist}`}>
            <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
        </Link>
    </div>
}

export default Artist;