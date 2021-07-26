import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {

    const playerTotal = props.players.length;

    const totalScore = props.players.reduce( (total, player) => {
       return total + player.score;
    }, 0);



    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players:</td>
                <td>{playerTotal}</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>{totalScore}</td>
            </tr>
            </tbody>
        </table>
    );

}

//validate that the Stats component receives and array of player objects
// with score as a number specifically
Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
};

export default Stats;
