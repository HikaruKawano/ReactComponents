import { ReactNode } from "react";
import { Button, Container, Input, Label, Text } from "../../atom";
import Image from "../../atom/image";
import Link from "../../atom/link";
import { propsContainer } from "../../atom/container";

interface props extends propsContainer{
    children: ReactNode
}

const Card = {
    root: Container,
    text: Text,
    image: Image,
    button: Button,
    label: Label,
    input: Input,
    link: Link,
}

export const Template = {
    componets: Card,

    Card: (props: props) => {
        return(
            <Card.root {...props} >
                {props.children}
            </Card.root>
        )
    }
}