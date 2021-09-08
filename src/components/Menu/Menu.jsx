import {
	MenuOuter,
	MenuItem,
	MenuLink,
	MenuLinkDisbaled,
	Dropdown,
	DropdownMenuItem,
	DropdownMenuLink
} from './Menu.elements';
import { FiChevronDown } from 'react-icons/fi';

const Menu = () => {
	return (
		<MenuOuter>
			<MenuItem>
				<MenuLink to="/" activeClassName="active" exact>
					Digital Transformation
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink to="/course">Course</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLinkDisbaled to="/program">
					Program <FiChevronDown />
				</MenuLinkDisbaled>
				<Dropdown>
					<DropdownMenuItem>
						<DropdownMenuLink>Sub menu 1</DropdownMenuLink>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<DropdownMenuLink>Sub menu 1</DropdownMenuLink>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<DropdownMenuLink>Sub menu 1</DropdownMenuLink>
					</DropdownMenuItem>
				</Dropdown>
			</MenuItem>
			<MenuItem>
				<MenuLink to="/study-case">Case Study</MenuLink>
			</MenuItem>
		</MenuOuter>
	);
};

export default Menu;
