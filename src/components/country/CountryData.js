import React from 'react';

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

	return (
		<div
			className={`col-md-6 text-center order-1 order-md-2 border mt-2 mb-1 py-1 ${
				Object.keys(country).length === 0 ? 'hide' : ''
			}`}>
			<h4>{Country}</h4>
			<div className='alert alert-custom' role='alert'>
				<span className='badge badge-custom case-title'>
					Total Number of cases{' '}
				</span>
				<br /> {TotalConfirmed}
			</div>
			<div className='alert alert-custom' role='alert'>
				<span className='badge badge-custom case-title'>
					Total Number of Recoveries{' '}
				</span>
				<br /> {TotalRecovered}
			</div>
			<div className='alert alert-custom' role='alert'>
				<span className=' badge badge-custom case-title'>
					Total Number of Deaths{' '}
				</span>
				<br /> {TotalDeaths}
			</div>
			<div className='alert alert-custom' role='alert'>
				<span className='badge badge-custom case-title'>
					Number of New cases <br /> last 24 hours
				</span>
				<br /> {NewConfirmed}
			</div>
			<div className='alert alert-custom' role='alert'>
				<span className='badge badge-custom case-title'>
					Number of Deaths
					<br /> last 24 hours
				</span>
				<br /> {NewDeaths}
			</div>
			<div className='alert alert-custom' role='alert'>
				<span className='badge badge-custom case-title'>
					Number of Recovered <br /> last 24 hours
				</span>
				<br /> {NewRecovered}
			</div>
		</div>
	);
	// }
};

CountryData.propType = {
	country: PropTypes.object.isRequired,
};

export default CountryData;
