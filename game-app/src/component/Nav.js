import React,{useState} from "react";
import logo from "../image/logo.png";

import styled from "styled-components";
import {motion} from "framer-motion";
import {fetchSearch} from "../actions/gamesActions";
import {useDispatch} from "react-redux"
import {fadeIn} from "../animation"; 



const Nav = () =>{
    const dispatch = useDispatch();
    const [InputText, setInputText] = useState("");


    const inputHandler = (e) => {
      setInputText(e.target.value);
    }
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(InputText));
        setInputText("");
    }
    const clearSearch = () => {
        dispatch({type: "CLEAR_SEAECHED"})
    }
    return(
       <StyleNav variants={fadeIn} initial="hidden" animate="show">
         <Logo onClick={clearSearch}>
          <img src={logo} alt="logo"></img>
          <h1>Game PlatForm</h1>
         </Logo>
         <form className="search">
         <input value={InputText}  onChange={inputHandler} type="text" />
         <button  onClick={submitSearch} type="submit">Search</button>
         </form>
       </StyleNav>
    )
}


const StyleNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        font-weight: bold;
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        background: #ff7676;
        cursor: pointer;
        color: white;
    }
    
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img{
        width: 80px;
        height: 80px;
    }
`

export default Nav;