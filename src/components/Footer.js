import React from 'react'
import styled from 'styled-components';

 function Footer() {
  return (
    <FooterContainer className='main-footer'>
 <div className='footer-middle'>      
<div className='container'> 
<div className='row'>
    {/* Coloumn 1 */}
    <div className='col-md-3 col-sm 6'> 
    <h4>Contact us</h4>
    <ul className='list-unstyled'>
        <li>LoSneakers@Gmail.com</li>
        <li>+218922502414</li>
        <li>LY</li>




 </ul>
    
 </div>
 {/* Coloumn 2 */}
 <div className='col-md-3 col-sm 6'> 
    <h4>Navigate</h4>
    <ul className='list-unstyled'>
        <li><a href='/'>About us </a></li>
        <li><a href='/'>Contact Us</a></li>
        <li><a href='/'>News</a></li>
        




 </ul>
    
 </div>
 {/* Coloumn 3 */}
 <div className='col-md-3 col-sm 6'> 
    <h4>Sign Up for the news</h4>
    <ul className='list-unstyled'>
        <li><a href='/'>Sign Up</a></li>
        
       


 </ul>
    
 </div>
 {/* Coloumn 4 */}
 <div className='col-md-3 col-sm 6'> 
    <h4>Get Started</h4>
    <ul className='list-unstyled'>
        <li><a href='/'>BACK TO TOP</a></li>
        



 </ul>
    
 </div>
 </div>
 {/* footer bootom */}
 <div className='footer-bottom'> 
 <p className='text-xs-center'>
    &copy;{new Date().getFullYear()} Lo Sneakers - All Rights Reserved
    </p>    
 
 </div>
 </div> 
 </div>
 </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`

.footer-middle, {
  background: var(--mainDark);
  padding-top: 3rem;
  color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}

ul li a:hover {
    color: var(--mainLightGrey);
}

`;
