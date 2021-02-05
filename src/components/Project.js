import React from 'react'
// Styled and Animation
import Styled from 'styled-components';
import { motion } from 'framer-motion';
import { popUp } from "../animations";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// React Router
import { Link } from "react-router-dom";
// Media resize - utility
import { smallImage } from '../util';

const Project = (props) => {
 const {name, released, background_image, id } = props;

 // convert id to string
  const stringPathId = id.toString();
 // Load Detail Handler 
 const dispatch = useDispatch();
 const loadDetailHandler = () => {
  document.body.style.overflow = "hidden";
  dispatch(loadDetail(id));
 }
 return (
  <StyledProj
    variants={popUp}
    initial="hidden"
    animate="show"
    layoutId={stringPathId}
    onClick={loadDetailHandler}
  >
   <Link to={`/game/${id}`}>
    {/** Avatar, Location */}
    <StyledTitleProj>
      <motion.img 
      layoutId={`image ${stringPathId}`}
      src={smallImage(background_image, 640)} 
      alt={name}/>
      <p>Name of Location</p>
      <p>Location</p>
    </StyledTitleProj>
    {/** Description */}
    <StyledDescProj>
      <motion.p 
      layoutId={`title ${stringPathId}`}>   
      {name}
      </motion.p>
    </StyledDescProj>
    {/** Animation, Product, Img, Galery, Video... */}
    <StyledProductProj>
      <span>Animation</span>
      <span>Product</span>
      <span>Video</span>
    </StyledProductProj>
    {/** Info - Nu of proj, Date */}
    <StyledInfoProj>
      <p>5 Videos</p>
      <p>{released}</p>
    </StyledInfoProj>
   </Link>
  </StyledProj>
 )
}
const StyledProj = Styled(motion.div)`
 min-height: 30vh;
 padding: 1rem;
 box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
 text-align: center;
 border-radius: 1rem;
 cursor: pointer;
 overflow: hidden;
 border-top: 4px solid #B0B3B5;
 background-color: #363a42;
 
 p {
  /* font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px; */
  color:#eff3f5; 
 }
`;
const StyledTitleProj = Styled(motion.div)`
  display: grid;
  grid-template-columns: 60px 240px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: column;
  img{
  width: 10vh;
  height: 10vh;
  object-fit: cover;
  grid-column: 1;
  grid-row: 1 / 3;
 }
 p {
  /* font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px; */
  text-align: left;
  color: #B0B3B5;
; 
 }
`;
const StyledDescProj = Styled(motion.div)`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
`;
const StyledProductProj = Styled(motion.div)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #242629;
  span {
    width: 100%;
    height: 100%;
    margin: 10px;
    padding: 5px;
    border: 1px solid #EFF3F5;
    border-radius: 3px;
    background-color: #5078bf;
    color:#eff3f5; 
  }
`;
const StyledInfoProj = Styled(motion.div)`
  display: flex;
  justify-content: space-between;
  p {
    font-style: normal;
    padding: 15px 0px 10px 0px;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #B0B3B5;
  }
  
`; 
export default Project
