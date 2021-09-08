import { Nav, NavContainer, LeftSectionNav, MiddleSectionNav, RightSectionNav } from './Navbar.elements';
import { Logo } from '../../components';
import Menu from '../Menu/Menu';

const Navbar = () => {
	return (
		<Nav>
			<NavContainer>
				<LeftSectionNav>
					<Logo />
				</LeftSectionNav>

				<MiddleSectionNav>
					<Menu />
				</MiddleSectionNav>

				<RightSectionNav>right</RightSectionNav>
			</NavContainer>
		</Nav>
	);
};

export default Navbar;
