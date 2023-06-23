import styled from 'styled-components';
import Colors from '../../../stories/components/color/colors';

interface props {
    width?: string;
    height?: string;
}

export const StyleInput = styled.input<props>`
    width: ${(props) => props.width || '70%'};  
    height: ${(props) => props.height || '5%'};
    margin-bottom: 20px;
    color: aliceblue;
    border: none;
    border-bottom: 2px solid ${Colors.verde};
    background-color: transparent;
    padding: 10px;
    &:focus{
        border: none;
        border-bottom: 2px solid ${Colors.verde};
        outline: none;

    }
    &::placeholder{
        color: ${Colors.verde};
    }
`;
