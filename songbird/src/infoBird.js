import React, { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';

function InfoBird({birds}) {
    useEffect(() => {
        const btn = document.querySelectorAll('.rhap_play-pause-button')[1];
        if(btn.getAttribute('aria-label') === 'Pause') {
            btn.click();
            btn.click();
        }
    }, [birds]);
    return (
            <div className='bird-content'>
                <div className='basic-content'>
                    <img src={birds.image} alt={`изображение птицы ${birds.name}`} className='game-img'/>
                    <ul className='names-bird'>   
                        <h4 className="name">{birds.name}</h4>
                        <h6 className="name">{birds.species}</h6>
                    </ul> 
                </div>
                <div className='player-wrapper player-info'>
                            <AudioPlayer
                                showJumpControls={false}
                                autoPlayAfterSrcChange={false}
                                customAdditionalControls={[]}
                                layout='horizontal-reverse'
                                src={birds.audio}
                                defaultCurrentTime=''
                                defaultDuration=''
                            />
                        </div>
            </div>
    )  
}

export default InfoBird;