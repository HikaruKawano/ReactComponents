import React, { MouseEventHandler } from 'react';
import { Button } from './style';

interface ButtonProps{
    children?: JSX.Element | React.ReactNode
    background?: string
    height?:string
    width?:string
    margin?: string
    color?:string
    className?:string
    padding?: string
    display?:string
    align?:string
    justify?:string
      onClick?: MouseEventHandler<HTMLElement>;

    resDisplay?:string
}

const Btn = ({
    children,
    background,
    height,
    width,
    margin, 
    color,
    className,
    padding,
    display,
    align,
    justify,
    onClick,

    resDisplay,
}: ButtonProps) => {
    return (
    <Button background={background} height={height} width={width} margin={margin} onClick={onClick} color={color} display={display} className={className} padding={padding} justify={justify} align={align} resDisplay={resDisplay}>
        {children}
    </Button>
    )
};

export default Btn;