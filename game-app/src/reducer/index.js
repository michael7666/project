import {combineReducers} from "redux";
import gameReducer from  "./gamesReducer";
import detailReducer from "./detailsReducer";


const rootReducer = combineReducers({
    games: gameReducer,
    detail: detailReducer
})

export default rootReducer;