const initState = {
    popularGame: [],
    newGame: [],
    upComing: [],
    search: []
}


const gameReducer = (state = initState, action) => {
     switch(action.type){
         case "FETCH_GAME":
             return {
                 ...state,
                 popularGame: action.payload.popularGame,
                 newGame: action.payload.newGame,
                 upComing: action.payload.upComing
             }
         case "FETCH_SEARCHED":
             return{
                 ...state,
                 search: action.payload.search
             }
         case "CLEAR_SEAECHED":
             return{
                 ...state,
                 search: []
             }
        default:
            return {
                ...state
            }
     }
}

export default gameReducer;