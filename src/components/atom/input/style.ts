import styled from 'styled-components';


interface props {
    width?: string;
    height?: string;
    padding?: string;
    radius?: string;
    outline?: string;
    border?: string;
}



export const StyleInput = styled.input<props>`

    &.inputSimple{
        padding:${(props) => props.padding || '10px'};
        border-radius: ${(props) => props.radius || '10px'};
        background-color: rgba(0, 0, 0, 0.2);
        outline: ${(props) => props.outline || '1px gray'} ;
        color : ${(props) => props.color || 'gray'} ;
        border: ${(props) => props.border || 'none'} ;
        width: ${(props) => props.width};
        height: ${(props) => props.height};

        &:focus{
            animation: focus 1s ease;
            -webkit-animation-fill-mode: forwards;
        }

        &::placeholder{
            padding: 5px;
        }

        @keyframes focus {
            from{
                outline: 1px solid rgba(0, 0, 0, 0.2);
            }
            to{
                outline: 1.5px solid gray;
            }
        }
    }

`;

