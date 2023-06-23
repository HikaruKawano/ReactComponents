import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface linkStyle {
    color?: string;
    width?:string;
    padding?: string;
    display?: string;
    height?: string;
    background?: string;
    margin?: string;
    borderRadius?: string;
}

export const LinkStyle = styled(Link)<linkStyle>`
    display:${(props) => props.display || 'flex'};
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.color};
    width: ${(props) => props.width};
    height: ${(props) => props.height || '100%'} ;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-style: none;
    padding: ${(props) => props.padding};
    background-color: ${(props) => props.background};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.borderRadius};

    @media only screen and (max-width: 990px)
{
    text-align: center;
    padding: 0 5px;

    
}

`;
