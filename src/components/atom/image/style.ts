import styled from 'styled-components';

interface props {
    display?: string;
    height?: string;
    margin?: string;
    align?: string;
    justify?: string;

    resHeight?: string;
    resWidth?: string;
    resMinWidth?: string;
    resMargin?: string;
    resDisplay?: string;
    resTop?: string;
    resLeft?: string;
    resPosition?: string;
}

export const ImgStyele = styled.img<props>`
    width: ${(props) => props.width || '45%'};
    height:${(props) => props.height || '55%'} ;
    margin: ${(props) => props.margin || '0 45px 0 45px'};
    border-radius: 15px;
    display: ${(props) => props.display || 'block'};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    

    @media only screen and (max-width: 990px) {
    height:${(props) => props.resHeight || '30%'} ;
    width:${(props) => props.resWidth || '70%'} ;
    min-width:${(props) => props.resMinWidth || '70%'} ;
    margin: ${(props) => props.resMargin || '0 0 25px 0'};
    display: ${(props) => props.resDisplay};
    top: ${(props) => props.resTop};
    left: ${(props) => props.resLeft};
    position: ${(props) => props.resPosition};
    
}

@media only screen and (max-width: 666px) {
    display:${(props) => props.resDisplay || 'none'} ;
}
`;
