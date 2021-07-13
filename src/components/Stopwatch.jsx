import React from 'react';


class Stopwatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            runningTime: 0
        }
    }


    render() {
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">0</span>
                <button>Start</button>
                <button>Reset</button>
            </div>
        );

    }


}

export default Stopwatch;