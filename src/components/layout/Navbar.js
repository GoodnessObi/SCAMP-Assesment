import React from 'react';
// import Search from '../country/Search';
import PropTypes from 'prop-types';
import logo from '../../assets/images/icons8-coronavirus-64.png';

const Navbar = ({ title }) => {
	return (
		<div>
			<nav className='navbar  navbar-custom'>
				<div className='container'>
					<div className='navbar-brand'>
						<img src={logo} alt='' style={{ width: '50px', height: '50px' }} />
						{title}
					</div>
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Navbar;
