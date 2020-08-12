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
			<div className='col-md-6 border rounded-lg mt-5'>
				<ul>
					<li>
						Total Number of cases: <span> {TotalConfirmed} </span>
					</li>
					<li>
						Total Number of Recoveries: <span> {TotalRecovered} </span>
					</li>
					<li>
						Total Number of Deaths: <span> {TotalDeaths} </span>
					</li>
					<li>
						Number of New cases <br /> (last 24 hours) :
						<span>{NewConfirmed} </span>
					</li>
					<li>
						Number of Deaths <br /> (last 24 hours) : <span>{NewDeaths} </span>
					</li>
					<li>
						Number of Recovered <br /> (last 24 hours) :
						<span>{NewRecovered} </span>
					</li>
				</ul>
			</div>
		);
	}
};

export default GlobalData;
