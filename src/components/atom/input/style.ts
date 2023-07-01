import styled from 'styled-components';


interface props {
    width?: string;
    height?: string;
}

export const StyledInputContainer = styled.div<props>`
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};

`;

export const StyleInput = styled.input<props>`

    &.inputSimple{
        padding: 10px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.2);
        outline: 1px gray;
        color : gray;
        border: none;
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

