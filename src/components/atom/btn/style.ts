
import styled from 'styled-components';
import Colors from '../../../stories/components/color/colors';
import './style.css';

interface btn {
    bg?: string;
    w?: string;
    h?: string;
    mt?: string;
    color?: string;
    pd?: string;
    display?: string;
    align?: string;
    justify?: string;

    resDisplay?: string;
}



export const Button = styled.button<btn>`
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    background-color: ${(props) => props.bg};
    border-radius: 15px;
    border: none;
    font-weight: bold;
    font-size: large;
    color: ${(props) => props.color || Colors.background};
    margin-top: ${(props) => props.mt};
    padding: ${(props) => props.pd};
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};

    @media screen and (max-width:990px){
        display: ${(props) => props.resDisplay};

        .btnDonwload{
            width: 100%;
        }
    }
`;


