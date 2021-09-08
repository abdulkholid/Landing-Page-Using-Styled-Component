import styled from '@emotion/styled';

export const Nav = styled.nav`
	background-color: #fff;
	position: fixed;
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
    box-shadow: 0px 5px 20px #f5f5f5;
`;

export const NavContainer = styled.div`
	max-width: 100%;
    width: 1300px;
    display: flex;
    margin: auto;
`;

export const LeftSectionNav = styled.div`
	width: 20%;
	/* background-color: #aaa; */
`;

export const MiddleSectionNav = styled.div`
	width: 60%;
    display: flex;
	/* background-color: #bbb; */
    justify-content: center;
`;

export const RightSectionNav = styled.div`
	width: 20%;
    display: flex;
	/* background-color: #ccc; */
    justify-content: flex-end;
`;
