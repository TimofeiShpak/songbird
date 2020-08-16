import React, { useState, useEffect } from 'react';
import correctAudio from './correct.mp3';
import errorAudio from './error.mp3';
import InfoBirds from './infoBird';

function Answer(props) {
    const [className, setClassName] = useState("check-box")
    const {name, randomNumber, index, isPlayed, setPlayed, level,
        score, setScore, fullScore, setFullScore, setClicked, setIndexBird} = {...props}
    
    useEffect(() => {
        setClassName("check-box");
        setClicked(false);
    }, [level, setClicked]);

    function playCorrect() {
        const correct = new Audio(correctAudio);
        correct.play();
    }

    function playError() {
        const error = new Audio(errorAudio);
        error.play();
    }

    function hundleClick() {
        if (isPlayed) {
            changeClassName()
        }
        setIndexBird(index);
    }

    function changeClassName() {
        setClicked(true);
        if (randomNumber === index) {
            setClassName("right check-box");
            setPlayed(false);
            setFullScore(fullScore + 5 - score.filter((value) => value === false).length);
            setScore([]);
            playCorrect();
        } else {
            playError();
            score[index] = false;
            setScore(score);
            setClassName("wrong check-box");
        }
    }
    return (
        <div 
            onClick={() => hundleClick()}
            className='answer-check-box'
        >
            <span className={className}></span>
            <span>{name}</span>
        </div>
    )
}

function Answers({ birds,  randomNumber, isPlayed, setPlayed, level, fullScore, setFullScore }) {
    const [score, setScore] = useState([]);
    const [cliked, setClicked] = useState(false);
    const [indexBird, setIndexBird] = useState(null);
    return (
        <div className="wrapper-full-answer">
            <div className='answers-wrapper change-answer'>
                {birds.map(({name}, index) => 
                    <Answer 
                        fullScore={fullScore}
                        setFullScore={setFullScore} 
                        score={score}
                        setScore={setScore}
                        name={name} 
                        key={index} 
                        index={index} 
                        randomNumber={randomNumber}
                        isPlayed={isPlayed}
                        setPlayed={setPlayed}
                        level={level}
                        setClicked={setClicked}
                        setIndexBird={setIndexBird}
                    />
                )}
            </div>
            <div className='info-bird'>
                {cliked === false ? (
                    <>
                        <div>Послушайте плеер.</div>
                        <div>Выберите птицу из списка</div>
                    </>
                ) : (<InfoBirds birds={birds[indexBird]}/>)
                }
            </div>
        </div>
    );
}

export default Answers;