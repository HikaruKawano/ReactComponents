
import AboutUs from "../../molecules/aboutUs";
import Address from "../../molecules/address";
import ContactUs from "../../molecules/contactUs";
import {  FooterStyle } from "./style";

const Footer = () =>{
    return(
        <FooterStyle id="Contato">        
          <AboutUs/>
          <Address />
          <ContactUs />
       </FooterStyle>
      
    );
}

export default Footer;