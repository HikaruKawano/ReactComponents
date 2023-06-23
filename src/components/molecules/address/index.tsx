import Container from "../../atom/container";
import Icon from "../../atom/icon";
import Text from "../../atom/text";
import SocialContainer from "../../atom/socialContainer";
import Colors from "../../../stories/components/color/colors";

const Address:React.FC = () => {
  return (
    <Container padding="30px 50px" background={Colors.background2} justify="flex-start" height="auto">
      <div className="center box">
        <h2>ADDRESS</h2>
        <SocialContainer flexDirection="column">
          <div>
            <SocialContainer flexDirection="row" align="center">
              <>
                <Icon className="fas fa-map-marker-alt"></Icon>
                <Text padding="0 10px">Street, State</Text>
              </>
            </SocialContainer>
            <SocialContainer flexDirection="row" align="center">
              <>
                <Icon className="fas fa-phone-alt"></Icon>
                <Text padding="0 10px">+55 999 9999 9999</Text>
              </>
            </SocialContainer>
            <SocialContainer flexDirection="row" align="center">
              <>
                <Icon className="fas fa-envelope"></Icon>
                <Text padding="0 10px">abc@example.com</Text>
              </>
            </SocialContainer>
          </div>
        </SocialContainer>
      </div>
    </Container>
  );
};

export default Address;
