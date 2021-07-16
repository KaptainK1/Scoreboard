import React from 'react';


class Stopwatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elapsedTime: 0,
            isRunning: false,
            previousTime: 0
        }
        this.handleStopwatch=this.handleStopwatch.bind(this);
        this.tick=this.tick.bind(this);
        this.handleReset=this.handleReset.bind(this);
    }

    handleStopwatch(){
        this.setState( prevState => ({
           isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning){
            this.setState({previousTime: Date.now()});
            console.log(this.state.previousTime);
        }
    }

    componentDidMount() {
        //setup to call the tick function every 100 milliseconds
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        //clears the running update function that we created in componentDidMount when the component is unmounted
        //from the dom. This is needed to prevent performance and memory  leaks.
        clearInterval(this.intervalID);
    }

    tick(){
        if (this.state.isRunning){
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }));
        }
    }

    handleReset(){
        this.setState({
            elapsedTime:0
        })
    }


    render() {

        const seconds = Math.floor(this.state.elapsedTime / 1000);

        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{ seconds }</span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.handleReset}>
                    Reset
                </button>
            </div>
        );

    }
}


export default Stopwatch;