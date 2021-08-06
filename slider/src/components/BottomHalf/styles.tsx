import styled from 'styled-components'

interface Props {
    color: string;
}

export default styled.div<Props>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${props => props.color};
	height: 50vh;
`