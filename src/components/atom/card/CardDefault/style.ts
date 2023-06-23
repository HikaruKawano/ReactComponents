import styled from 'styled-components';
import Colors from '../../../color/colors';

interface props {
    width?: string;
    height?: string;
    flexDirection?: string;
    align?: string;
    margin?: string;
    justify?: string;
    boxShadow?: string;
    borderRadius?: string;
    opacity?: string;
    color?: string;
    padding?: string;


    resWidth?: string;
    resHeight?: string;
    resFlexDirection?: string;
    resMargin?: string;
    resPadding?: string;
    resAlign?: string;
}



export const CardContainerStyle = styled.div<props>`
    &.CardDefault{
        position: relative;
        background-clip: padding-box;
        border-radius: 45px;
        padding: 40px;
        width: ${(props) => props.width};
        height:${(props) => props.height};
        background: ${(props) => props.color || 'linear-gradient(71deg, #080509, #1a171c, #080509)'};
        padding: ${(props) => props.padding};
        margin: ${(props) => props.margin};
        flex-direction: ${(props) => props.flexDirection};
        margin: ${(props) => props.margin};
        opacity: ${(props) => props.opacity};
        box-shadow: ${(props) => props.boxShadow};
        &:after {
            background: linear-gradient(71deg, #0d1212, #3da077, #0d1212);
            position: absolute;
            top: -1px;
            bottom: -1px;
            left: -1px;
            right: -1px;
            content: "";
            z-index: -1;
            border-radius: 45px;
        }
    }

    &.CardStyle_1{
        display: flex;
        flex-direction: column;
        width: 90%;
        padding: 1rem;
    }
`;

export const CardStyle = styled.div<props>`
    &.CardDefault{
        border: 0;
        margin-inline: auto;
        display: flex;
        align-items:${(props) => props.align} ;
        justify-content:${(props) => props.justify} ;
        width: ${(props) => props.width || '100%'} ;
        height:${(props) => props.height};
        background-color: ${(props) => props.color};
        border-radius:${(props) => props.borderRadius || '15px'};
        padding-right: 45px;
        padding-left: 55px;
        flex-direction: ${(props) => props.flexDirection};
        margin: ${(props) => props.margin};
        opacity: ${(props) => props.opacity};
        box-shadow: ${(props) => props.boxShadow};
    }

    &.CardStyle_1{
        user-select: none;
        margin: ${(props) => props.margin};
        border: 1px solid #ffffff22;
        background-color: #282c34;
        background: linear-gradient(0deg, #282c34 0%, rgba(17, 0, 32, 0.5) 100%);
        box-shadow: 0 7px 20px 5px #00000088;
        border-radius: 0.7rem;
        /* backdrop-filter: blur(7px); */
        -webkit-backdrop-filter: blur(7px);
        overflow: hidden;
        transition: 0.5s all;
        width: ${(props) => props.width};
        height: ${(props) => props.height};

        ::before {
            position: fixed;
            content: "";
            box-shadow: 0 0 100px 40px #ffffff08;
            top: -10%;
            left: -100%;
            transform: rotate(-45deg);
            height: 60rem;
            transition: 0.7s all;
        }

        &.CardStyle_1:hover {
            border: 1px solid #ffffff44;
            box-shadow: 0 7px 50px 10px #000000aa;
            transform: scale(1.015);
            filter: brightness(1.3);
        }

        :hover ::before {
            filter: brightness(0.5);
            top: -100%;
            left: 200%;
        }
    }
    

    @media only screen and (max-width: 990px) {
    display: flex;
    flex-direction:${(props) => props.resFlexDirection || 'column'} ;
    align-items:${(props) => props.resAlign || 'center'} ;
    justify-content: center;
    height:${(props) => props.resHeight || '90%'} ;
    padding: ${(props) => props.resPadding || '0'};
    width: ${(props) => props.resWidth};
    margin: ${(props) => props.resMargin};
    .btnDonwload{
        width: 100%;
    }

    &#Login{
        background-color: antiquewhite;
    }
        
    }
    
`;
