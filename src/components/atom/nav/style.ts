import styled from 'styled-components';

interface props{
      resDisplay?: string;
      display?: string;
}

export const NavStyle = styled.nav<props>`
      display:${(props) => props.display || ' flex'};
      justify-content: space-between;
      width: 100%;

      @media only screen and (max-width: 990px) {
            width: auto;
            display:${(props) => props.resDisplay} ;
      }
`;
