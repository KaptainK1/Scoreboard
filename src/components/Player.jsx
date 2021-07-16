import React from 'react';
import Counter from './Counter.jsx';

//use PureComponent to help optimize the re-rending or unnecessary components
class Player extends React.PureComponent {

    render() {
        const { name, id, score, index, removePlayer, changeScore} = this.props;
        return (
            <div className="player">
                <span className="player-name">
                   <button className="remove-player" onClick={ () => removePlayer(id) }>✖</button>
                   {name}
                </span>
                    <Counter
                        score={score}
                        changeScore={changeScore}
                        index={index}/>
            </div>
        );
    }
}

export default Player;