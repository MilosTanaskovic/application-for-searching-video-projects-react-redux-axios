import React, { useState } from 'react'
// Styling and Animation
import {motion} from 'framer-motion';
import Styled from "styled-components";
// Redux and Routes
import { fetchSearch } from "../../actions/projectsAction";
import { useDispatch } from 'react-redux';
import { fadeIn } from "../../animations";

const Nav = () => {
 const dispatch = useDispatch();
 const [textInput, setTextInput] = useState('');

 // input Handler
 const inputHandler = (e) => {
  setTextInput(e.target.value);
 };
 // submit Search
 const submitSearch = (e) => {
  e.preventDefault();
  dispatch(fetchSearch(textInput));
  setTextInput("");
 };
 
 return (
  <StyledNav 
   variants={fadeIn}
   initial="hidden"
   animate="show"
  >
   
   <form className="search">
    <input value={textInput} onChange={inputHandler} type="text" name="" id=""/>
    <button onClick={submitSearch} type="submit">Search</button>
   </form>
  </StyledNav>
 )
}

const StyledNav = Styled(motion.div)`
 padding: 2rem;
 text-align: center;
 input {
  width: 30% !important;
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
  margin-top: 1rem;
  box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
 }
 button {
  font-size: 1.5rem;
  border: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background: #ff7676;
  color: white;
 }
`;
export default Nav