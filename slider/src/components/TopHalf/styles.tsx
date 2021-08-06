import styled, { keyframes } from 'styled-components'

const floatText = keyframes`
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(100);
	}
`

export default styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
	width: 100vw;

	.title {
		margin-bottom: 0px;
		animation: ${floatText} 5s infinite alternate ease-in-out;
	}

	.sub-title {
		margin-top: 5px;
		color: gray;
		animation: ${floatText} 5s infinite alternate ease-in-out;
	}

`
