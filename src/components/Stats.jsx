import React from 'react';
import {Consumer} from "./context";

function Stats() {

    return (
        <Consumer>
            {context => {

                const playerTotal = context.players.length;

                const totalScore = context.players.reduce( (total, player) => {
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
            }}
        </Consumer>
    );

}

export default Stats;
