import React from 'react'
// Styling
import Styled from 'styled-components';
import {motion} from 'framer-motion';

const Logo = () => {
 const logo = "https://www.skilldar.com/a62fb9599eec8b970127cc7bbf4a9d74.png";
 return (
  <StyledLogo>
    <svg class="" width="32px" height="32px" viewBox="0 0 25 25"><g stroke="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4837 0C9.60642 0 6.77709 1.00768 4.57117 2.83109C1.98161 4.9904 0.399101 7.96545 0.063417 11.3244C-0.272267 14.6353 0.734784 17.8983 2.8448 20.4415C5.24254 23.3685 8.74324 25 12.5317 25C15.409 25 18.2383 23.9923 20.4442 22.1689C25.7672 17.8023 26.5345 9.88484 22.1706 4.55854C19.7728 1.67946 16.2721 0 12.4837 0Z" fill="#2A2C30"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1499 20.6096C14.6571 24.3045 8.06123 23.6327 4.38093 19.17C0.700636 14.6594 1.36978 8.03731 5.81482 4.39039C10.3076 0.695476 16.9035 1.36728 20.5838 5.82996C24.3119 10.3406 23.6428 16.9627 19.1499 20.6096Z" fill="#D92C47"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M4.55588 19.5C0.714471 14.6601 1.41132 8.15719 5.82744 4.39255C10.291 0.627904 17.0417 1.41017 20.6981 6.00596" fill="#EFF3F5"></path></g></svg>
    <img src={logo} alt="logo"/>
   </StyledLogo>
 )
}
const StyledLogo = Styled(motion.div)`
 display: flex;
 /*justify-content: center; */
 padding: 1rem;
 cursor: pointer;
 img{
  width: 200px;
  height: 34px;
  margin-right: 10px;
 }
`;
export default Logo
