import React from 'react'
// Redux
import { useSelector } from "react-redux";
//React Router
import { useHistory } from 'react-router-dom';
// Media resize - utility
import { smallImage } from '../util';
// IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
// Star Images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';
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
 // Get Stars
 const getStars = () => {
     const stars = [];
     const raitng = Math.floor(project.raitng);
     for(let i = 1; i < 5; i++ ){
         if(i <= raitng){
             stars.push(<img alt="star" key={i} src={starFull}/>)
         }
         else{
             stars.push(<img alt="star" key={i} src={starEmpty}/>)
         }
     }
     return stars;
 }
 // Get Platform Images
 const getPlatform = (platform) => {
     switch (platform) {
         case "PlayStation 4":
            return playstation;
        case "Xbox One":
            return xbox;
        case "PC":
            return steam;
        case "Nintendo Switch":
            return nintendo;
        case "IOS":
            return apple;
         default:
             return gamepad;
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
                {getStars()}
            </div>
            {/**Info Project */} 
            <Info>
                <h3>Platforms</h3>
                <Platforms>
                    {project.platforms.map((data) => (
                        <img 
                        key={data.platform.id} 
                        src={getPlatform(data.platform.name)} 
                        alt={data.platform.name} ></img>
                       
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
            <Description>
                <p>{project.description_raw}</p>
            </Description>
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
};
const CardShadow = Styled(motion.div)`
 width: 100%;
 min-height: 100vh;
 overflow-y: scroll;
 background: rgba(0,0,0,0.5);
 position: fixed;
 top: 0;
 left: 0;
 z-index: 5;
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
 z-index: 10;
 img{
  width: 100%;
 }
`;
const Stats = Styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
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
    }
`;
const Description = Styled(motion.div)`
    margine: 5rem 0rem;
`;