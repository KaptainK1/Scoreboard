import React from 'react';
import Header from './Header.jsx';
import Player from './Player.jsx';
import players from '../init/players';

function App() {
       return (
           <div>
               <Header title="Scoreboard" totalPlayers={1}/>
               {players.map( p => <Player key={p.id.toString()} name={p.name} />)}
           </div>
       );
}

export default App;