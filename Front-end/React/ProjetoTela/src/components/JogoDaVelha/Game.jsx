import React from 'react'
import { useState } from 'react'
import Board from './Board'

const Game = () => {

    //Setup inicial
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentMove, setCurrentMove] = useState(0); //CurrentMove = 0 
    const xIsNext = currentMove % 2 === 0; //boolean xIsNext = True
   
    function handlePlay(squares){
     
        setCurrentMove(currentMove + 1);
        setSquares(squares);

    }

    return (

        <div className='Game'>

            <div className='game-board'> 

                <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay}></Board>

            </div>

        </div>


    );

}

export default Game

