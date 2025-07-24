import React from 'react'


const Square = ({onSquareClick, value}) => {

    let screan;
    if (!value){
        screan = "_";
    } else {
        screan =  value;
    }
    return (
        <button className='square' onClick={onSquareClick}> 
        {screan} 
        </button>
    )

}


export default Square