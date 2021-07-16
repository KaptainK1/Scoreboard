import React from 'react';
import Stats from './Stats.jsx';
import Stopwatch from "./Stopwatch";

function Header({players, title}) {
    return (
        <header>
            <Stats players={players}/>
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    );
}

export default Header;