import styled from 'styled-components';
import Colors from '../../color/colors';


interface props {
  flexBasis?: string;
  padding?: string;
  background?: string;
  width?: string;
  height?: string;
  display?: string;
  align?: string;
  justify?: string;
  flexDirection?: string;
  borderRadius?: string;
  margin?: string;
  opacity?: string

  resFlexBasis?: string;
  resPadding?: string;
  resBackground?: string;
  resWidth?: string;
  resHeight?: string;
  resDisplay?: string;
  resAlign?: string;
  resJustify?: string;
  resFlexDirection?: string;
  resMargin?: string;
}

export const ContainerStyle = styled.div<props>`
    flex-basis: ${(props) => props.flexBasis};
    padding: ${(props) => props.padding};
    background-color:${(props) => props.background || 'rgba(0, 0, 0, 0.2)'};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: ${(props) => props.display || 'flex'};
    align-items: ${(props) => props.align || 'center'};
    justify-content: ${(props) => props.justify || 'center'};
    flex-direction: ${(props) => props.flexDirection || 'column'};
    border-radius: ${(props) => props.borderRadius || '15px'};
    margin:${(props) => props.margin};
    backdrop-filter: blur(30px);
    
    @media only screen and (max-width: 990px)
 {
    margin: ${(props) => props.resMargin || ' 5px 0'};
    padding: ${(props) => props.resPadding || '10px 20px'} ;
    align-items: ${(props) => props.resAlign || 'normal'} ;
    width: ${(props) => props.resWidth || '100%'};
    height: ${(props) => props.resHeight};
    justify-content:${(props) => props.resJustify || 'center'};
    flex-direction: ${(props) => props.resFlexDirection};
    display: ${(props) => props.resDisplay || 'flex'};
}
`;
