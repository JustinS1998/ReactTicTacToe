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
            this.setState({mark: this.props.turn});
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