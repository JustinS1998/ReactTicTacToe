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
        this.setState({mark: 'x'});
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
                    <Square num='0' />
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