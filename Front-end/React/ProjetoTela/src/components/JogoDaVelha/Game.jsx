import React from 'react'
import useState from 'react'
import Board from './Board'

const Game = () => {

    //Setup inicial
    const [history, setHistory] = useState([Array(9).fill(null)]) // [[ null, null, null, null, null, null, null, null, null ]]
    const [currentMove, setCurrentMove] = useState(0); //CurrentMove = 0
    

    const xIsNext = currentMove % 2 === 0; //boolean xIsNext = True
    const currentSquares = history[currentMove]; //[[ null, null, null, null, null, null, null, null, null ]]


    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length);
    }

    function jumpTo (nextMove){
        setCurrentMove(nextMove);
    }


    moves = history.map((squares, move)=>{
        let description;
        if (move > 0){
            description = "Go to move #"+ move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={jumpTo(move)}> {description} </button>
            </li>
        )
    });

    return (

        <div className='Game'>

            <div className='game-board'> 

                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>

            </div>

        </div>


    );




}

