import React, { FunctionComponent } from "react";

import CircularNumberStyled from "./styles";

interface Props {
    number: number
    color: string
}

const CircularNumber: FunctionComponent<Props> = ({color, number}) => (
        <CircularNumberStyled color={color}>
            {number}
        </CircularNumberStyled>
    )

export default CircularNumber