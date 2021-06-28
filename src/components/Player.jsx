import React from 'react';
import Counter from './Counter.jsx';

function Player() {
   return (
       <div className="player">
           <span className="player-name">Dylan</span>
           <Counter />
       </div>
   );
}

export default Player;