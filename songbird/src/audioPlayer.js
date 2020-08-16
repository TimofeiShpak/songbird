import React, { useRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import imgBird from './image/bird.jpg';

function Player({birds, isPlayed}) {
    const playerRef = useRef(null);
    
    useEffect(() => playerRef.current.audio.current.pause(), [isPlayed])

    return (
        <div className="navbar">
            <div className='img-wrapper'>
                {isPlayed === false ? (
                    <img src={birds.image} alt={`изображение птицы ${birds.name}`} className='game-img'/>
                ) : (
                    <img src={imgBird} alt={'bird'} className='game-img'/>
                )} 
                <div className='player-wrapper'>
                    <h2 className="name main-name">{isPlayed === false ? birds.name : '******'}</h2>
                    <div className='audio-wrapper'>
                        <AudioPlayer
                            showJumpControls={false}
                            autoPlayAfterSrcChange={false}
                            customAdditionalControls={[]}
                            layout='horizontal-reverse'
                            src={birds.audio}
                            ref={playerRef}
                        />
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default Player;