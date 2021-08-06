import theme from "../theme/index";
import { WaterDrop, PaintTray, SelectColor } from "../assets/icons"

interface IData {
    id: number
    color: string;
    title: string;
    subTitle: string;
    Icon: any;
}

const data: Array<IData> = [
    {
        id: 1,
        color: theme.colors.blue,
        title: "Gradients",
        subTitle: "Start, end, angle",
        Icon: WaterDrop
    },
    {
        id: 2,
        color: theme.colors.green,
        title: "Presets",
        subTitle: "Manage Presets",
        Icon: PaintTray
    },
    {
        id: 3,
        color: theme.colors.red,
        title: "Colors",
        subTitle: "Pick any color",
        Icon: SelectColor
    }
]

export default data