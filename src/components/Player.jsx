import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter.jsx';
import Icon from './Icon.jsx';

//use PureComponent to help optimize the re-rending or unnecessary components
class Player extends React.PureComponent {

    static propTypes = {
        removePlayer: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        isHighestScore: PropTypes.bool
    }

    render() {
        const { name, id, score, index, removePlayer, isHighestScore} = this.props;
        return (
            <div className="player">
                <span className="player-name">
                   <button className="remove-player" onClick={ () => removePlayer(id) }>✖</button>
                    <Icon isHighestScore={isHighestScore} />
                   {name}
                </span>
                    <Counter
                        score={score}
                        // changeScore={changeScore}
                        index={index}/>
            </div>
        );
    }
}

export default Player;