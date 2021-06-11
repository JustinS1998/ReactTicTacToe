import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mark: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if (this.state.mark === '') {
            this.setState({ mark: this.props.turn });
            this.props.buttonClick();
        }
    }
    render() {
        return (
            <button
                className='square'
                num={this.props.num}
                onClick={this.handleClick}
            >{this.state.mark}</button>
        )
    }
}

class Board extends React.Component {
    renderButton(i) {
        return <Square
            num={i}
            turn={this.props.turn}
            buttonClick={this.props.buttonClick} />
    }
    render() {
        return (
            <div className='board'>
                <div className='row'>
                    {this.renderButton(0)}
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                </div>
                <div className='row'>
                    {this.renderButton(3)}
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                </div>
                <div className='row'>
                    {this.renderButton(6)}
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 'x',
            squares: Array(9).fill('')
        };
        this.buttonClick = this.buttonClick.bind(this);
    }
    toggleTurn() {
        //console.log('Toggling');
        this.setState(this.state.turn === 'x' ? { turn: 'o' } : { turn: 'x' });
    }
    updateSquares() {
        console.log(this.state.squares);
    }
    buttonClick () {
        this.toggleTurn();
        this.updateSquares();
    }
    calculateWinner() {
        const squares = this.state.squares;
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return '';
    }
    render() {
        return (
            <>
                <h1>Turn: {this.state.turn}</h1>
                <Board turn={this.state.turn} buttonClick={this.buttonClick} />
            </>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));