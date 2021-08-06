import styled from 'styled-components';
import { Water } from "styled-icons/ionicons-solid";
import { ColorPalette } from  "styled-icons/evaicons-solid";
import { Eyedropper } from "styled-icons/icomoon";


interface IconProps{
    width?: string
}

const COMMON_ICON_STYLE = (width: string | undefined) => `
    width: ${width || '50px'};
    color: white;
`;

export const WaterDrop = styled(Water)<IconProps>`
    ${({ width }) => COMMON_ICON_STYLE(width)};
`;

export const PaintTray = styled(ColorPalette)<IconProps>`
    ${({ width }) => COMMON_ICON_STYLE(width)};
`;

export const SelectColor = styled(Eyedropper)<IconProps>`
    ${({ width }) => COMMON_ICON_STYLE(width)};
`;