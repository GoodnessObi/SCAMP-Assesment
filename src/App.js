import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import GlobalData from './components/global/GlobalData';
import CountryData from './components/country/CountryData';
import axios from 'axios';
import SearchCountry from './components/country/SearchCountry';
import Alert from './components/layout/Alert';

class App extends Component {
	state = {
		global: {},
		countries: [],
		country: {},
		loading: false,
		alert: null,
		countryList: [],
	};
	async componentDidMount() {
		this.setState({ loading: true });
		const result = await axios.get('https://api.covid19api.com/summary');

		this.setState({
			global: result.data.Global,
			countries: result.data.Countries,
			loading: false,
			countryList: this.transformCountries(result.data.Countries),
		});
	}

	transformCountries = (countryArray) => {
		return countryArray.map((country, index) => ({
			id: index,
			label: country.Country,
			value: country.Country,
		}));
	};

	//search country
	searchCountry = (text) => {
		const searchResult = this.state.countries.filter(
			(country) =>
				country.Country.toLowerCase() === `${text.toLowerCase().trim()}`
		);
		if (searchResult.length < 1) {
			this.setAlert('Please enter a valid Country name!');
		} else {
			this.setState({ country: searchResult[0] });
		}
		// console.log(searchResult);
	};

	//set alert
	setAlert = (msg, type) => {
		this.setState({ alert: { msg } });
		setTimeout(() => this.setState({ alert: null }), 3000);
	};

	render() {
		return (
			<div>
				<Navbar title='Covid-19 Tracker' />
				<div className='main pt-2'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-md-6'>
								<Alert alert={this.state.alert} />
								<SearchCountry
									searchCountry={this.searchCountry}
									countries={this.state.countryList}
								/>
							</div>
						</div>
						<div className='row justify-content-center'>
							<GlobalData
								loading={this.state.loading}
								global={this.state.global}
							/>
							<CountryData country={this.state.country} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
