import Color from "../../../stories/components/color/colors";
import { ArticleStyle, BtnContainer } from "./style";
import Btn from "../../atom/btn";
import Link from "../../atom/alink";
import HomeText from "../../molecules/homeText";
import NavLink from "../../atom/navLink";

const Home = () => {
  return (
    <ArticleStyle id="home">
      <HomeText />

      <BtnContainer>
        <Btn width="40%" height="70px" bg={Color.puple}>
          <Link color={Color.background} link="#Sobre">
            O que é a LittleDev?
          </Link>
        </Btn>
        <Btn width="40%" height="70px" bg={Color.pink}>
          <NavLink color={Color.background} to="/Download">
            Donwload
          </NavLink>
        </Btn>
      </BtnContainer>
    </ArticleStyle>
  );
};

export default Home;
