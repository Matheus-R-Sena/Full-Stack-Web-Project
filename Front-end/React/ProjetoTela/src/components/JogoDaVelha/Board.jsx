import React from 'react'
import Square from './Square';


const Board = ({xIsnext, squares, onPlay}) => {

  
    function handleClick(i) {

      if (calculateWinner(squares) || squares[i]){
        return;
      }
      const nextSquares =  squares.slice();



    }



    const winner = calculateWinner(squares);
    let status;
    if (winner){
    status = 'The winner is '+winner;
    } else {
      status = 'The next player is '+ (xIsnext ? 'X' : 'O');
    }

    return (

    <>
      <div className='status'> {status}</div>

      <div className='Board-row'>
        <Square />
        <Square/>
        <Square/>
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




    const [a, b, c] = [0, 1, 2];