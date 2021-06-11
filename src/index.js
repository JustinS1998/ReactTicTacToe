import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mark: ' '
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(this.props.turn === 'x' ? {mark: 'x'} : {mark: 'o'});
        this.props.buttonClick();
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
    render() {
        return (
            <div className='board'>
                <div className='row'>
                    <Square num='0' turn={this.props.turn} buttonClick={this.props.buttonClick} />
                    <Square num='1' />
                    <Square num='2' />
                </div>
                <div className='row'>
                    <Square num='3' />
                    <Square num='4' />
                    <Square num='5' />
                </div>
                <div className='row'>
                    <Square num='6' />
                    <Square num='7' />
                    <Square num='8' />
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 'x'
        };
        this.toggleTurn = this.toggleTurn.bind(this);
    }
    toggleTurn() {
        console.log('Toggling');
        this.setState(this.state.turn === 'x' ? {turn: 'o'} : {turn: 'x'});
    }
    render() {
        return (
            <>
                <h1>Turn: {this.state.turn}</h1>
                <Board turn={this.state.turn} buttonClick={this.toggleTurn} />
            </>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));