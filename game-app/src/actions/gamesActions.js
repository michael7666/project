import axios from "axios";
import {popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchGameUrl} from "../api";



export const loadGames = () => async (dispatch) =>{
   const popularData = await  axios.get(popularGamesUrl());
   const upcomingGameDate = await axios.get(upcomingGamesUrl());
   const newGamesData = await axios.get(newGamesUrl());
    dispatch({
        type: "FETCH_GAME",
        payload: {
            popularGame: popularData.data.results,
            newGame: newGamesData.data.results,
            upComing: upcomingGameDate.data.results
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGame =  await axios.get(searchGameUrl(game_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            search: searchGame.data.results
        }
    })
}