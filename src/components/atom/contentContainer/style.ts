import styled from 'styled-components';
import Colors from '../../../color/colors';

export const ArticleStyle = styled.article`
    height: 100vh;
    background-color: ${Colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 35px;

    @media screen  and (max-width: 950px){
        display: flex;
        flex-direction: column;

     
        
    }
`;
