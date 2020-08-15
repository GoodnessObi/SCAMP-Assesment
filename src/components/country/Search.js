import React, { Component } from 'react';

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
			<div className='col-12 text-center mb-0'>
				<form onSubmit={this.onSubmit}>
					<div className='form-row'>
						<div className='form-group w-100'>
							<input
								type='text'
								className='basicAutoComplete form-control w-100'
								name='text'
								value={this.state.text}
								placeholder='Search Country . . .'
								onChange={this.onChange}
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

export default Search;
