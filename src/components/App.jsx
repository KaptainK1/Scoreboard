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
    }

    //this function will be called at the child Player componenet level
    handleRemovePlayer(id){
        this.setState( prevState => {
            return {
                playerList: prevState.playerList.filter( p => p.id !== id)
            }
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.state.playerList.length}/>
                {this.state.playerList.map( p =>
                    <Player key={p.id.toString()}
                            name={p.name}
                            id={p.id}
                            removePlayer={this.handleRemovePlayer}
                    />)}
            </div>
        );
    }
}

export default App;