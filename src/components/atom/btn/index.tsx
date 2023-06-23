import React, { MouseEventHandler } from 'react';
import { Button } from './style';

interface ButtonStyle{
    children?: JSX.Element | React.ReactNode
    bg?: string
    height?:string
    width?:string
    mt?: string
    color?:string
    className?:string
    pd?: string
    display?:string
    align?:string
    justify?:string
      onClick?: MouseEventHandler<HTMLElement>;

    resDisplay?:string
}

const Btn :React.FC<ButtonStyle> = ({
    children,
    bg,
    height,
    width,
    mt, 
    color,
    className,
    pd,
    display,
    align,
    justify,
    onClick,

    resDisplay,
}) => {
    return (
    <Button bg={bg} h={height} w={width} mt={mt} onClick={onClick} color={color} display={display} className={className} pd={pd} justify={justify} align={align} resDisplay={resDisplay}>
        {children}
    </Button>
    )
};

export default Btn;