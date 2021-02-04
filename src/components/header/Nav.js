import React from 'react'
//Components
import Logo from "./Logo";
// Styling 
import Styled from "styled-components";
import {motion} from 'framer-motion';

const Nav = () => {
 
 return (
  <StyledNav>
   <Logo />
   <div className="search">
    <input type="text" name="" id=""/>
    <button>Search</button>
   </div>
  </StyledNav>
 )
}

const StyledNav = Styled(motion.div)`
 padding: 3rem 5rem;
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

