import styled from 'styled-components';
import Colors from '../../../stories/components/color/colors';

export const Container = styled.div`
    
`;

export const FooterStyle = styled.footer`
    width: 100%;
    background: ${Colors.background2};
    color: ${Colors.puple};
    display: flex;
   
    @media only screen and (max-width: 990px)
    {
        flex-direction: column;
    }
`;

