import React from 'react'
// Components
import Nav from './Nav';
import Video from './Video';
import Content from './Content';
import Search from './Search';
// Redux and Routes
import { useDispatch } from 'react-redux';
import { fadeIn } from "../../animations";
// Styling and animation
import { motion } from 'framer-motion';
import Styled from 'styled-components';

const Header = () => {
 const dispatch = useDispatch();
 // Clear Searched
 const clearSearched = () => {
  dispatch({
   type: "CLEAR_SEARCHED"
  });
 }
 return (
  <StyledHeader
   variants={fadeIn}
   initial="hidden"
   animate="show"
   style={{
      backgroundSize: "cover",
      backgroundImage: `url(
        "https://daydreammadrid.com/wp-content/uploads/2019/03/hao-rui-1251747-unsplash.jpg"
      )`,
      backgroundPostion: "center center",
    }}
  >
   {/** Nav - Logo */}
   <Nav clearSearched={clearSearched}/>
   
   {/** Video */}
   
   {/** Header Content */}
   <Content />
   {/** Search Input */}
   <Search />
  </StyledHeader>
 )
}

const StyledHeader = Styled(motion.div)`
 width: 100%;
 height: 400px;
 margin-top: 80px;
`;

export default Header
