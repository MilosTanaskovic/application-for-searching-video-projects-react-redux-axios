import React from 'react'
// Styling and Animation
import {motion} from 'framer-motion';
import Styled from "styled-components";

const Video = () => {
 const video = "https://www.skilldar.com/2bfccf1ae4098d6b7f487d5c8c1b268d.mp4";
 return (
   <StyledVideoContainer>
    <StyledVideo class="home__video" key={video} autoplay>
     <source src={video} type="video/mp4"/>
      Your browser does not support the video tag.
     </StyledVideo>
   </StyledVideoContainer>
   
 )
}
const StyledVideoContainer = Styled(motion.div)`
 position: absolute;
 top: 0;
 bottom: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;
 z-index: -1;
`;
const StyledVideo = Styled(motion.video)`
 min-width: 100%;
 min-height: 100%;
 width: auto;
 height: auto;
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: -1;
`;

export default Video
