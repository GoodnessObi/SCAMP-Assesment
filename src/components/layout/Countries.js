import React, { Component, Fragment } from 'react';
import CountryData from './CountryData';

class Countries extends Component {
	render() {
		return (
			<Fragment>
				{this.props.countries.map((country) => (
					<CountryData key={country.CountryCode} country={country} />
				))}
			</Fragment>
		);
	}
}

export default Countries;
