
import styled from 'styled-components';
import Colors from '../../../color/colors';


export interface propsStyleBtn {
    background?: string;
    width?: string;
    height?: string;
    margin?: string;
    color?: string;
    padding?: string;
    display?: string;
    align?: string;
    justify?: string;
    border?: string;
    borderRadius?: string;
    fontWeight?: string;
    fontSize?: string;

    resDisplay?: string;
}



export const Button = styled.button.attrs<propsStyleBtn>({
    className: 'w-1/4 h-8  bg-gray-500 rounded-2xl border-none font-bold text-xs text-gray-200'
})`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.background};
    border-radius: ${(props) => props.borderRadius};
    border: ${(props) => props.border};
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};

   
`;


