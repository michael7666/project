import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom"

import {loadGames}  from "../actions/gamesActions";
import styled from "styled-components";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

import Game from "../component/Game";
import GameDetails from "../component/GameDetails";
import { fadeIn} from "../animation";


const Home = () =>{
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
    const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(loadGames());
    }, [dispatch])

const {popularGame,newGame, upComing, search} = useSelector((state) => state.games);

    return(

      <GameList variants={fadeIn} initial="hidden" animate="show">
        <AnimateSharedLayout>
        <AnimatePresence>
        {pathId && <GameDetails pathId={pathId}/> } 
        </AnimatePresence>
        {search.length ?(
        <div>
        <h2>Search Games</h2>
          <Games>
           {search.map(game =>(
             <Game name={game.name} released={game.released} id={game.id}
              image={game.background_image} key={game.id}/>
           ))}
          </Games>
          <h2>UpComing Games</h2>
          <Games>
           {upComing.map(game =>(
             <Game name={game.name} released={game.released} id={game.id}
              image={game.background_image} key={game.id}/>
           ))}
          </Games>
          </div>
          ): ''}
          <h2>popular Games</h2>
          <Games>
           {popularGame.map(game =>(
             <Game name={game.name} released={game.released} id={game.id}
              image={game.background_image} key={game.id}/>
           ))}
          </Games>
          <h2>New Games</h2>
          <Games>
           {newGame.map(game =>(
             <Game name={game.name} released={game.released} id={game.id} 
             image={game.background_image} key={game.id}/>
           ))}
          </Games>
          </AnimateSharedLayout>
      </GameList>
    )
}


const GameList = styled(motion.div)`
padding: 0rem 5rem;
 h2{
   padding: 5rem 0rem;
 }

`

const Games = styled(motion.div)`
min-height: 80vh;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;

`

export default Home;