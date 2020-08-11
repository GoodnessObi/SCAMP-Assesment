import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import GlobalData from './components/layout/GlobalData';
import Countries from './components/layout/Countries';
import axios from 'axios';

class App extends Component {
	state = {
		global: {},
		countries: [],
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
		console.log(result.data.Global);

		console.log(result.data.Countries);
	}

	render() {
		return (
			<div>
				<Navbar title='Covid-19 Tracker' />
				<div className='container'>
					<div className='row'>
						<GlobalData
							loading={this.state.loading}
							global={this.state.global}
						/>
					</div>
					<div className='row'>
						<Countries
							loading={this.state.loading}
							countries={this.state.countries}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
