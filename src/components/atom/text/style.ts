import styled from 'styled-components';


export interface propsStyleText {
    color?: string;
    padding?: string;
    fontSize?: string;
    margin?: string;
    display?: string;
    textAlign?: string;
    fontWeight?: string;
    lineHeight?: string;
    maxWidth?: number;


    resMargin?: string;
}

export const TextStyle = styled.p.attrs<propsStyleText>({
    className: 'font-semibold leading-8 text-gray-500 text-base max-w-lg'
})`
    font-weight: ${(props) => props.fontWeight};
    line-height: ${(props) => props.lineHeight};
    color:  ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    max-width: ${(props) => props.maxWidth};

`;
