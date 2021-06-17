

const base_url = "https://api.rawg.io/api/";



const getCurrentMonth = () => {
    const month = new Date().getMonth() +1;
    if(month < 10) {
        return`0${month}`;
    }else {
        return month;
    }
}



const getCurrentDay = () => {
    const day = new Date().getDay();
    if(day < 5) {
        return`0${day}`;
    }else {
        return day;
    }
}

const currentYear = new Date().getUTCFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate =  `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


const popular_games = `games?key=2415f3c80f36414ba1d98f4dc0ccdf04&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=2415f3c80f36414ba1d98f4dc0ccdf04&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=2415f3c80f36414ba1d98f4dc0ccdf04&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

export const gameDetailsUrl = (id) => `${base_url}games/${id}?key=2415f3c80f36414ba1d98f4dc0ccdf04`;
export const gameScreenShotUrl = (id) => `${base_url}games/${id}/screenshots?key=2415f3c80f36414ba1d98f4dc0ccdf04`;

export const searchGameUrl = (game_name) => `${base_url}games?key=2415f3c80f36414ba1d98f4dc0ccdf04&search=${game_name}&page_size=9`

