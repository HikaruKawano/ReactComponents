import React, { MouseEventHandler } from 'react';
import { LinkStyle } from './style';
import './style.css'

interface props{
    children?: JSX.Element | React.ReactElement | string | string[];
    color?: string
    link: string
    w?: string
    padding?: string
    display?: string
    ClassName?: string
    onClick?: MouseEventHandler<HTMLElement>
}

const ALink :React.FC<props> = ({
    children,
    color,
    link,
    w,
    padding,
    display,
    ClassName,
    onClick,
}) => (
    <LinkStyle className={ClassName} onClick={onClick} color={color} href={link} w={w} padding={padding} display={display}>
        {children}
    </LinkStyle>
)

export default ALink;