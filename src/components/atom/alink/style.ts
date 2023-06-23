import styled from 'styled-components';

interface linkStyle {
    color?: string;
    w?:string;
    padding?: string;
    display?: string;
}

export const LinkStyle = styled.a<linkStyle>`
    display:${(props) => props.display || 'flex'};
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.color};
    width: ${(props) => props.w};
    height: 100%;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-style: none;
    padding: ${(props) => props.padding};

    @media only screen and (max-width: 990px)
{
    text-align: center;
    padding: 0 5px;

    
}

`;
