import React from 'react';
import Header from './Header.jsx';
import Player from './Player.jsx';
import players from '../init/players';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playerList: players
        }
        this.handleRemovePlayer= this.handleRemovePlayer.bind(this);
        this.handleScoreChanged=this.handleScoreChanged.bind(this);
    }

    //this function will be called at the child Player component level
    handleRemovePlayer(id){
        this.setState( prevState => {
            return {
                playerList: prevState.playerList.filter( p => p.id !== id)
            }
        });
    }

    //use callback function with set state for more accuracy --recommended
     handleScoreChanged(index, delta) {

        this.setState( prevState => {

            console.log("index: " + index, "delta: " + delta);
            // New 'players' array – a copy of the previous `players` state
            const updatedPlayers = [ ...prevState.playerList ];
            // A copy of the player object we're targeting
            const updatedPlayer = { ...updatedPlayers[index] };

            // Update the target player's score
            updatedPlayer.score += delta;
            // Update the 'players' array with the target player's latest score
            updatedPlayers[index] = updatedPlayer;

            // Update the `players` state without mutating the original state
            return {
                playerList: updatedPlayers
            };
        });

    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.state.playerList.length}/>
                {this.state.playerList.map( (p, index) =>
                    <Player key={p.id.toString()}
                            score={p.score}
                            name={p.name}
                            id={p.id}
                            index={index}
                            //pass the function handleRemovePlayer down to the counter component
                            removePlayer={this.handleRemovePlayer}
                            //pass the function handleScoreChanged down to the counter component
                            changeScore={this.handleScoreChanged}
                    />)}
            </div>
        );
    }
}

export default App;