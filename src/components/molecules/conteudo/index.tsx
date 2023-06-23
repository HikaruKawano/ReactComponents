import React from "react";
import Card from "../../atom/card";
import ContentContainer from "../../atom/contentContainer";
import TextContainer from "../../atom/textContainer";
import Image from "../../atom/image";

interface props {
  src: string;
  children: React.ReactElement | JSX.Element;
  id?: string;
  displayImg?: string;
}

const Content: React.FC<props> = ({ src, children, id, displayImg }) => {
  return (
    <ContentContainer id={id}>
      <Card>
        <Image src={src} display={displayImg}/>
        <TextContainer w="45  %" h="55%">
          {children}
        </TextContainer>
      </Card>
    </ContentContainer>
  );
};
export default Content;
