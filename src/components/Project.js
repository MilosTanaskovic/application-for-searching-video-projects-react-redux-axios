import React from 'react'
// Styled and Animation
import Styled from 'styled-components';
import { motion } from 'framer-motion';
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
  <StyledProj layoutId={stringPathId} onClick={loadDetailHandler}>
   <Link to={`/game/${id}`}>
    <motion.h3 
     layoutId={`title ${stringPathId}`}>   
     {name}
    </motion.h3>
    <p>{released}</p>
    <motion.img 
     layoutId={`image ${stringPathId}`}
     src={smallImage(background_image, 640)} 
     alt={name}/>
   </Link>
  </StyledProj>
 )
}
const StyledProj = Styled(motion.div)`
 min-height: 30vh;
 box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
 text-align: center;
 border-radius: 1rem;
 cursor: pointer;
 overflow: hidden;
 img{
  width: 100%;
  height: 40vh;
  object-fit: cover;
 }
`;
export default Project
