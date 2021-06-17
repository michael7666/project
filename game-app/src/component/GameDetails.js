import React from "react";

import styled from "styled-components";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {smallImage } from "../utill";
import playstation from "../image/playstation.png";
import starFull from "../image/Full_Star.png";
import gamepad from "../image/gamepad.png";
// import logo from "../image/logo.svg";
import nintendo from "../image/nintendo.png";
import starEmpt from "../image/Star_empty2.png";
import steam from "../image/steam.png";
import xbox from "../image/Xbox_logo.png";
import apple  from "../image/Apple-logo-black-and-white.png";


const GameDetails = ({pathId}) =>{
  const history = useHistory();

  const existDetailsHandler = (e) => {
      const element = e.target;
      if(element.classList.contains('shadow')){
        document.body.style.overflow = "auto";
        history.push('/')
      }
  }

const getStar = () => {
  const stars = [];
  const rating = Math.floor(game.rating);
  for( let i =1; i<=5; i++){
      if(i <= rating){
        stars.push(<img alt= "star" src={starFull} key={i}></img>)
      }else{
        stars.push(<img alt= "star" src={starEmpt} key={i}></img>)
      }
  }
  return stars;
}


const getPlatForm = (platform) => {
  switch(platform) {
    case "PlayStation 4":
      return playstation;
    case "Xbox One":
      return xbox;
    case "PC":
      return steam;
    case "iOS":
      return apple;
    case "Nintendo Switch":
        return nintendo;
      default:
        return gamepad;
  }
} 

const {screen,game, isLoading} = useSelector((state) => state.detail);


    return(
      <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={existDetailsHandler}>
            <Detail layoutId={pathId} >
            <Stats>
                <div className="rating">
                 <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3> 
                 <p>Rating: {game.rating}</p>
                 {getStar()}
                </div>
               <Info>
                <h3>PlatForms</h3>
                <PlatForms>
                   {game.platforms.map(data =>(
                       <img key={data.platform.id}  src={getPlatForm(data.platform.name)} alt="" >
                         
                       </img>
                   ))}
                </PlatForms>
              </Info>
            </Stats>
              <Media >
                 <motion.img  layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt=""/>
              </Media >
              <Deccription>
                <p>{game.description_raw}</p>
              </Deccription>
              <div className="gallery">
                {screen.results.map(screen =>(
                    <img src={smallImage(screen.image, 1280)} key={screen.id} alt=""></img>
                ))}
              </div>
           </Detail >
        </CardShadow>
        )}
        </>
    )

}



const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar{
      width: 0.5rem
  }
  &::-webkit-scrollbar-thumb{
      background: #ff7676;
  }
  &::-webkit-scrollbar-track{
      background: white
  }

`


const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
   position: absolute;
   left: 10%;
  color: black;
  z-index: 10;
 img{
     width: 100%;
 }
`

const Stats = styled(motion.div)`
 display: flex;
 align-items: center;
 justify-content: space-between;
 img{
   width: 2rem;
   height: 2rem;
   display: inline;
  
 }

`

const Info = styled(motion.div)`
  text-align: center;
`

const PlatForms = styled(motion.div)`
   display: flex;
   justify-content: space-evenly;

   img{
       margin-left: 3rem;
       width: 35px
   }

`

const Media = styled(motion.div)`
   margin-top: 5rem;

   img{
       width:100%;
       height: 60vh;
       object-fit: cover;
   }
`

const Deccription =styled(motion.div)`
  margin: 5rem 0rem;
`

export default GameDetails;