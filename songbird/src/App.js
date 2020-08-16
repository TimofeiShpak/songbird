import 'bootstrap-4-react';
import './style.css';
import React, { useState, useEffect } from 'react';
import Header from './header';
import AudioPlayer from './audioPlayer';
import Answers from './answers';
import NextLevel from './nextLevelButton';
import collectionBirds from './collectionBirds';
import GameOver from './gameOver';

function random() {
  let numbers = [];
  for (let i = 0; i < 6; i++) {
    let number = Math.round(Math.random() * 5);
    while(numbers.includes(number)) {
      number = Math.round(Math.random() * 5);
    }
    numbers.push(number);
  }
  return numbers;
}

function App() {
  const [fullScore, setFullScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [isPlayed, setPlayed] = useState(true);
  const [randomNumbers, setRandomNumbers] = useState(random());
  const [birds, setBirds] = useState(collectionBirds[level]);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
      setBirds(collectionBirds[level]);
  }, [level]);

  useEffect(() => {
    console.log('Правильный вариант ответа', birds[randomNumbers[level]].name)
  },[randomNumbers, birds]);
  
  return (
    <div className="app-wrapper">
      <Header level={level} score={fullScore}/>
      {endGame === false ? (
        <>
          <AudioPlayer 
            birds={birds[randomNumbers[level]]} 
            isPlayed={isPlayed}
          />
          <Answers
            fullScore={fullScore}
            setFullScore={setFullScore} 
            birds={birds} 
            randomNumber={randomNumbers[level]} 
            isPlayed={isPlayed}
            setPlayed={setPlayed}
            level={level}
          />
          <NextLevel 
            level={level}
            setLevel={setLevel}
            setPlayed={setPlayed}
            isPlayed={isPlayed}
            setEndGame={setEndGame}
          />
        </>
      ) : (
        <GameOver 
          setEndGame={setEndGame} 
          setFullScore={setFullScore}
          fullScore={fullScore} 
          random={random}  
          setRandomNumbers={setRandomNumbers}
        />
      )}
    </div>
  );
}

export default App;
