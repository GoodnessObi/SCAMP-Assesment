import React, { Component, Fragment } from 'react';

class Search extends Component {
	state = {
		text: '',
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.searchCountry(this.state.text);
		this.setState({ text: '' });
	};

	onChange = (e) => {
		// this.setState({ text: e.target.value });
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<Fragment>
				<form onSubmit={this.onSubmit}>
					<div className='form-row'>
						<div className='form-group col-md-6'>
							<input
								type='text'
								className='form-control'
								name='text'
								value={this.state.text}
								placeholder='Search Country'
								onChange={this.onChange}
							/>
						</div>
					</div>
					<div className='form-group col-md-6'>
						<input type='submit' className='btn btn-success' value='Search' />
					</div>
				</form>
			</Fragment>
		);
	}
}

export default Search;
