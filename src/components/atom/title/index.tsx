import { TitleStyle } from "./style";

interface props {
  children: string[] | string | JSX.Element | React.ReactElement 
  margin?: string
  textAlign?: string
}

const Title: React.FC<props> = ({ children,  margin, textAlign }) => {
  return <TitleStyle margin={margin} textAlign={textAlign}>{children}</TitleStyle>;
};

export default Title;
