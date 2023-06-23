import styled from 'styled-components';

interface props{
    resDisplay?: string;
}

export const UlStyle = styled.ul<props>`
    list-style: none;
    display: flex;
    
    @media only screen and (max-width: 990px) {
    display: ${(props) => props.resDisplay};
    }
`;

export const LiStyle = styled.li`
    padding: 0px 20px;
`;
