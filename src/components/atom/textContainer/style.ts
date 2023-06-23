import styled from 'styled-components';

interface props {
    w?: string;
    h?: string;
}

export const ContainerText = styled.div<props>`
    width: ${(props) => props.w}; 
    height: ${(props) => props.h};

    @media only screen and (max-width: 990px) {
        width: 65%;
    }
`;
