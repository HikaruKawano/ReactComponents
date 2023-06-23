import styled from 'styled-components';


interface props {
  flexDirection?: string;
  aling?: string;
  justify?: string;
}

export const SocialStyle = styled.div<props>`
      margin: 10px 0 0 0;
      display: flex;
      flex-direction: ${(props)=> props.flexDirection};
      align-items: ${(props)=> props.aling};
      justify-content: ${(props)=> props.justify};
      
`;
