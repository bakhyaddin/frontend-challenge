import styled from "styled-components";

interface Props {
	color: string
}

export default styled.div<Props>`
    background: ${({color}) => color};
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
`