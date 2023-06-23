import Colors from "../../../stories/components/color/colors";
import Navegation from "../../molecules/nav";
import { HeaderStyle } from "./style";


const NavBar:React.FC = () => {
  return (
    <>
    <HeaderStyle bg={Colors.background}>
     <Navegation></Navegation>
    </HeaderStyle>
    </>
  );
}

export default NavBar;
