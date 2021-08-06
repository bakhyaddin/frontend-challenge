import React, {FunctionComponent} from "react";

import PagesStyled from "./styles";
import TopHalf from "../components/TopHalf";
import BottomHalf from "../components/BottomHalf";

interface Props {
    title: string;
    subTitle: string;
    color: string;
    number: number;
    Icon: any;

}

const Pages: FunctionComponent<Props> = ({title, subTitle, color, number, Icon}) => (
    <PagesStyled className="page" >
        <TopHalf title={title} subTitle={subTitle} color={color} number={number} />
        <BottomHalf Icon={Icon} color={color} />
    </PagesStyled>)

export default Pages