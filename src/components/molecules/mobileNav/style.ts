import styled, { css } from 'styled-components';

interface props {
    resDisplay?: string;
    display?: string;
    
}

interface containerProps{
    IsMenuOpen?: boolean
}

export const UlStyle = styled.ul<props>`
    list-style: none;
    display:${(props) => props.display || 'flex'} ;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    margin: 0 0 25px 0;

    @media only screen and (max-width: 990px) {
    display: ${(props) => props.resDisplay};
    }
`;

export const LiStyle = styled.li`
    padding: 0px 20px;
`;



export const ContainerMenu = styled.div<containerProps>`
    position: absolute;
    backdrop-filter: blur(3px);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: linear-gradient(90deg, rgba(40,42,54,0.9276960784313726) 0%, rgba(68,71,90,0.9276960784313726) 100%);

    opacity: 0;
    pointer-events: none;
    transition: .5s;
    transform: translateX(-50px);
    

    ${(props) => props.IsMenuOpen && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0px);

    `}
`;