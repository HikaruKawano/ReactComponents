import styled from 'styled-components';
import Colors from '../../../stories/components/color/colors';


export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 50%;

  @media screen and (max-width: 845px) {
    flex-direction: column;
    align-items: center;
    width: 100%; 
  }
`;

export const ArticleStyle = styled.article`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${Colors.background} ;

    @media screen and (max-width: 370px){
    
    flex-direction: column; 
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width:990px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;

