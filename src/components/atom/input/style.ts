import styled from 'styled-components';


export interface propsStyleInput {
    width?: string;
    height?: string;
    padding?: string;
    radius?: string;
    outline?: string;
    border?: string;
    background?: string;
    margin?: string;
}



export const StyleInput = styled.input.attrs<propsStyleInput>({
    className: 'p-2.5 rounded-xl outline-1 outline-gray-950 text-gray-700 border-none mb-6'
})`

    &.inputSimple{
        padding:${(props) => props.padding};
        border-radius: ${(props) => props.radius};
        background-color: ${(props) => props.background || 'rgba(0, 0, 0, 0.2)'};
        outline: ${(props) => props.outline} ;
        color : ${(props) => props.color} ;
        border: ${(props) => props.border} ;
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        margin: ${(props) => props.margin};

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

