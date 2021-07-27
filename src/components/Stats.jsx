import React from 'react';
import {Consumer} from "./context";

function Stats() {

    return (
        <Consumer>
            {context => {

                const playerTotal = context.length;

                const totalScore = context.reduce( (total, player) => {
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
