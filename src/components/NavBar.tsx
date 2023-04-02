import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/NavBar.scss';

const NavBar: FC = () => {
	return (
		<>
			<div className='navBar'>
				<nav>
					<NavLink
						to='/A'
						className={({ isActive }) =>
							`${isActive ? 'active' : ''} navLink`
						}>
						Orders A
					</NavLink>
					<NavLink
						to='/AA'
						className={({ isActive }) =>
							`${isActive ? 'active' : ''} navLink`
						}>
						Orders AA
					</NavLink>
					<NavLink
						to='/AAA'
						className={({ isActive }) =>
							`${isActive ? 'active' : ''} navLink`
						}>
						Orders AAA
					</NavLink>
					<NavLink
						to='/B'
						className={({ isActive }) =>
							`${isActive ? 'active' : ''} navLink`
						}>
						Orders B
					</NavLink>
					<NavLink
						to='/C'
						className={({ isActive }) =>
							`${isActive ? 'active' : ''} navLink`
						}>
						Orders C
					</NavLink>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
