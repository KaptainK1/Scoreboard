import React from 'react';
import PropTypes from 'prop-types';

//use classes when managing State
//use functions when a component is only receiving input through props and rendering UI
function Counter({index, changeScore, score}) {

    // constructor(props){
    //     super(props);
        ////bind function to individual objects
    //     this.incrementScore = this.incrementScore.bind(this);
    //     this.decrementScore = this.decrementScore.bind(this);
    // }

    //use callback function with set state for more accuracy --recommended
        //implemented in app component now
    // incrementScore() {
    //     this.setState( prevState => {
    //         return {
    //             score: prevState.score + 1
    //         };
    //     });
    // }
    //
    // decrementScore() {
    //     this.setState( prevState => {
    //         return {
    //             score: prevState.score -1
    //         };
    //     });
    // }

        // let index = props.index;

        return(
            <div className='counter'>
                {/*<button className="counter-action decrement" onClick={ this.decrementScore }> - </button>*/}
                <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
                {/*//"this" refer to the Component instance*/}
                <span className='counter-score'>{score}</span>
                {/*<button className="counter-action increment" onClick={this.incrementScore}> + </button>*/}
                <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
            </div>
        );
}

Counter.propTypes = {
        index: PropTypes.number,
        score: PropTypes.number,
        changeScore: PropTypes.func
}

export default Counter;