import { Nav, NavRow, LeftSectionNav, MiddleSectionNav, RightSectionNav } from './Navbar.elements';
import { Logo } from '../../components';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';

const Navbar = () => {
	return (
		<Nav>
			<div className="container">
				<NavRow>
					<LeftSectionNav>
						<Logo />
					</LeftSectionNav>

					<MiddleSectionNav>
						<Menu />
					</MiddleSectionNav>

					<RightSectionNav>
						<Button text="Ayo Kolaborasi" type="outline"/>
					</RightSectionNav>
				</NavRow>
			</div>
		</Nav>
	);
};

export default Navbar;
