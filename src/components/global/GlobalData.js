import React from 'react';
import Spinner from '../layout/Spinner';

const GlobalData = ({ global, loading }) => {
	const {
		NewConfirmed,
		TotalConfirmed,
		NewDeaths,
		TotalDeaths,
		NewRecovered,
		TotalRecovered,
	} = global;
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className='col-md-6 text-center'>
				<h4>Global Data</h4>
				<div class='alert alert-success' role='alert'>
					<span className='badge badge-success case-title'>
						Total Number of cases{' '}
					</span>
					<br /> {TotalConfirmed}
				</div>
				<div class='alert alert-success' role='alert'>
					<span className='badge badge-success case-title'>
						Total Number of Recoveries{' '}
					</span>
					<br /> {TotalRecovered}
				</div>
				<div class='alert alert-success' role='alert'>
					<span className=' badge badge-success case-title'>
						Total Number of Deaths{' '}
					</span>
					<br /> {TotalDeaths}
				</div>
				<div class='alert alert-success' role='alert'>
					<span className='badge badge-success case-title'>
						Number of New cases <br /> last 24 hours
					</span>
					<br /> {NewConfirmed}
				</div>
				<div class='alert alert-success' role='alert'>
					<span className='badge badge-success case-title'>
						Number of Deaths <br /> last 24 hours
					</span>
					<br /> {NewDeaths}
				</div>
				<div class='alert alert-success' role='alert'>
					<span className='badge badge-success case-title'>
						Number of Recovered
						<br /> last 24 hours
					</span>
					<br /> {NewRecovered}
				</div>
			</div>
		);
	}
};

export default GlobalData;
