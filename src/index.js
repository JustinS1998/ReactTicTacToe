import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square () {
    return <button 
    className='square'>a</button>
}

function Board () {
    const renderSquare = () => {
        return <Square />;
    }
    return (
        <div class='board'>
            {renderSquare()}
        </div>
    );
}

function Game () {
    return (
        <>
            <h1>Hello world</h1>
            <Board />
        </>
    );
}

ReactDOM.render(<Game />, document.getElementById('root'));