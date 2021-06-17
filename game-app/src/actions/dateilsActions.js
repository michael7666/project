import axios from "axios";
import {gameDetailsUrl, gameScreenShotUrl} from "../api";


export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL",
    });
   const detailData = await axios.get(gameDetailsUrl(id));
   const gameScreenShortData =  await axios.get(gameScreenShotUrl(id)) 

   dispatch({
       type: "GET_DETAIL",
       payload: {
           game: detailData.data,
           screen: gameScreenShortData.data
       }
   });
}

