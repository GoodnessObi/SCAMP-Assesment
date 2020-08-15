import React from 'react';
import image from '../../assets/images/icons8-coronavirus-64.png';
// import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const CountryData = ({ country }) => {
	const {
		Country,
		NewConfirmed,
		TotalConfirmed,
		NewDeaths,
		TotalDeaths,
		NewRecovered,
		TotalRecovered,
	} = country;

	if ((country = '')) {
		return (
			<div>
				<img src={image} alt='' />
			</div>
		);
	} else {
		return (
			<div className='col-md-6 text-center'>
				<h4>{Country}</h4>
				<div class='alert alert-custom' role='alert'>
					<span className='badge badge-custom case-title'>
						Total Number of cases{' '}
					</span>
					<br /> {TotalConfirmed}
				</div>
				<div class='alert alert-custom' role='alert'>
					<span className='badge badge-custom case-title'>
						Total Number of Recoveries{' '}
					</span>
					<br /> {TotalRecovered}
				</div>
				<div class='alert alert-custom' role='alert'>
					<span className=' badge badge-custom case-title'>
						Total Number of Deaths{' '}
					</span>
					<br /> {TotalDeaths}
				</div>
				<div class='alert alert-custom' role='alert'>
					<span className='badge badge-custom case-title'>
						Number of New cases <br /> last 24 hours
					</span>
					<br /> {NewConfirmed}
				</div>
				<div class='alert alert-custom' role='alert'>
					<span className='badge badge-custom case-title'>
						Number of Deaths
						<br /> last 24 hours
					</span>
					<br /> {NewDeaths}
				</div>
				<div class='alert alert-custom' role='alert'>
					<span className='badge badge-custom case-title'>
						Number of Recovered <br /> last 24 hours
					</span>
					<br /> {NewRecovered}
				</div>
			</div>
		);
	}
};

CountryData.propType = {
	country: PropTypes.object.isRequired,
};

export default CountryData;
