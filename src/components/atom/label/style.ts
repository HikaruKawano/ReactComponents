import styled from 'styled-components';

export interface propsStyleLabel {
    color?: string;
    padding?: string;
    fontSize?: string;
    margin?: string;
    display?: string;
    textAlign?: string;
    height?: string;
}

export const TextStyle = styled.label.attrs<propsStyleLabel>({
    className: 'text-gray-500 text-base text-justify block'
})`
    font-weight: 600;
    line-height: 32px;

    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize} ;
    margin: ${(props) => props.margin};
    text-align:${(props) => props.textAlign} ;
    padding: ${(props) => props.padding};
    display: ${(props) => props.display} ;
    height: ${(props) => props.height};

   
`;
