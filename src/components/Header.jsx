import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats.jsx';
import Stopwatch from "./Stopwatch";

function Header({title}) {
    return (
        <header>
            <Stats />
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    );
}

//validate the Header component receives players as an array of objects
//and a title as a string from props.
Header.propTypes = {
    title: PropTypes.string
}

//set the default title to scoreboard if one isnt supplied via props
Header.defaultProps = {
    title: "Scoreboard"
}

export default Header;