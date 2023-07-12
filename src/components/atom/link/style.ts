import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface propsStyleLink {
    color?: string;
    width?:string;
    padding?: string;
    display?: string;
    height?: string;
    background?: string;
    margin?: string;
    borderRadius?: string;
    justify?: string;
    align?: string;
    textDecoration?: string;
    font?: string;
    fontWeight?: string;
    fontStyle?: string;
}

export const LinkStyle = styled(Link).attrs<propsStyleLink>({
    className: 'flex justify-center align-center  no-underline h-full font-medium'
})`
    display:${(props) => props.display};
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
    text-decoration: ${(props) => props.textDecoration};
    color: ${(props) => props.color};
    width: ${(props) => props.width};
    height: ${(props) => props.height} ;
    font-family: ${(props) => props.font} "Montserrat", sans-serif;
    font-weight: ${(props) => props.fontWeight};
    font-style: ${(props) => props.fontStyle};
    padding: ${(props) => props.padding};
    background-color: ${(props) => props.background};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.borderRadius};

   

`;
