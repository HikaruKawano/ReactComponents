import Colors from "../../../stories/components/color/colors";
import { ContainerMenu, LiStyle, UlStyle } from "./style";
import Nav from "../../atom/nav";
import NavLink from "../../atom/navLink";
import Btn from "../../atom/btn";
import Alink from "../../atom/alink"
import Image from "../../atom/image";
import MenuIcon from "../../../assets/icons/menu-outline.svg";
import CloseMenu from "../../../assets/icons/close-outline.svg";
import { useEffect } from "react";

interface props{
    IsMenuOpen?:boolean
    setMenuOpen?:React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav:React.FC<props> = ({IsMenuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflowY = IsMenuOpen ? 'hidden' : 'auto';
    },[IsMenuOpen])

  return (
    <>
      <Nav display="none" resDisplay="flex">
        <Image
          src={MenuIcon}
          resWidth="55px"
          resHeight="55px"
          margin="0"
          display="none"
          resDisplay="block"
          onClick={() => setMenuOpen && setMenuOpen(true)}
        />
       
        <ContainerMenu IsMenuOpen={IsMenuOpen}>
        <Image src={CloseMenu} 
            resWidth="55px"
          resHeight="55px"
          resMinWidth="0"
          margin="0"
          display="none"
          resDisplay="block"
          resPosition="absolute"
          resTop="5%"
          resLeft="10%"
          onClick={() => setMenuOpen && setMenuOpen(false)}
          />
        <UlStyle className="nav__links" resDisplay="flex" display="none">
          <LiStyle>
            <NavLink color={Colors.puple} width="100%" to="/">
              Home
            </NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink color={Colors.puple} width="100%" to="/About">
              Sobre
            </NavLink>
          </LiStyle>
          <LiStyle>
            <Alink color={Colors.puple} w="100%" onClick={() => setMenuOpen && setMenuOpen(false)} link="#Contato">
              Contatos
            </Alink>
          </LiStyle>
        </UlStyle>

        <Btn
          bg={Colors.verde}
          pd="10px 40px"
          color={Colors.background2}
          resDisplay="block"
          display="none"
        >
          <NavLink to="/Connect" width="100%">
            Login
          </NavLink>
        </Btn>
        </ContainerMenu>
      </Nav>
    </>
  );
};

export default MobileNav;
