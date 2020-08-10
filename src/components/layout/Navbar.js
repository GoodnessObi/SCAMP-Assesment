import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/icons8-coronavirus-64.png';

export class Navbar extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
	};

	render() {
		return (
			<div>
				<nav className='navbar navbar-custom'>
					<div className='container-fluid'>
						<div className='navbar-brand'>
							<img
								src={logo}
								alt=''
								style={{ width: '50px', height: '50px' }}
							/>
							{this.props.title}
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
