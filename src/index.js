import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return <button className='square'></button>
    }

}

class Board extends React.Component {
    render() {
        return (
            <div class='board'>
                <div class='row'>
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div class='row'>
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div class='row'>
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <>
                <h1>Tic Tac Toe</h1>
                <Board />
            </>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));