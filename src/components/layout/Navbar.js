import React from 'react';
// import Search from '../country/Search';
import PropTypes from 'prop-types';
import logo from '../../assets/images/icons8-coronavirus-64.png';

const Navbar = ({ title }) => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-custom bg-light'>
				<div className='container'>
					<div className='navbar-brand'>
						<img src={logo} alt='' style={{ width: '50px', height: '50px' }} />
						{title}
					</div>
					{/* <button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarTogglerDemo02'
						aria-controls='navbarTogglerDemo02'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
						<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
							<li className='nav-item'>Home</li>
							<li className='nav-item'>About</li>
						</ul>
					
					</div> */}
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Navbar;
