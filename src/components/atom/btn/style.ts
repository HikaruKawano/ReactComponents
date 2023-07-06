
import styled from 'styled-components';
import Colors from '../../../color/colors';


interface btn {
    background?: string;
    width?: string;
    height?: string;
    margin?: string;
    color?: string;
    padding?: string;
    display?: string;
    align?: string;
    justify?: string;

    resDisplay?: string;
}



export const Button = styled.button<btn>`
    width: ${(props) => props.width || '25%'};
    height: ${(props) => props.height || '5vh'};
    background-color: ${(props) => props.background};
    border-radius: 15px;
    border: none;
    font-weight: bold;
    font-size: large;
    color: ${(props) => props.color || Colors.background};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
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


