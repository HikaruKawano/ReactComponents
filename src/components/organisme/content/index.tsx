import {  Img2, Img3, Img4 } from "../../../assets";
import Title from "../../atom/title";
import Content from "../../molecules/conteudo";
import Text from "../../atom/text";




const Contents: React.FC = () => {
  return (
    <div>
      

      <Content src={Img2} id="Sobre">
        <>
          <Title>Uma plataforma completa para programadores</Title>
          <Text>
            Com nosso aplicativo, você pode facilmente gerenciar e compartilhar
            projetos individuais ou em equipe, agendar reuniões de vídeo e
            utilizar nosso chat para se comunicar com outros membros da equipe
            em tempo real.
          </Text>
        </>
      </Content>

      <Content src={Img3}>
        <>
          <Title>Gerenciamento de projetos e comunicação em equipe</Title>
          <Text>
            Além disso, nosso aplicativo permite a criação de grupos e
            comunidades voltados para a programação, onde você pode se conectar
            com outros programadores e trocar informações relevantes para sua
            carreira.
          </Text>
        </>
      </Content>

      <Content src={Img4}>
        <>
          <Title>Comunidades voltadas para a programação</Title>
          <Text>
            No futuro, estaremos implementando uma área voltada para a
            comunidade, onde programadores poderão compartilhar suas ideias e
            solucionar problemas em conjunto, em um ambiente colaborativo e
            enriquecedor.
          </Text>
        </>
      </Content>
    </div>
  );
};

export default Contents;
