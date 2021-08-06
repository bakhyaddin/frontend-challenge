import React, {FunctionComponent} from "react";

import BottomHalfStyled from "./styles";

interface Props {
    Icon: any,
    color: string
}

const BottomHalf:FunctionComponent<Props> = ({ Icon, color }) => (
    <BottomHalfStyled color={color} >
        <Icon/>
    </BottomHalfStyled>
)

export default BottomHalf;