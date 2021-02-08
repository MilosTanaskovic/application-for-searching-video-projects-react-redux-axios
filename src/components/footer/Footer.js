import React from 'react'
// Styling and Animation
import {motion} from 'framer-motion';
import Styled from 'styled-components';
import breakpoint from '../breakpoints';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
 return (
  <StyledFooter>
   {/** Terms and Contact */}
   <StyledContact>
    <p>Terms & Privacy</p>
    <p><a href="mailto:milos@tanaskovic.se">Contact</a></p>
    
   </StyledContact>
   {/** Social Icons */}
   <StyledMedia>
    <p>© 2021 | Milos Tanaskovic | All Rights Reserved</p>
     <a href="https://www.linkedin.com/in/milos-tanaskovic-codedancing-619742130/" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faLinkedin} size="lg" color="#B0B3B5"/>
    </a>
    <a href="https://www.instagram.com/codedancingup/" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faInstagram} size="lg" color="#B0B3B5"/>
    </a>
    <a href="https://www.facebook.com/codedancing" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faFacebook} size="lg" color="#B0B3B5"/>
    </a>
    <a href="https://github.com/MilosTanaskovic" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faGithub} size="lg" color="#B0B3B5"/>
    </a>
    <a href="https://stackoverflow.com/users/story/11797438" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faStackOverflow} size="lg" color="#B0B3B5"/>
    </a>
   </StyledMedia>
  </StyledFooter>
 )
}

const StyledFooter = Styled(motion.div)`
 display: flex;
 justify-content: space-between;
 padding: 2rem;
 background-color: #2e2e38;
 @media only screen and ${breakpoint.device.sm}{
        display: flex;
        flex-direction: column;
    }
`;
const StyledContact = Styled(motion.div)`
 display: flex;
 width: 100%;
 justify-content: flex-start;
 p{
  padding: 0px 5px;
 }
 a{
  color: #696969;
 }
`;
const StyledMedia = Styled(motion.div)`
 display: flex;
 width: 100%;
 justify-content: space-evenly;
 a{
  padding: 0px 5px;
 }
 @media only screen and ${breakpoint.device.sm}{
        display: flex;
        flex-direction: column;
        a{
         padding: 10px 0px;
        }
    }
`;
export default Footer
