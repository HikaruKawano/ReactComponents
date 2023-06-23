
import styled from 'styled-components';

interface props {
    bg: string
}

export const HeaderStyle = styled.header<props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
    background-color: ${(props) => props.bg};

    input[type=checkbox], .icon, .show{
        display: none;
    }

  



`;



