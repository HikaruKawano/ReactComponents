import styled from 'styled-components';
import Colors from '../../../color/colors';

interface props {
    background?: string;
    width?: string;
    height?: string;
    display?: string;
    align?: string;
    justify?: string;
    flexDirection?: string;
  }

export const FormStyle = styled.form<props>`

  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100vh'};
  display: ${(props) => props.display || 'flex'};
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'center'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
`;
