import React, { Component } from 'react';
import Select from 'react-select';

class SearchCountry extends Component {
	state = {
		text: '',
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.searchCountry(this.state.text);
		this.setState({ text: '' });
	};

	onChange = (e) => {
		if (e) {
			this.setState({ text: e.value });
		}
	};

	render() {
		return (
			<div className='col-12 text-center mb-0'>
				<form onSubmit={this.onSubmit}>
					<div className='form-row'>
						<div className='form-group w-100'>
							<Select
								isClearable
								onChange={this.onChange}
								escapeClearsValue={true}
								// onInputChange={this.onChange}
								options={this.props.countries}
							/>
						</div>
					</div>
					<div className='form-group '>
						<input
							type='submit'
							className='btn btn-success w-100'
							value='Search'
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchCountry;
