import styled from 'styled-components';


interface props {
  margin?: string;
  textAlign?: string;
}

export const TitleStyle = styled.h1<props>`
      font-weight: 600;
      color: white;
      letter-spacing: -0.02em;
      line-height: 40px;
      font-style: normal;
      font-size: 28px;
      padding-bottom: 8px;

      @media screen and (max-width: 990px) {
        display: block;
        font-size: 1.2rem;
        margin-right: 0px;
        text-align: center;
    }
`;
