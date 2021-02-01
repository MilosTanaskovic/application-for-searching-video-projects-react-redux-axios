import React from 'react'
// Redux
import { useSelector } from "react-redux";
// Stylong and Animation
import Styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectDetail = () => {

 const { project, screen } = useSelector(state => state.detail);

 return (
  <CardShadow>
   <Detail>
    <div className="stats">
     // Rating the project 
     <div className="rating">
      <h3>{project.name}</h3>
      <p>Rating: {project.rating}</p>
     </div>
     // Info Project
     <div className="info">
      <h3>Platforms</h3>
      <div className="platforms">
       {project.platforms.map((data) => (
        <h3 key={data.platform.id}>{data.platform.name}</h3>
       ))}
      </div>
     </div>
    </div>
    <div className="media">
        <img src={project.background_image} alt="image"/>
    </div>
    <div className="description">
        <p>{project.description_raw}</p>
    </div>
    <div className="gallery">
        {screen.results.map(screen => (
         <img src={screen.image} key={screen.id} alt="game"/>
        ))}
    </div>
   </Detail>
  </CardShadow>
 )
}
const CardShadow = Styled(motion.div)`
 width: 100%;
 min-height: 100vh;
 overflow-y: scroll;
 background: rgba(0,0,0,0.5);
 position: fixed;
 top: 0;
 left: 0;
 &::-webkit-scrollbar {
  width: 0.5rem;
 }

 &::-webkit-scrollbar-thumb {
  background-color: #ff7676;
 }

 &::-webkit-scrollbar-track {
  background: white;
 }
`;
const Detail = Styled(motion.div)`
 width: 80%;
 border-radius: 1rem;
 padding: 2rem 20rem;
 background: white;
 position: absolute;
 left: 10%;
 color: black;
 img{
  width: 100%;
 }
`;
