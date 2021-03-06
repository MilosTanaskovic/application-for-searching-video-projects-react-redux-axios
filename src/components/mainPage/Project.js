import React from 'react'
// Styled and Animation
import Styled from 'styled-components';
import { motion } from 'framer-motion';
import { popUp } from "../../animations";
// FontAwsome Icons (prop drilling example)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faVideo, faClock, faSignature } from '@fortawesome/free-solid-svg-icons';
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../../actions/detailAction";
// React Router
import { Link } from "react-router-dom";
// Media resize - utility
import { smallImage } from '../../util';

const Project = (props) => {
 const {name, released, background_image, video_count, slug, id } = props;
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
      <p>{name}</p>
      <p><FontAwesomeIcon icon={faSignature} size="lg" color="#B0B3B5" /> {slug}</p>
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
      <p><FontAwesomeIcon icon={faVideo} color="#B0B3B5" size="lg" /> {video_count} Videos</p>
      <p><FontAwesomeIcon icon={faClock} color="#B0B3B5" size="lg" /> {released}</p>
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
  margin:10px;
  img{
  width: 3rem;
  height: 3rem;
  border-radius: 3px;
  box-shadow: 4px 4px rgba(20,21,23);
  object-fit: cover;
  grid-column: 1;
  grid-row: 1 / 3;
 }
 p {
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 1.5px;
  text-align: left;
  color: #B0B3B5;
 }
`;
const StyledDescProj = Styled(motion.div)`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  margin:10px;
  text-align: left;
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
  margin:10px;
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
