import React from 'react'
// Redux
import { useSelector } from "react-redux";
//React Router
import { useHistory } from 'react-router-dom';
// Media resize - utility
import { smallImage } from '../util';
// Stylong and Animation
import Styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectDetail = ({pathId}) => {
    const history = useHistory();
// Exit Detail
 const exitDetailHandler = (e) => {
     const element = e.target;
    if(element.classList.contains("shadow")){
        document.body.style.overflow = 'auto';
        history.push('/')
    }
 }
// Data
 const { project, screen, isLoading } = useSelector(state => state.detail);

 return (
    <>
    {!isLoading && (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
        <Detail layoutId={pathId}>
            <Stats>
            {/**Rating the project */} 
            <div className="rating">
                <motion.h3 
                    layoutId={`title ${pathId}`}>{project.name}
                </motion.h3>
                <p>Rating: {project.rating}</p>
            </div>
            {/**Info Project */} 
            <Info>
                <h3>Platforms</h3>
                <Platforms>
                    {project.platforms.map((data) => (
                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                    ))}
                </Platforms>
            </Info>
            </Stats>
            <Media>
                <motion.img 
                layoutId={`image ${pathId}`}
                src={smallImage(project.background_image, 1280)} 
                alt="image"/>
            </Media>
            <div className="description">
                <p>{project.description_raw}</p>
            </div>
            <div className="gallery">
                {screen.results.map(screen => (
                <img src={smallImage(screen.image, 1280)} key={screen.id} alt="game"/>
                ))}
            </div>
        </Detail>
    </CardShadow>
    )} 
    </>
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
 padding: 2rem 5rem;
 background: white;
 position: absolute;
 left: 10%;
 color: black;
 img{
  width: 100%;
 }
`;
const Stats = Styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
 `;
const Info = Styled(motion.div)`
    text-align: center;
`;
const Platforms = Styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margine-left: 3rem;
    }
`;
const Media = Styled(motion.div)`
    margine-top: 5rem;
    img{
        width: 100%;
        /* height: 60vh;
        object-fit: cover; */
    }
`;
const Description = Styled(motion.div)`
    margine: 5rem 0rem;
`;