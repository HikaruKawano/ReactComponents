import Btn from "../../atom/btn";
import Container from "../../atom/container";
import Link from "../../atom/alink";
import Text from "../../atom/text";
import SocialContainer from "../../atom/socialContainer";
import Colors from "../../../stories/components/color/colors";

const ContactUs: React.FC = () => {
  return(

  <Container padding="30px 50px" background={Colors.background2} justify="flex-start" height="auto">
    <>
      <h2>CONTACT US</h2>
      <div className="content">
        <form action="#">
          <SocialContainer flexDirection="column">
            <>
              <Text color={Colors.puple}>Email *</Text>
              <input type="email" required />
            </>
          </SocialContainer>
          <SocialContainer flexDirection="column">
            <>
              <Text color={Colors.puple}> Message *</Text>
              <textarea id="msgForm" cols={10} rows={7} required></textarea>
              <br />
              <div className="btnForm">
                <Btn bg={Colors.puple} width="100%" height="50%">
                  Sead
                </Btn>
              </div>
            </>
          </SocialContainer>
          <SocialContainer flexDirection="column">
            <center>
              <Text margin="0" textAlign="center"  fontSize="large">
                <>
                  Created By{" "}
                  <Link link="#" display="inline" color={Colors.puple}>
                    Anderson Hikaru
                  </Link>{" "}
                  |{" "}
                </>
              </Text>
              <Text className="far fa-copyright"textAlign="center" margin="0" fontSize="large">
                2023
              </Text>
              <br />
              <Text
                fontSize="large"
                color={Colors.puple}
                margin="0"
                display="inline-block"
              >
                <>
                  <Link
                    color={Colors.pink}
                    display="inline"
                    link="https://br.freepik.com/vetores-gratis/ilustracao-de-pessoas-fazendo-download-de-informacoes_2921015.htm#query=download%20screen%20gray&position=9&from_view=search&track=ais"
                  >
                    Imagem de rawpixel.com
                  </Link>{" "}
                  no Freepik
                </>
              </Text>
              <Text
                fontSize="large"
                color={Colors.pink}
                margin="0"
                display="inline-block"
              >
                <>
                  <Link
                    color={Colors.pink}
                    display="inline"
                    link="https://br.freepik.com/vetores-gratis/o-programador-trabalha-com-ilustracao-plana-dos-simbolos-do-dia-de-trabalho_15329611.htm#query=screen%20programer&position=12&from_view=search&track=ais"
                  >
                    Imagem de macrovector
                  </Link>{" "}
                  no Freepik
                </>
              </Text>
              <Text fontSize="large" color={Colors.pink} margin="0" display="inline-block">
                <>
                  <Link color={Colors.puple} display="inline" link="https://www.freepik.com/free-vector/business-infographics-with-stats_959457.htm#page=2&query=screen%20gerenciamento&position=0&from_view=search&track=ais">
                    Image by photoroyalty
                  </Link>{" "}
                  on Freepik
                </>
              </Text>
              <Text fontSize="large" color={Colors.pink} margin="0" display="inline-block">
                <>
                <Link color={Colors.puple} display="inline" link="https://www.freepik.com/free-vector/character-illustration-people_3585143.htm#query=screen%20comunidade&position=43&from_view=search&track=ais">
                  Image by rawpixel.com
                </Link>{" "}
                on Freepik
                </>
              </Text>
              
            </center>
          </SocialContainer>
        </form>
      </div>
    </>
  </Container>
);
}
export default ContactUs;