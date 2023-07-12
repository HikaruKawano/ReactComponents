import styled from 'styled-components';



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

export const ContainerStyle = styled.div.attrs<props>({
  className: "w-2/4 h-96 flex items-center justify-center flex-col rounded-2xl backdrop-blur-2xl",
})`
    flex-basis: ${(props) => props.flexBasis};
    padding: ${(props) => props.padding};
    background-color:${(props) => props.background || 'rgba(0, 0, 0, 0.2)'};
    width: ${(props) => props.width };
    height: ${(props) => props.height};
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    flex-direction: ${(props) => props.flexDirection};
    border-radius: ${(props) => props.borderRadius};
    margin:${(props) => props.margin};
   
    
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
