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
			<div className='col-md-6 text-center order-2 order-md-1 border mt-2 mb-1 py-2'>
				<h4>Global Data</h4>
				<div className='alert alert-success' role='alert'>
					<span className='badge badge-success case-title'>
						Total Number of cases{' '}
					</span>
					<br /> {TotalConfirmed}
				</div>
				<div className='alert alert-success' role='alert'>
					<span className='badge badge-success case-title'>
						Total Number of Recoveries{' '}
					</span>
					<br /> {TotalRecovered}
				</div>
				<div className='alert alert-success' role='alert'>
					<span className=' badge badge-success case-title'>
						Total Number of Deaths{' '}
					</span>
					<br /> {TotalDeaths}
				</div>
				<div className='alert alert-success' role='alert'>
					<span className='badge badge-success case-title'>
						Number of New cases <br /> last 24 hours
					</span>
					<br /> {NewConfirmed}
				</div>
				<div className='alert alert-success' role='alert'>
					<span className='badge badge-success case-title'>
						Number of Deaths <br /> last 24 hours
					</span>
					<br /> {NewDeaths}
				</div>
				<div className='alert alert-success' role='alert'>
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
