import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../scss/NavBar.scss';
import { CustomNavLinkProps } from '../types/NavBarTypes';

const CustomNavLink: FC<CustomNavLinkProps> = ({
	to,
	defaultActive,
	...rest
}) => {
	const { pathname } = useLocation();
	const isActive = pathname === to || (defaultActive && pathname === '/');
	const className = `${isActive ? 'active' : ''} navLink`;
	return <NavLink {...rest} to={to} className={className} />;
};

const NavBar: FC = () => {
	return (
		<div className='navBar'>
			<nav>
				<CustomNavLink to='/A' defaultActive>
					Orders A
				</CustomNavLink>
				<CustomNavLink to='/AA'>Orders AA</CustomNavLink>
				<CustomNavLink to='/AAA'>Orders AAA</CustomNavLink>
				<CustomNavLink to='/B'>Orders B</CustomNavLink>
				<CustomNavLink to='/C'>Orders C</CustomNavLink>
			</nav>
		</div>
	);
};

export default NavBar;
