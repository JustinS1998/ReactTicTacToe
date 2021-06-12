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
        if (this.state.mark === '' && this.props.winner==='') {
            this.setState({ mark: this.props.turn });
            this.props.toggleTurn();
            this.props.updateSquares(this.props.num);
            this.props.calculateWinner();
        }
    }
    render() {
        return (
            <button
                className='square'
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
            toggleTurn={this.props.toggleTurn}
            updateSquares={this.props.updateSquares}
            calculateWinner={this.props.calculateWinner}
            winner={this.props.winner} />
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
            squares: Array(9).fill(''),
            winner: ''
        };
        this.toggleTurn = this.toggleTurn.bind(this);
        this.updateSquares = this.updateSquares.bind(this);
        this.calculateWinner = this.calculateWinner.bind(this);
    }
    toggleTurn() {
        this.setState(this.state.turn === 'x' ? { turn: 'o' } : { turn: 'x' });
    }
    updateSquares(num) {
        const myArr = this.state.squares;
        myArr[num] = this.state.turn;
        this.setState({squares: myArr})
        console.log(this.state.squares);
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
                //return squares[a];
                this.setState({ winner: squares[a] });
                return;
            }
        }
        //return '';
        this.setState({ winner: '' });
    }
    render() {
        return (
            <>
                <h1>Turn: {this.state.turn}</h1>
                <h2>Winner: {this.state.winner}</h2>
                <Board 
                    turn={this.state.turn} 
                    toggleTurn={this.toggleTurn}
                    updateSquares={this.updateSquares}
                    calculateWinner={this.calculateWinner}
                    winner={this.state.winner} />
            </>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));