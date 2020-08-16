import React from 'react';

function NextLevel({level, setLevel, setPlayed, isPlayed, setEndGame}) {
    return (
        <div className='next-level'>
            <button 
                className={isPlayed===true ? 'button-next-level' : 'button-next-level active-button'} 
                onClick={() => {
                    if (!isPlayed) {
                        const valueLevel = level + 1;
                        setLevel(valueLevel); 
                        setPlayed(true);
                        if (valueLevel > 5) {
                            setLevel(0);
                            setEndGame(true)
                        }
                    }
                }}>
                Next level
            </button>
        </div>
    );
}

export default NextLevel;