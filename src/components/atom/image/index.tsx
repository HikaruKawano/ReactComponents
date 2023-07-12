import { MouseEventHandler } from "react";
import { ImgStyele, propsStyleImg } from "./style";

interface props extends propsStyleImg {
  src: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

const Image = ({
  src,
}:props, props: props) => {
  return (
    <ImgStyele
      src={src}
      display={props.display}
      height={props.height}
      margin={props.margin}
      align={props.align}
      justify={props.justify}
      width={props.width}
      onClick={props.onClick}

      resHeight={props.resHeight}
      resMargin={props.resMargin}
      resMinWidth={props.resMinWidth}
      resWidth={props.resWidth}
      resDisplay={props.resDisplay}
      resPosition={props.resPosition}
      resTop={props.resTop}
      resLeft={props.resLeft}
    ></ImgStyele>
  );
};

export default Image;
