import React from 'react';
import PropTypes from 'prop-types';

const CountryData = (props) => {
	const {
		Country,
		NewConfirmed,
		TotalConfirmed,
		NewDeaths,
		TotalDeaths,
		NewRecovered,
		TotalRecovered,
	} = props.country;
	return (
		<div className='col-6 border rounded-lg mt-5'>
			<h2>{Country}</h2>
			<ul>
				<li>
					Total Number of cases: <span> {TotalConfirmed} </span>
				</li>
				<li>
					Total Number of Recoveries: <span> {TotalRecovered} </span>
				</li>
				<li>
					Total Number of Deaths: <span> {TotalDeaths} </span>
				</li>
				<li>
					Number of New cases <br /> (last 24 hours) :
					<span>{NewConfirmed} </span>
				</li>
				<li>
					Number of Deaths <br /> (last 24 hours) : <span>{NewDeaths} </span>
				</li>
				<li>
					Number of Recovered <br /> (last 24 hours) :
					<span>{NewRecovered} </span>
				</li>
			</ul>
		</div>
	);
};

CountryData.propType = {
	country: PropTypes.object.isRequired,
};

export default CountryData;
