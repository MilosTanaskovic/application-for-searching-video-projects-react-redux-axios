import React from 'react'
// Styling and Animation
import {motion} from 'framer-motion';
import Styled from "styled-components";

const Content = () => {
 return (
  <StyledContent>
   <h2>Creative motion projects</h2>
   <p>Discover client work to pitch on.</p>
  </StyledContent>
 )
}
const StyledContent = Styled(motion.div)`
 padding: 7rem 0rem;
 h2, p {
  text-align: center;
  color: white;
 }
`;
export default Content
