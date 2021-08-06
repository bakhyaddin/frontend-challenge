import React, {FunctionComponent} from "react";

import TopHalfStyled from "./styles";
import CircularNumber from "../CircularNumber/index";

interface Props {
    title: string
    subTitle: string
    color: string
    number: number
}

const TopHalf:FunctionComponent<Props> = ({
    title,
    subTitle,
    number,
    color,
}) => (
    <TopHalfStyled>
        <CircularNumber number={number} color={color} />
        <h1>
            {title}
        </h1>
        <p className="sub-title" > 
            {subTitle}
        </p>
    </TopHalfStyled>
)

export default TopHalf;