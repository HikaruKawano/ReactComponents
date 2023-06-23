import styled from 'styled-components';
import Colors from '../../../stories/components/color/colors';

interface props {
    color?: string;
    padding?: string;
    fontSize?: string;
    margin?: string;
    display?: string;
    textAlign?: string;

    resMargin?: string;
}

export const TextStyle = styled.p<props>`
    font-weight: 600;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    max-width: 470px;

    @media screen and (max-width: 990px) {
        display: block;
        font-size: 1.2rem;
        margin-right: 0px;
        margin: ${(props) => props.resMargin}
    }
`;
