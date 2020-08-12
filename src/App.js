import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import GlobalData from './components/global/GlobalData';
import CountryData from './components/country/CountryData';
import axios from 'axios';
import Search from './components/country/Search';

class App extends Component {
	state = {
		global: {},
		countries: [],
		country: [],
		loading: false,
	};
	async componentDidMount() {
		this.setState({ loading: true });
		const result = await axios.get('https://api.covid19api.com/summary');

		this.setState({
			global: result.data.Global,
			countries: result.data.Countries,
			loading: false,
		});
		// console.log(result.data.Global);

		// console.log(
		// 	result.data.Countries.filter((country) => {
		// 		return country.Country === 'Nigeria';
		// 	})
		// );
	}

	//search country
	searchCountry = (text) => {
		const searchResult = this.state.countries.filter(
			(country) =>
				country.Country.toLowerCase() === `${text.toLowerCase().trim()}`
		);
		if (searchResult.length < 1) {
			console.log('error');
		} else {
			this.setState({ country: searchResult[0] });
		}
		// console.log(searchResult);
	};

	render() {
		return (
			<div>
				<Navbar title='Covid-19 Tracker' />
				<div className='container'>
					<Search searchCountry={this.searchCountry} />
					<div className='row'>
						<GlobalData
							loading={this.state.loading}
							global={this.state.global}
						/>
						<CountryData
							loading={this.state.loading}
							country={this.state.country}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
