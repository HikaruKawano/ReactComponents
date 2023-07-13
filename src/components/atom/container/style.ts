import styled from 'styled-components';
import tw from 'twin.macro'

export const ContainerStyle = styled.div`
    ${tw`w-2/4 h-96 flex items-center bg-zinc-800 justify-center flex-col rounded-2xl backdrop-blur-2xl`}
`;

/* flex-basis: ${(props) => props.flexBasis};
    padding: ${(props) => props.padding};
    background-color:${(props) => props.background || 'rgba(0, 0, 0, 0.2)'};
    width: ${(props) => props.width };
    height: ${(props) => props.height};
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    flex-direction: ${(props) => props.flexDirection};
    border-radius: ${(props) => props.borderRadius};
    margin:${(props) => props.margin}; */