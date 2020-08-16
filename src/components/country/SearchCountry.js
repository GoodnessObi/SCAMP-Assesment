import React, { Component } from 'react';
import Search from 'react-search';

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
		if (e[0]) {
			console.log(e[0].value);
			this.setState({ text: e[0].value });
		}
	};

	render() {
		return (
			<div className='col-12 text-center mb-0'>
				<form onSubmit={this.onSubmit}>
					<div className='form-row'>
						<div className='form-group w-100'>
							<Search
								items={this.props.countries}
								placeholder='Search Country . . .'
								maxSelected={1}
								multiple={false}
								onItemsChanged={(e) => this.onChange(e)}
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
