import React from 'react';
import { FormStyle } from './style';

interface props {
    children: string | JSX.Element | React.ReactElement
}

const Form:React.FC<props> = ({children}) => {
    return (
        <FormStyle>
            {children}
        </FormStyle>
    )
}

export default Form;