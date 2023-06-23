import { SocialStyle } from "./style";

interface props {
  children: JSX.Element | React.ReactElement;
  flexDirection?: string;
  justify?: string;
  align?: string;
}

const SocialContainer: React.FC<props> = ({
  children,
  flexDirection,
  justify,
  align,
}) => {
  return (
    <SocialStyle flexDirection={flexDirection} justify={justify} aling={align}>
      {children}
    </SocialStyle>
  );
};

export default SocialContainer;
