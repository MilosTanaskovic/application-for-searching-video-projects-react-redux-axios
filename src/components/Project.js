import React from 'react'
// Styled and Animation
import Styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
const Project = (props) => {
 const {name, released, background_image, id } = props;

 const dispatch = useDispatch();
 const loadDetailHandler = () => {
  dispatch(loadDetail(id));
 }
 return (
  <StyledProj onClick={loadDetailHandler}>
   <h3>{name}</h3>
   <p>{released}</p>
   <img src={background_image} alt={name}/>
  </StyledProj>
 )
}
const StyledProj = Styled(motion.div)`
 min-height: 30vh;
 box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
 text-align: center;
 border-radius: 1rem;
 img{
  width: 100%;
  height: 40vh;
  object-fit: cover;
 }
`;
export default Project
