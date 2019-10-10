import styled from "styled-components";
import { palette, spacing, mobileSize } from "@styles/vars";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body {
		background: ${palette.primary};
		
		@media (max-width: ${mobileSize}) {
			background: #fff;
		}
	}
`;

export const Body = styled.div`
	padding: 100px 0;
	display: flex;
	justify-content: center;
	
	@media (max-width: ${mobileSize}) {
		padding: 0;
	}
`;

export const UsersWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${spacing(3)}px;
	width: 500px;
	min-height: 400px;
	border-radius: 4px;
	background: #fff;
	box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.2);
	
	@media (max-width: ${mobileSize}) {
		box-shadow: none;
		border-radius: 0;
	}
`;

export const UsersContent = styled.div`
	width: 100%;
	height: 100%;
	
	h1 {
		padding: 0;
		margin: 0 0 ${spacing(3)}px 0;
		color: ${palette.primary};
	}
`;

export const EmptyList = styled.div`
	padding: 25px 0;
	opacity: .4;
`;
