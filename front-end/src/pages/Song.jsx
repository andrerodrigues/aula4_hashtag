import React from 'react';
import Player from '../components/Player';
import { Link, useParams} from 'react-router-dom';
import { songsArray } from '../database/sounds';
import { artistArray } from '../database/artists';

const Song = () => {
    const {id} = useParams();
    const {image, name, duration, artist, audio} = songsArray.filter((currentSongObj) => 
        currentSongObj.id === Number(id))[0];
   
    const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.name === artist)[0];

    const songsArrayFromArtist = songsArray.filter((currentSoungObj) => currentSoungObj.artist === artist)
    
    //console.log(songsArrayFromArtist);

    const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1));

    const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length - 1));

    const randomidFromArtist = songsArrayFromArtist[randomIndex].id;

    const randomid2FromArtist = songsArrayFromArtist[randomIndex2].id

    return (
            <div className="song">
                <div className="song__container">
                    <div className="song__image-container">
                       <img src={image} alt={`Imagem do Artista ${name}`} />
                    </div>
                </div>
                
                <div className="song__bar">
                    <Link to={`/artist/${artistObj.id}`} className='song__artist-image'>
                        <img
                        width={75}
                        height={75}
                        src={artistObj.image} alt={`Imagem do Artista ${artist}`} />
                    </Link>

                    <Player 
                      duration={duration} 
                      randomidFromArtist = {randomidFromArtist} 
                      randomid2FromArtist={randomid2FromArtist}
                      audio={audio}
                    />

                    <div>
                        <p className='song__name'>{name}</p>
                        <p>{artist}</p>
                    </div>
                </div>
            </div>
          );
};

export default Song;