import React from 'react'
import Square from './Square';


const Board = ({xIsNext, squares, onPlay}) => {

    function handleClick(i) {

      if (calculateWinner(squares) || squares[i]){
        return;
      }

      const nextSquares = squares.slice();

      if (xIsNext){
        nextSquares[i] = 'X'
        
      } else {

        nextSquares[i] = 'O'

      }

      onPlay(nextSquares); 

    }

    const winner = calculateWinner(squares);

    let status;

    if (winner){

    status = 'The winner is '+winner;

    } else {

      status = 'The next player is '+ (xIsNext ? 'X' : 'O');

    }

    return (

    <>
      <div className='status'> {status}</div>

      <div className='Board-row'>
        <Square onSquareClick={() => handleClick(0)} value={squares[0]}/>
        <Square onSquareClick={() => handleClick(1)} value={squares[1]}/>
        <Square onSquareClick={() => handleClick(2)} value={squares[2]}/>
        
      </div>

      <div className='Board-row'>

        <Square onSquareClick={() => handleClick(3)} value={squares[3]}/>
        <Square onSquareClick={() => handleClick(4)} value={squares[4]}/>
        <Square onSquareClick={() => handleClick(5)} value={squares[5]}/>
        
      </div>

      <div className='Board-row'>

        <Square onSquareClick={() => handleClick(6)} value={squares[6]}/>
        <Square onSquareClick={() => handleClick(7)} value={squares[7]}/>
        <Square onSquareClick={() => handleClick(8)} value={squares[8]}/>

      </div>
    </>

    )

}

function calculateWinner (squares){

// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]

//lines significa todas as vitórias possíveis, para saber se um jogador se enquadra.
    const lines = [
    [0, 1, 2],// linha de cima
    [3, 4, 5],// linha do meio
    [6, 7, 8],// linha de baixo
    [0, 3, 6],// coluna da esquerda
    [1, 4, 7],// coluna do meio
    [2, 5, 8],// coluna da direita
    [0, 4, 8],// diagonal principal
    [2, 4, 6],// diagonal secundária 
  ];

   for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;

}

export default Board