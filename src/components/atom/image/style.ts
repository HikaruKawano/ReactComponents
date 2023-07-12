import styled from 'styled-components';

export interface propsStyleImg {
    display?: string;
    height?: string;
    margin?: string;
    align?: string;
    justify?: string;
    borderRadius?: string;
    width?: string;
    
    resHeight?: string;
    resWidth?: string;
    resMinWidth?: string;
    resMargin?: string;
    resDisplay?: string;
    resTop?: string;
    resLeft?: string;
    resPosition?: string;
}

export const ImgStyele = styled.img.attrs<propsStyleImg>({
    className: 'w-80 h-80 mx-11 rounded-2xl block'
})`
    width: ${(props) => props.width};
    height:${(props) => props.height} ;
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.borderRadius};
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    
`;
