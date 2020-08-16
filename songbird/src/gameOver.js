import React, { useEffect } from 'react';
import success from './success.jpg';

function GameOver({setEndGame, setFullScore, fullScore, setRandomNumbers, random, level}) {
    useEffect(() => {
        setRandomNumbers(random());
    },[fullScore]);
    return (
        <div className='game-over'>
            {fullScore !== 30 ? (
            <>
                <h1 className='title-game-over'>Поздравляем!</h1>
                <p className='text-game-over'>
                    Вы прошли викторину и набрали {fullScore} из 30 возможных очков
                </p>
                <button 
                    className='btn-again' 
                    onClick={() => {
                        setFullScore(0);
                        setEndGame(false);
                    }}
                >
                    Попробовать еще раз!
                </button>
            </>) : (
            <>  
                <p className='text-win'>особая награда</p>
                <img src={success} alt={'success'} className='img-success'/>
                <p>Вы успешно ответили на все вопросы без ошибок!</p>
                <p>Игра окончена</p>
            </>
            )
            }
        </div>
    )
}

export default GameOver;