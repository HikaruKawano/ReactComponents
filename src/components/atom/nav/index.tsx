import { NavStyle } from "./style";

interface nav {
  children: JSX.Element | React.ReactNode;
  resDisplay?: string;
  display?: string;
}
const Nav: React.FC<nav> = ({ children, resDisplay, display }) => {
  return <NavStyle resDisplay={resDisplay} display={display}>{children}</NavStyle>;
};

export default Nav;
