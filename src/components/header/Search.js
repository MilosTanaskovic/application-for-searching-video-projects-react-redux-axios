import React, { useState } from 'react'
// Styling and Animation
import {motion} from 'framer-motion';
import Styled from "styled-components";
// Redux and Routes
import { fetchSearch } from "../../actions/projectsAction";
import { useDispatch } from 'react-redux';
import { fadeIn } from "../../animations";

const Nav = (props) => {
 const { FontAwesomeIcon, faSearch} = props;
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
    
    <input 
     value={textInput} 
     onChange={inputHandler} 
     type="text"
     placeholder="Search creative projects"/>
     
     <button onClick={submitSearch} type="submit">
      <FontAwesomeIcon icon={faSearch} color='white'/>
     </button>
   </form>
  </StyledNav>
 )
}

const StyledNav = Styled(motion.div)`
 padding: 2rem;
 text-align: center;
 input {
  width: 55% !important;
  height: 52px;
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 2px solid #363A42;
  margin-top: 1rem;
  color: white;
  background-color: #202123;
  box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
  ::placeholder{
   
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 14px;
   display: flex;
   align-items: center;
   padding-left: 20px;
   margin-bottom: 20px;
   color: #EFF3F5;
  }
  ::value{
    color: white;
  }
 }
 button {
  font-size: 1.8rem;
  border: 2px solid #363A42;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background: #ff7676;
  color: white;
 }
`;
export default Nav