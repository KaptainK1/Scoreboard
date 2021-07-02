import React from 'react';

//use classes when managing State
//use functions when a component is only receiving input through props and rendering UI
class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            score: 0
        };
        //bind function to individual objects
        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);
    }

    incrementScore() {
        this.setState({
            score: this.state.score +1
        });
    }

    decrementScore() {
        this.setState({
            score: this.state.score -1
        });
    }

    render (){
        return(
            <div className='counter'>
                <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
                {/*//"this" refer to the Component instance*/}
                <span className='counter-score'>{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

export default Counter;