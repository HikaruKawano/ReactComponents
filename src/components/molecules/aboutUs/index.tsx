
import Container from "../../atom/container";
import Icon from "../../atom/icon";
import Link from "../../atom/alink";
import SocialContainer from "../../atom/socialContainer";
import Text from "../../atom/text";
import Colors from "../../../stories/components/color/colors";


const AboutUs: React.FC = () => {
  return (
    <Container flexBasis="50%" padding="30px 50px" background={Colors.background2} justify="flex-start" height="auto">
      <>
        <h2>ABOUT US</h2>
        <SocialContainer flexDirection="column">
          <>
            <Text color={Colors.puple} margin="0" padding="20px 0" className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <SocialContainer>
              <>
                <Link link="#" color={Colors.pink} ClassName="linkFirst" padding="0 10px 0 0">
                  <Icon className="fab fa-facebook-f"></Icon>
                </Link>
                <Link link="#" color={Colors.pink} padding="0 10px">
                  <Icon className="fab fa-twitter"></Icon>
                </Link>
                <Link link="#" color={Colors.pink} padding="0 10px">
                  <Icon className="fab fa-instagram"></Icon>
                </Link>
                <Link link="#" color={Colors.pink} padding="0 10px">
                  <Icon className="fab fa-youtube"></Icon>
                </Link>
              </>
            </SocialContainer>
          </>
        </SocialContainer>
      </>
    </Container>
  );




}


export default AboutUs;
