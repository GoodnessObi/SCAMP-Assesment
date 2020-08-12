import React, { Fragment } from 'react';
import CountryData from './CountryData';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Countries = ({ countries, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<Fragment>
				{countries.map((country) => (
					<CountryData key={country.CountryCode} country={country} />
				))}
			</Fragment>
		);
	}
};

Countries.propTypes = {
	countries: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default Countries;
