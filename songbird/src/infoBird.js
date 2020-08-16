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
                        <h5 className="name info-name">{birds.name}</h5>
                        <h6 className="name">{birds.species}</h6>
                        <div className=''>
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
                    </ul> 
                </div>
                <div>{ birds.description }</div>
            </div>
    )  
}

export default InfoBird;