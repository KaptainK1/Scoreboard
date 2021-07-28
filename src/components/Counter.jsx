import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from "./context";

//use classes when managing State
//use functions when a component is only receiving input through props and rendering UI
function Counter({index, score}) {

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
        return (
                <Consumer>
                        { context => (
                            <div className='counter'>
                                    {/*<button className="counter-action decrement" onClick={ this.decrementScore }> - </button>*/}
                                    <button className="counter-action decrement" onClick={() => context.actions.changeScore(index, -1)}> - </button>
                                    {/*//"this" refer to the Component instance*/}
                                    <span className='counter-score'>{score}</span>
                                    {/*<button className="counter-action increment" onClick={this.incrementScore}> + </button>*/}
                                    <button className="counter-action increment" onClick={() => context.actions.changeScore(index, 1)}> + </button>
                            </div>
                        )}
                </Consumer>
        );
}

Counter.propTypes = {
        index: PropTypes.number,
        score: PropTypes.number
}

export default Counter;