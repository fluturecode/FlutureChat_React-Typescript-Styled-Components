import React from "react"
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100vw;
	height: 100vh;
`

export const Layout = () => {
	return (
		<Container>
			<div>Message Box</div>
		</Container>
	)
}
