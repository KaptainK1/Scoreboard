import React from 'react';
import Header from './Header.jsx';
import Player from './Player.jsx';
import players from '../init/players';

function App() {
       return (
           <div>
                  <Header title="Scoreboard" totalPlayers={1}/>
               {players.map( p => <Player id={p.id} name={p.name} score={p.score} />)}
               {/*   <Player name="Dylan H." score={5} />*/}
               {/*<Player name="Katrina S." score={4} />*/}
           </div>
       );
}

export default App;