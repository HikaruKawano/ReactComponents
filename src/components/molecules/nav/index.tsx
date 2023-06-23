import Colors from "../../../stories/components/color/colors";
import { LiStyle, UlStyle } from "./style";
import Nav from "../../atom/nav";
import NavLink from "../../atom/navLink";
import Btn from "../../atom/btn";
import Alink from "../../atom/alink"
import { useState } from "react";
import MobileNav from "../mobileNav";

const Navegation: React.FC = () => {
  
  const [IsMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    
    <Nav>
      <MobileNav IsMenuOpen={IsMenuOpen} setMenuOpen={setMenuOpen}/>
      <UlStyle className="nav__links" resDisplay="none">
        <LiStyle>
          <NavLink color={Colors.puple}  width="100%" to="/">
            Home
          </NavLink>
        </LiStyle>
        <LiStyle>
          <NavLink color={Colors.puple} width="100%" to="/About">
            Sobre
          </NavLink>
        </LiStyle>
        <LiStyle>
          <Alink color={Colors.puple} w="100%" link="#Contato">
            Contatos
          </Alink>
        </LiStyle>
      </UlStyle>

      <Btn bg={Colors.verde} pd="10px 40px" color={Colors.background2} resDisplay="none">
          <NavLink to="/Connect"  width="100%">
            Login
          </NavLink>
      </Btn>
    </Nav>
  );
};

export default Navegation;
