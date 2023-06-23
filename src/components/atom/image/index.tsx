import { MouseEventHandler } from "react";
import { ImgStyele } from "./style";

interface props {
  src: string;
  display?: string;
  height?: string;
  margin?: string;
  align?: string;
  justify?: string;
  width?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;

  resHeight?: string;
  resWidth?: string;
  resMinWidth?: string;
  resMargin?: string;
  resDisplay?: string;
  resTop?: string;
  resLeft?: string;
  resPosition?: string;
}

const Image: React.FC<props> = ({
  src,
  display,
  height,
  margin,
  align,
  justify,
  width,
  onClick,

  resHeight,
  resMargin,
  resMinWidth,
  resWidth,
  resDisplay,
  resLeft,
  resTop,
  resPosition
}) => {
  return (
    <ImgStyele
      src={src}
      display={display}
      height={height}
      margin={margin}
      align={align}
      justify={justify}
      width={width}
      onClick={onClick}

      resHeight={resHeight}
      resMargin={resMargin}
      resMinWidth={resMinWidth}
      resWidth={resWidth}
      resDisplay={resDisplay}
      resPosition={resPosition}
      resTop={resTop}
      resLeft={resLeft}
    ></ImgStyele>
  );
};

export default Image;
