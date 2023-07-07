import styled from 'styled-components';

interface props {
    color?: string;
    padding?: string;
    fontSize?: string;
    margin?: string;
    display?: string;
    textAlign?: string;
    height?: string;
}

export const TextStyle = styled.label<props>`
    font-weight: 600;
    line-height: 32px;

    color: ${(props) => props.color || 'rgb(255 255 255 / 0.5)'};
    font-size: ${(props) => props.fontSize || '16px'} ;
    margin: ${(props) => props.margin};
    text-align:${(props) => props.textAlign || 'justify'} ;
    padding: ${(props) => props.padding};
    display: ${(props) => props.display || 'block'} ;
    height: ${(props) => props.height};

    @media screen and (max-width: 990px) {
        display: block;
        font-size: 1.2rem;
        margin-right: 0px;
        text-align: center;
    }
`;
