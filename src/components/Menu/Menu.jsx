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
					Programs <FiChevronDown />
				</MenuLinkDisbaled>
				<Dropdown>
					<DropdownMenuItem>
						<DropdownMenuLink to="/">UKM Go Digital</DropdownMenuLink>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<DropdownMenuLink to="/">Goverment 4.0</DropdownMenuLink>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<DropdownMenuLink to="/">Campus Digital Sylabus</DropdownMenuLink>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<DropdownMenuLink to="/">Community Commerce</DropdownMenuLink>
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
